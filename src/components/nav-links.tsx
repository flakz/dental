import type { LinkItemType } from "@/components/sheard";
import { HeartIcon, PhoneIcon, StarIcon, CalendarIcon } from "lucide-react";

export const serviceLinks: LinkItemType[] = [
  {
    label: "Boarding",
    href: "/services/boarding",
    description: "Overnight stays in a home-like space",
    icon: <img src="/home1.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Grooming",
    href: "/services/grooming",
    description: "Bath, trim, nail clip and spa",
    icon: <img src="/scissor.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Training",
    href: "/services/training",
    description: "Obedience, behaviour and socialisation",
    icon: <img src="/training.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Walking",
    href: "/services/walking",
    description: "Daily walks with GPS tracking",
    icon: <img src="/walk.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Fresh Food",
    href: "/services/fresh-food",
    description: "Vet-approved meals delivered daily",
    icon: <img src="/food.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Pet Taxi",
    href: "/services/taxi",
    description: "Vet visits and airport transfers",
    icon: <img src="/car.png" alt="" className="h-7 w-7 object-contain" />,
  },
];

export const aboutLinks: LinkItemType[] = [
  {
    label: "About Us",
    href: "/about",
    description: "Our story and the team behind PawSide",
    icon: <img src="/home1.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Feedback",
    href: "/feedback",
    description: "Share your experience with us",
    icon: <img src="/star.png" alt="" className="h-7 w-7 object-contain" />,
  },
];

export const contactLinks: LinkItemType[] = [
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with us",
    icon: <img src="/home1.png" alt="" className="h-7 w-7 object-contain" />,
  },
  {
    label: "Book a Service",
    href: "/book",
    description: "Schedule a visit for your pet",
    icon: <img src="/star.png" alt="" className="h-7 w-7 object-contain" />,
  },
];

export const pageLinks: LinkItemType[] = [
  ...aboutLinks,
  ...contactLinks,
];
