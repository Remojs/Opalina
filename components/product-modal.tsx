"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProductModalProps {
  product: { name: string; category: string; images: string[] } | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setCurrentIndex(0)
  }, [product])

  const prev = useCallback(() => setCurrentIndex(i => Math.max(i - 1, 0)), [])
  const next = useCallback(() => {
    if (product) setCurrentIndex(i => Math.min(i + 1, product.images.length - 1))
  }, [product])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!product) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [product, onClose, prev, next])

  // Prevent body scroll when open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [product])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="relative bg-background w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-2xl font-light">{product.name}</h3>
              </div>
              <div className="flex items-center gap-4">
                {product.images.length > 1 && (
                  <span className="text-xs tracking-[0.2em] text-muted-foreground tabular-nums">
                    {currentIndex + 1} / {product.images.length}
                  </span>
                )}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div
              className="relative flex-1 min-h-0 bg-muted overflow-hidden"
              style={{ minHeight: "50vh" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[currentIndex]}
                    alt={`${product.name} — imagen ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    disabled={currentIndex === 0}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-background/80 border border-border hover:bg-background disabled:opacity-20 transition-all z-10"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    disabled={currentIndex === product.images.length - 1}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-background/80 border border-border hover:bg-background disabled:opacity-20 transition-all z-10"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div
                className="flex gap-2 p-3 overflow-x-auto border-t border-border flex-shrink-0"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
              >
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`flex-shrink-0 w-14 h-14 relative border-2 transition-colors overflow-hidden ${
                      i === currentIndex
                        ? "border-foreground"
                        : "border-transparent hover:border-muted-foreground/40"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
