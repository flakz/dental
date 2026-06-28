"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/config";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceLinks, aboutLinks, contactLinks } from "@/components/nav-links";
import { LinkItem } from "@/components/sheard";

const dropdowns = [
  { label: "Services", links: serviceLinks },
  { label: "About", links: aboutLinks },
  { label: "Contact", links: contactLinks },
] as const;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeNav, setActiveNav] = useState(() => {
    if (pathname.startsWith("/services")) return "Services";
    if (pathname.startsWith("/about") || pathname.startsWith("/feedback")) return "About";
    if (pathname.startsWith("/contact") || pathname.startsWith("/book")) return "Contact";
    return "Services";
  });
  const [navTransition, setNavTransition] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ponytail: sync activeNav on route change — disable spring so it snaps instantly
  useEffect(() => {
    setNavTransition(false);
    requestAnimationFrame(() => setNavTransition(true));
    if (pathname.startsWith("/services")) setActiveNav("Services");
    else if (pathname.startsWith("/about") || pathname.startsWith("/feedback")) setActiveNav("About");
    else if (pathname.startsWith("/contact") || pathname.startsWith("/book")) setActiveNav("Contact");
    else setActiveNav("Services");
  }, [pathname])

  return (
    <motion.header
      initial={false}
      className="fixed left-1/2 top-3 z-50 mx-auto flex h-16 w-[calc(100%-2rem)] max-w-[76rem] -translate-x-1/2 items-center justify-between rounded-[20px] bg-surface-muted/95 px-2 shadow-sm backdrop-blur-md sm:px-3 md:top-4 md:w-[calc(100%-3rem)] md:px-4"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-foreground">
        <Logo className="h-7 w-7 text-primary" />
        <span className="font-display text-base font-semibold tracking-tight">{site.brand}</span>
      </Link>

      {/* Desktop nav */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {dropdowns.map(({ label, links }) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuTrigger
                onMouseEnter={() => setActiveNav(label)}
                className="relative rounded-full bg-transparent px-5 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                {activeNav === label && (
                  <motion.div
                    layoutId="activeNav"
                    initial={false}
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                    transition={navTransition ? { type: "spring", stiffness: 400, damping: 30 } : { duration: 0 }}
                  />
                )}
                {label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-1 pr-1.5">
                <div className={`rounded-lg grid max-h-[70vh] gap-x-3 gap-y-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [\&::-webkit-scrollbar]:hidden border border-primary/30 bg-[var(--dropdown-inner)] p-2 shadow-md ${label === "Services" ? "w-[56rem] grid-cols-4" : "w-lg grid-cols-2"}`}>
                  {links.map((item) => (
                    <NavigationMenuLink asChild key={item.label}>
                      <LinkItem {...item} className="!flex-row !items-start !gap-3 min-h-[4.5rem]" />
                    </NavigationMenuLink>
                  ))}
                </div>
                <div className="flex items-center justify-between p-2">
                  {label === "Services" ? (
                    <>
                      <p className="text-muted-foreground text-sm">
                        Not sure what you need?{" "}
                        <Link href="/book" className="font-medium text-foreground hover:underline">
                          Book an appointment
                        </Link>
                      </p>
                      <Link href="/services" className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground hover:bg-surface-muted">
                        All services
                      </Link>
                    </>
                  ) : label === "About" ? (
                    <>
                      <p className="text-muted-foreground text-sm">
                        Want to know more?{" "}
                        <Link href="/about" className="font-medium text-foreground hover:underline">
                          Read our story
                        </Link>
                      </p>
                      <Link href="/feedback" className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground hover:bg-surface-muted">
                        Leave feedback
                      </Link>
                    </>
                  ) : (
                    <>
                      <p className="text-muted-foreground text-sm">
                        Have a question?{" "}
                        <Link href="/contact" className="font-medium text-foreground hover:underline">
                          Reach out to us
                        </Link>
                      </p>
                      <Link href="/book" className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground hover:bg-surface-muted">
                        Book a service
                      </Link>
                    </>
                  )}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Button asChild size="sm" className="hidden h-9 !rounded-[12px] bg-primary px-4 text-xs font-medium text-primary-foreground transition-all hover:bg-primary-deep hover:shadow-md sm:inline-flex sm:h-10 sm:px-6 sm:text-sm">
          <Link href="/book">Book an appointment</Link>
        </Button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex size-8 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-200 sm:size-10 md:hidden"
        >
          {mobileOpen ? <X className="size-5 sm:size-6" /> : <Menu className="size-5 sm:size-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute left-0 top-full mt-2 h-[80vh] w-full overflow-hidden rounded-[20px] bg-surface-muted/95 shadow-lg backdrop-blur-md md:hidden"
        >
          <div className="h-full w-full overflow-y-auto scrollbar-hide overscroll-contain">
          <nav className="flex flex-col p-2">
            {dropdowns.map(({ label, links }) => (
              <div key={label}>
                <span className="block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">{label}</span>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-white/40 hover:text-neutral-900"
                  >
                    <span className="flex size-8 items-center justify-center rounded-md border border-border/30 bg-white/50 shadow-sm">
                      {link.icon}
                    </span>
                    <div>
                      <span className="block">{link.label}</span>
                      <span className="block text-xs text-neutral-500">{link.description}</span>
                    </div>
                  </Link>
                ))}
                <div className="my-2 border-t border-border/50" />
              </div>
            ))}
            <div className="mt-1 flex flex-col gap-2 px-2 pb-2">
              <Button asChild variant="outline" className="w-full">
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>Call us</a>
              </Button>
              <Button asChild className="w-full bg-primary text-primary-foreground">
                <Link href="/book" onClick={() => setMobileOpen(false)}>Book a service</Link>
              </Button>
            </div>
          </nav>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
