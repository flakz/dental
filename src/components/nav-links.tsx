import type { LinkItemType } from "@/components/sheard";
import { services } from "@/lib/services";

// Old icon images from public/ — randomized across services
const iconImages = [
  "/home1.png", "/scissor.png", "/training.png", "/walk.png",
  "/food.png", "/car.png", "/star.png", "/contact.png",
  "/tooth.png", "/grooming.png", "/location.png", "/hours.png",
];

// All services pulled dynamically from services.ts
export const serviceLinks: LinkItemType[] = services.map((s, i) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.short,
  icon: <div className="h-7 w-7" style={{ backgroundColor: "var(--paw-primary)", maskImage: `url(${iconImages[i % iconImages.length]})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: `url(${iconImages[i % iconImages.length]})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />,
}));

export const aboutLinks: LinkItemType[] = [
  {
    label: "About Us",
    href: "/about",
    description: "Our story and specialist team",
    icon: <div className="h-7 w-7" style={{ backgroundColor: "var(--paw-primary)", maskImage: 'url("/home1.png")', maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: 'url("/home1.png")', WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />,
  },
  {
    label: "Take a Tour",
    href: "/take-a-tour",
    description: "Virtual clinic walkthrough",
    icon: <div className="h-7 w-7" style={{ backgroundColor: "var(--paw-primary)", maskImage: 'url("/star.png")', maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: 'url("/star.png")', WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />,
  },
  {
    label: "Feedback",
    href: "/feedback",
    description: "Share your experience",
    icon: <div className="h-7 w-7" style={{ backgroundColor: "var(--paw-primary)", maskImage: 'url("/contact.png")', maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: 'url("/contact.png")', WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />,
  },
];

export const contactLinks: LinkItemType[] = [
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with us",
    icon: <div className="h-7 w-7" style={{ backgroundColor: "var(--paw-primary)", maskImage: 'url("/location.png")', maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: 'url("/location.png")', WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />,
  },
  {
    label: "Book an Appointment",
    href: "/book",
    description: "Schedule your dental visit",
    icon: <div className="h-7 w-7" style={{ backgroundColor: "var(--paw-primary)", maskImage: 'url("/hours.png")', maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: 'url("/hours.png")', WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />,
  },
];

export const pageLinks: LinkItemType[] = [
  ...aboutLinks,
  ...contactLinks,
];
