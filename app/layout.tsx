import type { Metadata, Viewport } from "next";
import { inter, montserrat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://estillusgato-demo.example"),
  title: "Estillus Gato | Moda Masculina em Recife — Casa Amarela",
  description:
    "Conheça a Estillus Gato, loja de moda masculina em Casa Amarela, Recife. Explore looks, acompanhe as novidades e entre em contato pelo WhatsApp.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "moda masculina Recife",
    "loja de roupa masculina Recife",
    "roupas masculinas Casa Amarela",
    "Estillus Gato",
    "moda masculina Avenida Norte",
  ],
  applicationName: "Protótipo Estillus Gato (DiamondDev)",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false, noarchive: true },
  openGraph: {
    title: "Estillus Gato | Moda Masculina em Recife — Casa Amarela",
    description:
      "Protótipo conceitual de uma landing page premium para a Estillus Gato em Recife, com looks masculinos e contato direto pelo WhatsApp.",
    url: "https://estillusgato-demo.example",
    siteName: "Estillus Gato",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/identidade/logo_fundo_externo_transparente_1500px.png",
        width: 1200,
        height: 1200,
        alt: "Estillus Gato — marca conceitual em ambiente de demonstração",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estillus Gato | Moda Masculina em Recife — Casa Amarela",
    description:
      "Protótipo conceitual de landing page para a Estillus Gato, loja de moda masculina em Casa Amarela, Recife.",
    images: ["/assets/identidade/logo_fundo_externo_transparente_1500px.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-xs focus:uppercase focus:tracking-widest focus:text-white"
        >
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
