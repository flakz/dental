"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { site } from "@/lib/config"

export function Preloader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    const timer = setTimeout(() => {
      document.body.style.overflow = ""
      setShow(false)
    }, 1600)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--paw-primary)" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.p
            className="text-[clamp(2rem,5vw,4rem)] font-display font-medium tracking-[-0.02em] text-white"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {site.brand}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
