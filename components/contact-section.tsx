"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Contacto
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              Hablemos de
              <br />
              <span className="italic">tu experiencia</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Estamos aquí para ayudarte a encontrar la fragancia perfecta para cada momento. 
              Contactanos y descubre el mundo Opalina.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Teléfono", value: "+54 9 223 300-8317" },
                { icon: Mail, label: "Email", value: "opalinavelasyaromas@gmail.com" },
                { icon: Instagram, label: "Instagram", value: "@opalina.aromas" },
                { icon: MapPin, label: "Ubicación", value: "Mar del Plata" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-serif text-lg">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}
