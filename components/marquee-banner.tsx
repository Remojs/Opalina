"use client"

import { motion } from "framer-motion"

const words = [
  "LUJO",
  "ARTESANAL",
  "EXCLUSIVO",
  "AROMÁTICO",
  "ELEGANCIA",
  "SOFISTICACIÓN",
  "PREMIUM",
  "ÚNICO",
]

export function MarqueeBanner() {
  return (
    <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span
            key={index}
            className="text-sm tracking-[0.4em] uppercase flex items-center gap-8"
          >
            {word}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
