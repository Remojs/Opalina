import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedCollection } from "@/components/featured-collection"
import { ProductCarousel } from "@/components/product-carousel"
import { MarqueeBanner } from "@/components/marquee-banner"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { productImages } from "@/lib/product-images"

function withImages<T extends { image: string }>(products: T[]) {
  return products.map(p => {
    const folderEncoded = p.image.split('/')[2]
    const folder = decodeURIComponent(folderEncoded)
    return { ...p, images: productImages[folder] ?? (p.image ? [p.image] : []) }
  })
}

// Datos de productos - Velas
const velas = [
  { id: "vela-arizona", name: "Vela Arizona", category: "Velas", image: "/productos/Vela_Arizona/11a.png" },
  { id: "vela-barcelona", name: "Vela Barcelona", category: "Velas", image: "/productos/Vela_Barcelona/46a.png" },
  { id: "vela-bruselas", name: "Vela Bruselas", category: "Velas", image: "/productos/Vela_Bruselas/6a.png" },
  { id: "vela-budapest", name: "Vela Budapest", category: "Velas", image: "/productos/Vela_Budapest/40a.png" },
  { id: "vela-calgary", name: "Vela Calgary", category: "Velas", image: "/productos/Vela_Calgary/IMG_20250520_154821536.jpg" },
  { id: "vela-lucerna", name: "Vela Lucerna", category: "Velas", image: "/productos/Vela_Lucerna/44a.png" },
  { id: "vela-molde-geometrica", name: "Vela Molde Geométrica", category: "Velas", image: "/productos/Vela_Molde_Geom%C3%A9trica/77a.png" },
  { id: "vela-molde-perla", name: "Vela Molde Perla", category: "Velas", image: "/productos/Vela_Molde_Perla/75a.png" },
  { id: "vela-molde-sirena", name: "Vela Molde Sirena", category: "Velas", image: "/productos/Vela_Molde_Sirena/76a.png" },
  { id: "vela-monaco", name: "Vela Mónaco", category: "Velas", image: "/productos/Vela_M%C3%B3naco/10a.png" },
  { id: "vela-oporto", name: "Vela Oporto", category: "Velas", image: "/productos/Vela_Oporto/20a.png" },
  { id: "vela-pekin", name: "Vela Pekín", category: "Velas", image: "/productos/Vela_Pek%C3%ADn/8a.png" },
  { id: "vela-positano", name: "Vela Positano", category: "Velas", image: "/productos/Vela_Positano/47a.png" },
  { id: "vela-quebec", name: "Vela Quebec", category: "Velas", image: "/productos/Vela_Quebec/IMG_20250520_155445992.jpg" },
  { id: "vela-rodas", name: "Vela Rodas", category: "Velas", image: "/productos/Vela_Rodas/22a.png" },
  { id: "vela-roma", name: "Vela Roma", category: "Velas", image: "/productos/Vela_Roma/9a.png" },
  { id: "vela-santorini", name: "Vela Santorini", category: "Velas", image: "/productos/Vela_Santorini/IMG_20250520_154527472.jpg" },
  { id: "vela-seul", name: "Vela Seúl", category: "Velas", image: "/productos/Vela_Se%C3%BAl/5a.png" },
  { id: "vela-shanghai", name: "Vela Shanghái", category: "Velas", image: "/productos/Vela_Shangh%C3%A1i/7a.png" },
  { id: "vela-tenesse", name: "Vela Tenesse", category: "Velas", image: "/productos/Vela_Tenesse/26a.png" },
  { id: "vela-tenesse-ambar", name: "Vela Tenesse Ambar", category: "Velas", image: "/productos/Vela_Tenesse_Ambar/31a.png" },
  { id: "vela-tokio", name: "Vela Tokio", category: "Velas", image: "/productos/Vela_Tokio/IMG_20250520_154250812.jpg" },
  { id: "vela-tulum", name: "Vela Tulum", category: "Velas", image: "/productos/Vela_Tulum/42a.png" },
  { id: "vela-valencia", name: "Vela Valencia", category: "Velas", image: "/productos/Vela_Valencia/45a.png" },
  { id: "vela-verona", name: "Vela Verona", category: "Velas", image: "/productos/Vela_Verona/17a.png" },
]

