"use client"

import { motion, type Variants } from "motion/react"
import {
  usePrefersReducedMotion,
  fadeInUp, fadeIn, scaleIn, slideInLeft, slideInRight,
  blurReveal, popIn, rotateIn, clipReveal, slideBlurUp,
  scaleRotateIn, riseUp, tiltIn,
  SLOW, easeOut, springBounce, blurRevealTransition, popInTransition, clipRevealTransition, tiltTransition,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type VariantName =
  | "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight"
  | "blurReveal" | "popIn" | "rotateIn" | "clipReveal" | "slideBlurUp"
  | "scaleRotateIn" | "riseUp" | "tiltIn"

const variantMap: Record<VariantName, Variants> = {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  blurReveal,
  popIn,
  rotateIn,
  clipReveal,
  slideBlurUp,
  scaleRotateIn,
  riseUp,
  tiltIn,
}

/** Per-variant transition overrides so each effect feels unique */
const variantTransition: Record<VariantName, Record<string, unknown>> = {
  fadeInUp:       { duration: SLOW, ease: easeOut },
  fadeIn:         { duration: SLOW, ease: easeOut },
  scaleIn:        { duration: SLOW, ease: easeOut },
  slideInLeft:    { duration: SLOW, ease: easeOut },
  slideInRight:   { duration: SLOW, ease: easeOut },
  blurReveal:     blurRevealTransition,
  popIn:          popInTransition,
  rotateIn:       { duration: 0.5, ease: easeOut },
  clipReveal:     clipRevealTransition,
  slideBlurUp:    { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  scaleRotateIn:  { type: "spring" as const, stiffness: 350, damping: 20 },
  riseUp:         { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  tiltIn:         tiltTransition,
}

interface RevealProps {
  children: React.ReactNode
  variant?: VariantName
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  margin?: string
  as?: "div" | "section" | "article" | "li" | "span"
}

export function Reveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration,
  className,
  once = true,
  margin = "-60px",
  as = "div",
}: RevealProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as] as typeof motion.div

  const transition = duration
    ? { duration, ease: easeOut }
    : { ...variantTransition[variant], delay }

  return (
    <MotionTag
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      transition={{ ...transition, delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
