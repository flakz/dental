
import { site } from "@/lib/config"
import { services } from "@/lib/services"
import { Footer3, type Footer3LinkGroup, type Footer3SocialLink } from "@/components/watermelon-ui/footer-3"

export function Footer() {
  const year = new Date().getFullYear()
  const topServices = services.slice(0, 6)

  const socialLinks: Footer3SocialLink[] = [
    { icon: <img src="/insta.png" alt="" className="h-5.5 w-5.5 object-contain" />, href: site.social.instagram },
    { icon: <img src="/facebook.png" alt="" className="h-5.5 w-5.5 object-contain" />, href: site.social.facebook },

    { icon: <img src="/whatsapp.png" alt="" className="h-5.5 w-5.5 object-contain" />, href: site.social.whatsapp },
  ]

  const linkGroups: Footer3LinkGroup[] = [
    {
      title: "Services",
      links: [
        ...topServices.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
        { label: "All services", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Book a service", href: "/book" },
        { label: "Leave a review", href: "/feedback" },
        { label: "Careers", href: "mailto:careers@pawbase.in" },
      ],
    },
    {
      title: "Visit",
      links: [
        { label: site.address, href: "https://maps.google.com/?q=" + encodeURIComponent(site.address) },
        { label: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
        { label: site.email, href: `mailto:${site.email}` },
        { label: site.hours, href: "#" },
      ],
    },
  ]

  return (
    <Footer3
      logo={
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <circle cx="6" cy="9" r="2.2" />
          <circle cx="10" cy="5.5" r="2.2" />
          <circle cx="14" cy="5.5" r="2.2" />
          <circle cx="18" cy="9" r="2.2" />
          <path d="M12 10c-3.5 0-6 3-6 6 0 2 1.6 3.5 3.5 3.5 1 0 1.7-.4 2.5-.4s1.5.4 2.5.4C16.4 19.5 18 18 18 16c0-3-2.5-6-6-6z" />
        </svg>
      }
      brandName={site.brand}
      description={`Doorstep pet care across ${site.city} and Tamil Nadu. ${site.hours}`}
      socialLinks={socialLinks}
      linkGroups={linkGroups}
      copyright={`© ${year} ${site.brand}. All rights reserved. Made with care in ${site.city}.`}
      legalLinks={[
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]}
    />
  )
}
