// ponytail: site-wide config. Edit this file or override via env + content.ts

import { content } from "@/lib/content"

// Individual env vars override specific fields (easiest for future clients)
// Full JSON override via CONTENT_CONFIG env var
const baseConfig = {
  brand: process.env.NEXT_PUBLIC_BRAND ?? 'Microsmiles Dental Care',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://microsmiles-demo.vercel.app',
  tagline: 'You Smile, We Smile  -  Painless Dentistry',
  description:
    'Microsmiles Dental Care offers painless dentistry adopted from UK, now in India. Root canal, implants, crowns, braces, invisalign, kids dentistry, and more across Tamil Nadu.',
  region: 'India',
  city: 'Tamil Nadu',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '+91 90437 53438',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'microsmilesdental@gmail.com',
  address: process.env.NEXT_PUBLIC_ADDRESS ?? 'Ground Floor, AH 11, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600 040.',
  hours: process.env.NEXT_PUBLIC_HOURS ?? 'Mon  -  Sat: 12pm – 8pm (Sunday Off)',
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
}

export const site = content('CONFIG', baseConfig)

