import Image from "next/image";

const trustItems = [
  {
    value: "1,000+",
    label: "Titles Published",
    icon: "/assets/generated/lp-trust/titles-published.png",
  },
  {
    value: "200+",
    label: "Countries Reached",
    icon: "/assets/generated/lp-trust/global-reach.png",
  },
  {
    value: "100%",
    label: "Rights Kept",
    icon: "/assets/generated/lp-trust/rights-kept.png",
  },
  {
    value: "Dedicated",
    label: "Project Manager",
    icon: "/assets/generated/lp-trust/project-manager.png",
  },
] as const;

export function LpTrustBar() {
  return (
    <section
      aria-label="Publishing service assurances"
      className="relative z-30 bg-white px-5 py-7 text-ink sm:px-10 lg:px-[6.944vw] lg:py-[clamp(1.75rem,1.944vw,2.3333rem)]"
    >
      <div className="mx-auto grid w-full max-w-[99.062rem] grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <div
            key={item.label}
            className={`flex min-w-0 items-center justify-center gap-3 px-3 py-5 sm:gap-4 sm:px-5 lg:gap-[clamp(.875rem,.972vw,1.1667rem)] lg:px-[clamp(1rem,1.389vw,1.6667rem)] lg:py-[clamp(.625rem,.694vw,.8333rem)] ${
              index === 1
                ? "border-l border-[#219ebc]/25"
                : index === 2
                  ? "border-t border-[#219ebc]/25 lg:border-t-0 lg:border-l"
                  : index === 3
                    ? "border-t border-l border-[#219ebc]/25 lg:border-t-0"
                    : ""
            }`}
          >
            <Image
              src={item.icon}
              alt=""
              width={64}
              height={64}
              unoptimized
              className="size-12 shrink-0 rounded-[0.9rem] object-cover shadow-[0_0.5rem_1.15rem_rgba(2,48,71,0.16)] sm:size-14 lg:size-[clamp(3.5rem,3.889vw,4.6667rem)] lg:rounded-[clamp(.875rem,.972vw,1.1667rem)]"
            />
            <span className="min-w-0">
              <strong className="block font-display text-[1.55rem] leading-none font-normal text-[#167d99] sm:text-[1.8rem] lg:text-[clamp(1.75rem,1.944vw,2.3333rem)]">
                {item.value}
              </strong>
              <span className="mt-1 block text-xs leading-tight font-medium sm:text-sm lg:text-[clamp(.8125rem,.903vw,1.0833rem)]">
                {item.label}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
