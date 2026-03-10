"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
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
              Contáctanos y descubre el mundo Opalina.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Teléfono", value: "+54 11 1234-5678" },
                { icon: Mail, label: "Email", value: "hola@opalina.com" },
                { icon: Instagram, label: "Instagram", value: "@opalina.aromas" },
                { icon: MapPin, label: "Ubicación", value: "Buenos Aires, Argentina" },
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="+54 11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
