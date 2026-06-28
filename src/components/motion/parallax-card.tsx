"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { usePrefersReducedMotion, easeOut } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface ParallaxCardProps {
  children: React.ReactNode
  /** Y parallax offset range for the image (pixels) */
  imageOffset?: [number, number]
  /** Extra class on the outer wrapper */
  className?: string
  /** Class on the image wrapper to receive the parallax transform */
  imageClassName?: string
}

/**
 * A card that:
 * 1. Animates in (fade + blur + y) only when it enters the viewport
 * 2. Gives its image a scroll-linked parallax (moves slightly as you scroll)
 */
export function ParallaxCard({
  children,
  imageOffset = [30, -30],
  className,
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], imageOffset)

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: easeOut }}
      className={cn(className)}
    >
      {/* Inject the parallax y value via context or clone — here we use a wrapper */}
      <ParallaxImageProvider imageY={imageY}>
        {children}
      </ParallaxImageProvider>
    </motion.div>
  )
}

// ── Internal: provides the motion value to children ────────────────────────
import { createContext, useContext } from "react"
import type { MotionValue } from "motion/react"

const ParallaxImageContext = createContext<MotionValue<number> | null>(null)

export function useParallaxImageY() {
  return useContext(ParallaxImageContext)
}

function ParallaxImageProvider({
  imageY,
  children,
}: {
  imageY: MotionValue<number>
  children: React.ReactNode
}) {
  return (
    <ParallaxImageContext.Provider value={imageY}>
      {children}
    </ParallaxImageContext.Provider>
  )
}

/**
 * Wrap an `<Image>` or `<img>` in this to apply the scroll-linked parallax Y.
 * Must be inside a <ParallaxCard>.
 */
export function ParallaxImage({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const imageY = useParallaxImageY()
  if (!imageY) return <div className={className}>{children}</div>

  return (
    <motion.div style={{ y: imageY }} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  )
}
