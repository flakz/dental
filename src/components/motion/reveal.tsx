"use client"

import { motion, type Variants } from "motion/react"
import { usePrefersReducedMotion, fadeInUp, easeOut, SLOW } from "@/lib/motion"
import { cn } from "@/lib/utils"

type VariantName = "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight"

const variantMap: Record<VariantName, Variants> = {
  fadeInUp,
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  slideInLeft: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  slideInRight: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
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
  duration = SLOW,
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

  return (
    <MotionTag
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      transition={{ duration, ease: easeOut, delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
