"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

function ParallaxCard({ children, index, total, progress }: { children: React.ReactNode; index: number; total: number; progress: any }) {
  // Scale evenly from 1.0 → 0.85 across the stack regardless of card count
  const fraction = index / Math.max(total - 1, 1)
  const targetScale = 1 - fraction * 0.15

  // Each card's animation window: start when it becomes the "active" card, end at scroll complete
  const start = total <= 10 ? index * 0.12 : index / total
  const scale = useTransform(progress, [start, 1], [1, targetScale])

  return (
    <div className={`sticky top-4 h-[65vh] flex items-center justify-center ${index > 0 ? "-mt-[14vh]" : "mt-4"}`}>
      <motion.div style={{ scale }} className="w-full origin-top">
        {children}
      </motion.div>
    </div>
  )
}

interface Props {
  children: React.ReactNode[]
}

export function CardsParallax({ children }: Props) {
  const container = useRef(null)
  const totalItems = children.length

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", `end ${100 - totalItems * 12}%`],
  })

  return (
    <div ref={container} className="relative" style={{ height: `${65 + (totalItems - 1) * 51}vh` }}>
      {children.map((child, i) => (
        <ParallaxCard key={i} index={i} total={totalItems} progress={scrollYProgress}>
          {child}
        </ParallaxCard>
      ))}
    </div>
  )
}
