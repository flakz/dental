	"use client"

import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services";

const items = services.map(sv => ({ label: sv.name, value: sv.slug }));

export function ServiceBreadcrumb({ currentSlug }: { currentSlug: string; currentName: string }) {
  const router = useRouter()
  return (
    <>
      <style>{`
        [data-slot="select-popup"] > div {
          border: 1px solid color-mix(in srgb, var(--paw-primary) 15%, transparent) !important;
          box-shadow: 0 2px 8px color-mix(in srgb, var(--paw-primary) 8%, transparent) !important;
          border-radius: var(--radius-lg) !important;
        }
        [data-slot="select-popup"] > div::before {
          display: none !important;
        }
        [data-slot="select-list"] {
          padding: 6px !important;
        }
        [data-slot="select-item"] {
          border-radius: var(--radius-md) !important;
          margin: 2px 0 !important;
        }
        [data-slot="select-item"][data-highlighted] {
          background: var(--paw-primary) !important;
          color: var(--paw-primary-ink) !important;
        }
      `}</style>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Services</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Select
              aria-label="Select service"
              defaultValue={currentSlug}
              onValueChange={(value: string | null) => { if (value) router.push(`/services/${value}`) }}
              items={items}
            >
              <SelectTrigger size="sm" className="border-0 bg-transparent focus-visible:ring-0 shadow-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectPopup side="bottom" align="start" sideOffset={8} alignOffset={16}>
                {items.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectPopup>
            </Select>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