// Datos de productos - Difusores
const difusores = [
  { id: "difusor-agatha", name: "Difusor Agatha", category: "Difusores", image: "/productos/Difusor_Agatha/57a.png" },
  { id: "difusor-amatista", name: "Difusor Amatista", category: "Difusores", image: "/productos/Difusor_Amatista/66a.png" },
  { id: "difusor-ambar", name: "Difusor Ámbar", category: "Difusores", image: "/productos/Difusor_%C3%81mbar/65a.png" },
  { id: "difusor-cuarzo", name: "Difusor Cuarzo", category: "Difusores", image: "/productos/Difusor_Cuarzo/IMG_20250524_214515956.jpg" },
  { id: "difusor-esmeralda", name: "Difusor Esmeralda", category: "Difusores", image: "/productos/Difusor_Esmeralda/54d.png" },
  { id: "difusor-jade", name: "Difusor Jade", category: "Difusores", image: "/productos/Difusor_Jade/58a.png" },
  { id: "difusor-marfil", name: "Difusor Marfil", category: "Difusores", image: "/productos/Difusor_Marfil/63a.png" },
  { id: "difusor-onix", name: "Difusor Onix", category: "Difusores", image: "/productos/Difusor_Onix/60a.png" },
  { id: "difusor-opalo", name: "Difusor Ópalo", category: "Difusores", image: "/productos/Difusor_%C3%93palo/68a.png" },
  { id: "difusor-rubi", name: "Difusor Rubí", category: "Difusores", image: "/productos/Difusor_Rubi/55d.png" },
  { id: "difusor-topacio", name: "Difusor Topacio", category: "Difusores", image: "/productos/Difusor_Topacio/56d.png" },
  { id: "difusor-turmalina", name: "Difusor Turmalina", category: "Difusores", image: "/productos/Difusor_Turmalina/67a.png" },
]

// Datos de productos - Carameleras
const carameleras = [
  { id: "caramelera-atenas", name: "Caramelera Atenas", category: "Carameleras", image: "/productos/Caramelera_Atenas/3a.png" },
  { id: "caramelera-berlin", name: "Caramelera Berlín", category: "Carameleras", image: "/productos/Caramelera_Berlin/IMG_20250520_161710883.jpg" },
  { id: "caramelera-melbourne", name: "Caramelera Melbourne", category: "Carameleras", image: "/productos/Caramelera_Melbourne/IMG_20250520_160718933.jpg" },
  { id: "caramelera-milan", name: "Caramelera Milán", category: "Carameleras", image: "/productos/Caramelera_Milan/1.png" },
  { id: "caramelera-paris", name: "Caramelera París", category: "Carameleras", image: "/productos/Caramelera_Paris/13a.png" },
  { id: "caramelera-sidney", name: "Caramelera Sidney", category: "Carameleras", image: "/productos/Caramelera_Sidney/4a.png" },
  { id: "caramelera-viena", name: "Caramelera Viena", category: "Carameleras", image: "/productos/Caramelera_Viena/2a.png" },
]

