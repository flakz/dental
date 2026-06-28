"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { usePrefersReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface ParallaxYProps {
  children: React.ReactNode
  offset?: [number, number]
  className?: string
  as?: "div" | "section" | "article"
}

export function ParallaxY({
  children,
  offset = [40, -40],
  className,
  as = "div",
}: ParallaxYProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], offset)

  if (reduced) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag ref={ref} style={{ y }} className={cn("will-change-transform", className)}>
      {children}
    </MotionTag>
  )
}
