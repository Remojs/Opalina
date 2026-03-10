"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: "ciudades",
    title: "Colección Ciudades",
    description: "Viaja a través de los aromas más emblemáticos del mundo",
    image: "/productos/Vela_Barcelona/46c.png",
  },
  {
    id: "gemas",
    title: "Colección Gemas",
    description: "Fragancias inspiradas en piedras preciosas",
    image: "/productos/Difusor_Agatha/57a.png",
  },
]

export function FeaturedCollection() {
  return (
    <section id="colecciones" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Descubre
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Nuestras Colecciones
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-muted mb-6 overflow-hidden relative">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors duration-300">
                {collection.title}
              </h3>
              <p className="text-muted-foreground">
                {collection.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
