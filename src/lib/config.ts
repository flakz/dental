// ponytail: site-wide config. Edit this file or override via env.

export const site = {
  brand: 'PawSide',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pawbase.in',
  tagline: 'Pet care, the way it should be.',
  description:
    'PawSide is India\u2019s trusted doorstep pet care platform. Grooming, boarding, training, walking, fresh food, taxi and farewell, one number, one app, one team that loves your pet.',
  region: 'India',
  city: 'Krishnagiri', // ponytail: edit this. Used in copy + structured data.
  phone: '\u202a+91 96002 48119\u202c',
  email: 'hello@pawbase.in',
  address: 'Senthil Public School (CBSE) Back side, SivaSakthi Nagar, Krishnagiri.',
  hours: 'Open every day, 8:00 AM \u2013 8:00 PM IST',
  social: {
    instagram: 'https://www.instagram.com/jk_dog_hostel?igsh=MXZkZjFkZ29xbzUwMg%3D%3D&utm_source=qr',
    facebook: 'https://facebook.com/pawbase.in',
    youtube: 'https://youtube.com/@pawbase',
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE?.replace(/\s+/g, "").replace("+", "") || '919600248119'}`,
  },
  // ntfy.sh integration
  ntfy: {
    enabled: (process.env.NEXT_PUBLIC_NTFY_ENABLED ?? 'true') !== 'false',
    server: process.env.NEXT_PUBLIC_NTFY_SERVER ?? 'https://ntfy.sh',
    topic: process.env.NEXT_PUBLIC_NTFY_TOPIC ?? 'pawbase-form-x7k9p2',
    // ponytail: separate topic for review/feedback submissions.
    feedbackTopic: process.env.NEXT_PUBLIC_NTFY_FEEDBACK_TOPIC ?? 'pawbase-feedback-x7k9p2',
  },
};

export function ntfyEndpoint(form: 'contact' | 'book'): string {
  return `${site.ntfy.server}/${site.ntfy.topic}-${form}`;
}

// ponytail: Google Maps Place ID for JK Dog Hostel, Krishnagiri.
export const GOOGLE_PLACE_ID = process.env.PAW_GOOGLE_PLACE_ID ?? 'ChIJX_jYCgA1rDsRcZJs0bnROac';

export function googleMapsReviewUrl(): string {
  return `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
}
