"use client"

import { motion } from "motion/react"
import { usePrefersReducedMotion, easeOut } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface HoverLiftProps {
  children: React.ReactNode
  lift?: number
  scale?: number
  className?: string
  as?: "div" | "li" | "article" | "a"
}

export function HoverLift({
  children,
  lift = -4,
  scale = 1.02,
  className,
  as = "div",
}: HoverLiftProps) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      whileHover={{
        y: lift,
        scale,
        boxShadow: "0 20px 40px -12px rgba(26, 20, 16, 0.12)",
        transition: { duration: 0.2, ease: easeOut },
      }}
      whileTap={{ scale: 0.98 }}
      className={cn("transition-shadow", className)}
    >
      {children}
    </MotionTag>
  )
}
