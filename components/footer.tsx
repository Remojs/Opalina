"use client"

import Image from "next/image"
import Link from "next/link"

const productosLinks = [
  { label: "Velas", href: "#velas" },
  { label: "Difusores", href: "#difusores" },
  { label: "Accesorios", href: "#accesorios" },
  { label: "Combos", href: "#combos" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nMPwsk8Tpy3yMxr3TbLTCUvW4welaP.png"
              alt="Opalina Aromas"
              width={100}
              height={100}
              className="h-20 w-auto brightness-0 invert"
            />
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6">Productos</h4>
            <ul className="space-y-3">
              {productosLinks.map((link) => (
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
        <div className="border-t border-primary-foreground/10 mt-16 pt-8">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Opalina Aromas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
