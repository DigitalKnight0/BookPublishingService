import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SingleServicePage } from "@/components/services/single-service-page";
import {
  getServicePage,
  servicePageSlugs,
} from "@/content/service-pages";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePageSlugs
    .filter((slug) => slug !== "ghostwriting")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) return {};

  return {
    title: service.metadataTitle,
    description: service.metadataDescription,
  };
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  return <SingleServicePage service={service} />;
}
