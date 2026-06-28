"use client"

import { motion, type Variants } from "motion/react"
import { usePrefersReducedMotion, easeOut, SLOW } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface StaggerProps {
  children: React.ReactNode
  stagger?: number
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  margin?: string
}

export function Stagger({
  children,
  stagger = 0.08,
  delay = 0,
  duration = SLOW,
  className,
  once = true,
  margin = "-60px",
}: StaggerProps) {
  const reduced = usePrefersReducedMotion()

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

/**
 * Wrap individual items inside a <Stagger> parent.
 * Inherits the parent's stagger timing automatically via Framer Motion variant propagation.
 */
export function StaggerItem({
  children,
  className,
  duration = SLOW,
}: {
  children: React.ReactNode
  className?: string
  duration?: number
}) {
  const reduced = usePrefersReducedMotion()

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration, ease: easeOut } },
  }

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
