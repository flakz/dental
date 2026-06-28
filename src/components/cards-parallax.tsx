"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

function ParallaxCard({ children, index, total, progress }: { children: React.ReactNode; index: number; total: number; progress: any }) {
  const targetScale = 1 - (total - index) * 0.03
  const scale = useTransform(progress, [index * 0.12, 1], [1, targetScale])

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
    <div ref={container} className="relative" style={{ height: `${60 + totalItems * 45}vh` }}>
      {children.map((child, i) => (
        <ParallaxCard key={i} index={i} total={totalItems} progress={scrollYProgress}>
          {child}
        </ParallaxCard>
      ))}
    </div>
  )
}
