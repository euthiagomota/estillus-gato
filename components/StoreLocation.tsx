"use client";

import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import { ADDRESS, LINKS } from "@/lib/site";
import { Button } from "./ui";
import { WhatsAppIcon } from "./icons";

export function StoreLocation() {
  return (
    <section id="nossa-loja" aria-labelledby="loja-title" className="bg-paper pb-16 pt-10 md:pb-20">
      <div className="container-page grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="on-dark relative min-h-[220px] overflow-hidden bg-graphite lg:min-h-[420px]">
          <img
            src="/assets/loja/Vitrine Moderna da Estillus Gato.png"
            alt="Fachada da loja Estillus Gato em Casa Amarela, Recife"
            className="h-[220px] w-full object-cover object-center sm:h-[320px] lg:h-full"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[68px] bg-[#111111]/95 sm:h-[100px] lg:h-[160px]" />
        </div>

        <div className="flex flex-col justify-center border border-[#d9d9d9] border-l-0 bg-white px-[var(--gutter)] py-12 lg:px-16 lg:py-16 xl:px-24">
          <p className="eyebrow m-0">Nossa loja</p>
          <h2
            id="loja-title"
            className="m-0 mt-3 font-display text-[clamp(26px,3vw,38px)] font-extrabold uppercase leading-tight tracking-[0.01em] text-ink"
          >
            Casa Amarela, Recife
          </h2>
          <span className="rule mt-5" aria-hidden="true" />
          <p className="mb-0 mt-5 max-w-[46ch] text-[15px] leading-relaxed text-muted">
            Venha conhecer a Estillus Gato e conferir de perto o estilo da moda masculina. Se preferir, fale com a loja pelo WhatsApp.
          </p>
          <address className="m-0 mt-5 flex max-w-[46ch] items-start gap-3 text-[14px] not-italic leading-snug text-ink">
            <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0" strokeWidth={1.6} aria-hidden />
            <span>{ADDRESS}</span>
          </address>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button
              href={LINKS.route}
              external
              icon={<Navigation className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />}
            >
              Abrir rota no Google Maps
            </Button>
            <Button href={LINKS.whatsapp} external variant="outline" icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}>
              Falar no WhatsApp
            </Button>
          </div>

          <div className="mt-8 overflow-hidden rounded-[18px] border border-[#d9d9d9] bg-[#f7f5f2]">
            <iframe
              title="Localização da Estillus Gato em Recife"
              src="https://www.google.com/maps?q=-8.0237087,-34.9130004&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[300px] w-full md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