// Datos de productos - Combos
const combos = [
  { id: "combo-agatha", name: "Combo Agatha", category: "Combos", image: "/productos/Combo_Agatha/57d.png" },
  { id: "combo-bruselas", name: "Combo Bruselas", category: "Combos", image: "/productos/Combo_Bruselas/55a.png" },
  { id: "combo-jade", name: "Combo Jade", category: "Combos", image: "/productos/Combo_Jade/59a.png" },
  { id: "combo-jade-ambar", name: "Combo Jade Ámbar", category: "Combos", image: "/productos/Combo_Jade_ambar/79a.png" },
  { id: "combo-marfil", name: "Combo Marfil", category: "Combos", image: "/productos/Combo_Marfil/62a.png" },
  { id: "combo-onix", name: "Combo Onix", category: "Combos", image: "/productos/Combo_Onix/61a.png" },
  { id: "combo-pekin", name: "Combo Pekín", category: "Combos", image: "/productos/Combo_Pekin/56a.png" },
  { id: "combo-shanghai", name: "Combo Shanghái", category: "Combos", image: "/productos/Combo_Shangh%C3%A1i/54a.png" },
  { id: "combo-turmalina", name: "Combo Turmalina", category: "Combos", image: "/productos/Combo_Turmalina/64a.png" },
]

// Datos de productos - Cuencos y Macetas
const decoracion = [
  { id: "cuenco-oslo", name: "Cuenco Oslo", category: "Decoración", image: "/productos/Cuenco_Oslo/16a.png" },
  { id: "cuenco-lisboa", name: "Cuenco Lisboa", category: "Decoración", image: "/productos/Cuenco_Lisboa/15a.png" },
  { id: "maceta-aleli", name: "Maceta Alelí", category: "Decoración", image: "/productos/Maceta_Aleli/53a.png" },
  { id: "maceta-orquidia", name: "Maceta Orquídea", category: "Decoración", image: "/productos/Maceta_Orquidia/51a.png" },
  { id: "maceta-peonia", name: "Maceta Peonía", category: "Decoración", image: "/productos/Maceta_Peonia/69b.png" },
]

// Datos de productos - Accesorios y otros
const accesorios = [
  { id: "apagavelas", name: "Apagavelas", category: "Accesorios", image: "/productos/Apagavelas/80a.png" },
  { id: "bombones-aromaticos", name: "Bombones Aromáticos", category: "Accesorios", image: "/productos/Bombones_Arom%C3%A1ticos/12a.png" },
  { id: "colgantes", name: "Colgantes", category: "Accesorios", image: "/productos/Colgantes/IMG_20250529_154711292.jpg" },
  { id: "flores-difusoras", name: "Flores Difusoras", category: "Accesorios", image: "/productos/Flores_Difusoras/70a.png" },
  { id: "varillas-difusoras", name: "Varillas Difusoras", category: "Accesorios", image: "/productos/Varillas_Difusoras/72a.png" },
  { id: "jabon-corporal", name: "Jabón Corporal", category: "Jabones", image: "/productos/Jab%C3%B3n_Corporal/74a.png" },
  { id: "jabon-facial", name: "Jabón Facial", category: "Jabones", image: "/productos/Jab%C3%B3n_Facial/IMG_20250526_182905443.jpg" },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured Collections */}
      <FeaturedCollection />

      {/* Marquee */}
      <MarqueeBanner />

      {/* Velas Carousel */}
      <section id="velas">
        <ProductCarousel
          title="Velas Aromáticas"
          subtitle="Colección completa"
          products={withImages(velas)}
        />
      </section>

      {/* Difusores Carousel */}
      <section id="difusores" className="bg-muted">
        <ProductCarousel
          title="Difusores"
          subtitle="Inspirados en gemas preciosas"
          products={withImages(difusores)}
        />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Carameleras Carousel */}
      <ProductCarousel
        title="Carameleras"
        subtitle="Elegancia decorativa"
        products={withImages(carameleras)}
      />

      {/* Combos Carousel */}
      <section className="bg-muted">
        <ProductCarousel
          title="Combos Exclusivos"
          subtitle="Sets de regalo"
          products={withImages(combos)}
        />
      </section>

      {/* Decoración Carousel */}
      <ProductCarousel
        title="Decoración"
        subtitle="Cuencos y macetas"
        products={withImages(decoracion)}
      />

      {/* Accesorios Carousel */}
      <section id="accesorios" className="bg-muted">
        <ProductCarousel
          title="Accesorios"
          subtitle="Complementos perfectos"
          products={withImages(accesorios)}
        />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
