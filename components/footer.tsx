"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

const footerLinks = {
  productos: [
    { label: "Velas", href: "#velas" },
    { label: "Difusores", href: "#difusores" },
    { label: "Accesorios", href: "#accesorios" },
    { label: "Combos", href: "#combos" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#blog" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "#terminos" },
    { label: "Política de Privacidad", href: "#privacidad" },
    { label: "Envíos y Devoluciones", href: "#envios" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nMPwsk8Tpy3yMxr3TbLTCUvW4welaP.png"
              alt="Opalina Aromas"
              width={100}
              height={100}
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm mb-8">
              Creamos experiencias olfativas únicas que transforman cada espacio 
              en un santuario de paz y elegancia.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/opalina.aromas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:hola@opalina.com"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Opalina Aromas. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/30 tracking-wider">
            HECHO CON AMOR EN ARGENTINA
          </p>
        </div>
      </div>
    </footer>
  )
}
