"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextEffect } from "@/components/core/text-effect"
import { site } from "@/lib/config"

export function Preloader() {
  const [show, setShow] = useState(true)
  const brand = site.brand

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const animationTime = 1700
    const totalDelay = animationTime

    const timer = setTimeout(() => {
      document.body.style.overflow = ""
      setShow(false)
    }, totalDelay)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [])

  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03 },
      },
      exit: {
        transition: { staggerChildren: 0.03, staggerDirection: 1 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(10px) brightness(0%)",
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px) brightness(100%)",
        transition: {
          duration: 0.5,
        },
      },
      exit: {
        opacity: 0,
        y: -30,
        filter: "blur(10px) brightness(0%)",
        transition: {
          duration: 0.5,
        },
      },
    },
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--paw-primary)" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <TextEffect
            className="inline-flex text-[clamp(2rem,5vw,4rem)] font-display font-medium tracking-[-0.02em] text-white"
            per="char"
            variants={blurSlideVariants}
            trigger={true}
          >
            {brand}
          </TextEffect>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
