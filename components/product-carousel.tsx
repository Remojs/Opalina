"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductModal } from "@/components/product-modal"

interface Product {
  id: string
  name: string
  category: string
  image: string
  images: string[]
}

interface ProductCarouselProps {
  title: string
  subtitle?: string
  products: Product[]
}

export function ProductCarousel({ title, subtitle, products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <>
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            {subtitle && (
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                {subtitle}
              </p>
            )}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
              {title}
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProduct(product)}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[380px] snap-start group cursor-pointer"
            >
              {/* Product Image */}
              <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden relative">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                    <p className="text-xs tracking-wider uppercase">{product.name}</p>
                  </div>
                )}
              {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                {product.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-background/80 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs tracking-[0.15em] tabular-nums">{product.images.length} fotos</span>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="space-y-1">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-3 border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-3 border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    <ProductModal
      product={selectedProduct}
      onClose={() => setSelectedProduct(null)}
    />
    </>
  )
}
