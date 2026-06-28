
import { site } from "@/lib/config"
import { services } from "@/lib/services"
import { Footer3, type Footer3LinkGroup, type Footer3SocialLink } from "@/components/watermelon-ui/footer-3"

export function Footer() {
  const year = new Date().getFullYear()
  const topServices = services.slice(0, 6)

  const socialLinks: Footer3SocialLink[] = [
    { icon: <div className="h-5.5 w-5.5" style={{ backgroundColor: "var(--paw-primary)", mask: "url(/insta.png) center/contain no-repeat", WebkitMask: "url(/insta.png) center/contain no-repeat" }} />, href: site.social.instagram },
    { icon: <div className="h-5.5 w-5.5" style={{ backgroundColor: "var(--paw-primary)", mask: "url(/facebook.png) center/contain no-repeat", WebkitMask: "url(/facebook.png) center/contain no-repeat" }} />, href: site.social.facebook },

    { icon: <div className="h-5.5 w-5.5" style={{ backgroundColor: "var(--paw-primary)", mask: "url(/whatsapp.png) center/contain no-repeat", WebkitMask: "url(/whatsapp.png) center/contain no-repeat" }} />, href: site.social.whatsapp },
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
        { label: "Careers", href: "mailto:microsmilesdental@gmail.com" },
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
        <div className="h-6 w-6" style={{ backgroundColor: "var(--paw-primary, #1B2A4E)", maskImage: "url(/tooth.png)", maskSize: "contain", maskPosition: "center", maskRepeat: "no-repeat", WebkitMaskImage: "url(/tooth.png)", WebkitMaskSize: "contain", WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat" }} />
      }
      brandName={site.brand}
      description={<>Painless dentistry across {site.city}.<br />{site.hours}</>}
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
