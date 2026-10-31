import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LookGallery } from "@/components/LookGallery";
import { StoreLocation } from "@/components/StoreLocation";
import { StyleCategories } from "@/components/StyleCategories";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { EditorialBanner } from "@/components/EditorialBanner";
import { BrandHighlights } from "@/components/BrandHighlights";
import { STORE_INFO } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: STORE_INFO.name,
  image: "/assets/identidade/logo_fundo_externo_transparente_1500px.png",
  telephone: STORE_INFO.phoneDisplay,
  email: "contato@estillusgato.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Norte Miguel Arraes de Alencar, 5229",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/estillusgato/"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: STORE_INFO.latitude,
    longitude: STORE_INFO.longitude,
  },
  openingHours: "Mo-Sa 09:00-18:00",
  description:
    "Projeto conceitual de loja de moda masculina em Casa Amarela, Recife, voltada para peças premium e estilo editorial.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementBar />
      <Header />
      <main id="conteudo">
        <Hero />
        <StyleCategories />
        <EditorialBanner />
        <BrandHighlights />
        <LookGallery />
        <Testimonials />
        <StoreLocation />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
