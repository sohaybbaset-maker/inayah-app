"use client";

import { useSearchParams } from "next/navigation";
import ServiceRequestForm from "@/components/forms/ServiceRequestForm";

export default function RequestPageClient() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";

  return <ServiceRequestForm preselectedService={service} />;
}
