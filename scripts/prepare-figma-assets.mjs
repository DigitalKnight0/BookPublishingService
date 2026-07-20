import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const figmaRoot = path.join(projectRoot, "public/assets/figma");
const sourceRoots = [
  path.join(figmaRoot, "home"),
  path.join(figmaRoot, "services"),
];
const outputRoot = path.join(figmaRoot, "library");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(filePath)));
    else if (/\.(png|jpe?g|webp|gif)$/i.test(entry.name)) files.push(filePath);
  }

  return files;
}

function classify(relativePath) {
  const rules = [
    [/home-book-launch/, ["book-launch", "asset"]],
    [/home-cta-one/, ["cta", "publishing-steps"]],
    [/home-cta-two/, ["cta", "publishing-services"]],
    [/home-hero/, ["hero", "home"]],
    [/home-intro-services/, ["brand-services", "asset"]],
    [/home-logos/, ["brand", "partner"]],
    [/home-portfolio/, ["books", "portfolio"]],
    [/home-process-pricing/, ["process", "asset"]],
    [/home-services/, ["services", "home-service"]],
    [/home-testimonials/, ["testimonials", "asset"]],
    [/services-grid/, ["services", "service-card"]],
    [/services-hero/, ["hero", "services"]],
    [/services-work/, ["books", "featured"]],
    [/services-books/, ["books", "portfolio"]],
    [/services-intro/, ["books", "portfolio"]],
    [/services\//, ["services-page", "asset"]],
  ];

  return (
    rules.find(([pattern]) => pattern.test(relativePath))?.[1] ?? [
      "misc",
      "asset",
    ]
  );
}

const sourceFiles = (await Promise.all(sourceRoots.map(walk))).flat().sort();
const unique = new Map();

for (const filePath of sourceFiles) {
  const input = await readFile(filePath);
  const checksum = createHash("sha256").update(input).digest("hex");

  if (!unique.has(checksum)) {
    unique.set(checksum, {
      checksum,
      filePath,
      relativePath: path.relative(figmaRoot, filePath),
      input,
    });
  }
}

const counters = new Map();
const manifestAssets = [];

for (const source of unique.values()) {
  const [category, baseName] = classify(source.relativePath);
  const counterKey = `${category}/${baseName}`;
  const sequence = (counters.get(counterKey) ?? 0) + 1;
  counters.set(counterKey, sequence);

  const filename = `${baseName}-${String(sequence).padStart(2, "0")}.webp`;
  const relativeOutput = path.posix.join("library", category, filename);
  const outputPath = path.join(figmaRoot, relativeOutput);
  const sourceMetadata = await sharp(source.input).metadata();
  const pipeline = sharp(source.input).rotate();

  const { data, info } = await pipeline
    .webp({
      quality: 100,
      alphaQuality: 100,
      nearLossless: true,
      smartSubsample: false,
    })
    .toBuffer({ resolveWithObject: true });

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, data);

  manifestAssets.push({
    id: `${category}-${baseName}-${String(sequence).padStart(2, "0")}`,
    category,
    path: `/assets/figma/${relativeOutput}`,
    width: info.width,
    height: info.height,
    sourceWidth: sourceMetadata.width,
    sourceHeight: sourceMetadata.height,
    checksum: source.checksum,
    source: source.relativePath,
  });
}

const manifest = {
  source: "Figma / Immaculate Publishing",
  fileKey: "BCt8ImdzpZEHKoc8RXnp35",
  sourceFiles: sourceFiles.length,
  uniqueAssets: manifestAssets.length,
  assets: manifestAssets,
};

await writeFile(
  path.join(figmaRoot, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(
  JSON.stringify({
    sourceFiles: sourceFiles.length,
    uniqueAssets: manifestAssets.length,
    output: path.relative(projectRoot, outputRoot),
  }),
);
