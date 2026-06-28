// ponytail: site-wide config. Edit this file or override via env + content.ts

import { content } from "@/lib/content"

export const site = content('CONFIG', {
  brand: 'Microsmiles Dental Care',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://microsmiles-demo.vercel.app',
  tagline: 'You Smile, We Smile — Painless Dentistry',
  description:
    'Microsmiles Dental Care offers painless dentistry adopted from UK, now in India. Root canal, implants, crowns, braces, invisalign, kids dentistry, and more across Chennai and Bangalore.',
  region: 'India',
  city: 'Chennai',
  phone: '+91 90437 53438',
  email: 'microsmilesdental@gmail.com',
  address: 'Ground Floor, AH 11, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600 040.',
  hours: 'Mon — Sat: 12pm – 8pm (Sunday Off)',
  social: {
    instagram: 'https://www.instagram.com/microsmilesdental',
    facebook: 'https://facebook.com/microsmilesdental',
    youtube: 'https://youtube.com/@microsmilesdental',
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE?.replace(/\s+/g, "").replace("+", "") || '919043753438'}`,
  },
  ntfy: {
    enabled: (process.env.NEXT_PUBLIC_NTFY_ENABLED ?? 'true') !== 'false',
    server: process.env.NEXT_PUBLIC_NTFY_SERVER ?? 'https://ntfy.sh',
    topic: process.env.NEXT_PUBLIC_NTFY_TOPIC ?? 'dental-demo-form-x7k9p2',
    feedbackTopic: process.env.NEXT_PUBLIC_NTFY_FEEDBACK_TOPIC ?? 'dental-demo-feedback-x7k9p2',
  },
})

export function ntfyEndpoint(form: 'contact' | 'book'): string {
  return `${site.ntfy.server}/${site.ntfy.topic}-${form}`;
}

export const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID ?? '';

export function googleMapsReviewUrl(): string {
  return `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
}
