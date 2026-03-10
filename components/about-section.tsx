"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
              Nuestra Esencia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-[1.2]">
              Artesanía que
              <br />
              <span className="italic">despierta los sentidos</span>
            </h2>
            <div className="space-y-6 text-primary-foreground/80 leading-relaxed">
              <p>
                En Opalina, cada vela es el resultado de una cuidadosa selección de las mejores 
                ceras naturales y fragancias exclusivas. Nuestro proceso artesanal garantiza 
                una experiencia olfativa única e inolvidable.
              </p>
              <p>
                Inspirados en las ciudades más elegantes del mundo, creamos piezas que transforman 
                cualquier espacio en un santuario de paz y sofisticación. Desde París hasta Tokio, 
                cada aroma cuenta una historia.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: "100%", label: "Ingredientes Naturales" },
                { number: "50+", label: "Fragancias Únicas" },
                { number: "24h", label: "Duración Premium" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl md:text-4xl mb-2">{stat.number}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-primary-foreground/10 overflow-hidden relative">
                <Image src="/productos/Vela_Roma/9a.png" alt="Vela Roma" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="aspect-square bg-primary-foreground/10 overflow-hidden relative">
                <Image src="/productos/Difusor_Jade/58a.png" alt="Difusor Jade" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-primary-foreground/10 overflow-hidden relative">
                <Image src="/productos/Vela_Verona/17a.png" alt="Vela Verona" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="aspect-[3/4] bg-primary-foreground/10 overflow-hidden relative">
                <Image src="/productos/Combo_Agatha/57d.png" alt="Combo Agatha" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
