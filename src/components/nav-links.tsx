import type { LinkItemType } from "@/components/sheard";
import { services } from "@/lib/services";

// Old icon images from public/ — randomized across services
const iconImages = [
  "/home1.png", "/scissor.png", "/training.png", "/walk.png",
  "/food.png", "/car.png", "/star.png", "/contact.png",
  "/home.png", "/grooming.png", "/location.png", "/hours.png",
];

// All services pulled dynamically from services.ts
export const serviceLinks: LinkItemType[] = services.map((s, i) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.short,
  icon: <img src={iconImages[i % iconImages.length]} alt="" className="h-7 w-7 object-contain" />,
}));

export const aboutLinks: LinkItemType[] = [
  {
    label: "About Us",
    href: "/about",
    description: "Our story and specialist team",
    icon: <img src="/home1.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Take a Tour",
    href: "/take-a-tour",
    description: "Virtual clinic walkthrough",
    icon: <img src="/star.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Feedback",
    href: "/feedback",
    description: "Share your experience",
    icon: <img src="/contact.png" alt="" className="h-7 w-7 object-contain" />,
  },
];

export const contactLinks: LinkItemType[] = [
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with us",
    icon: <img src="/location.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Book an Appointment",
    href: "/book",
    description: "Schedule your dental visit",
    icon: <img src="/hours.png" alt="" className="h-7 w-7 object-contain" />,
  },
];

export const pageLinks: LinkItemType[] = [
  ...aboutLinks,
  ...contactLinks,
];
