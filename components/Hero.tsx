import Image from "next/image";
import { LINKS } from "@/lib/site";
import { Button } from "./ui";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero">
      <div className="container-page">
        <div className="hero__inner">
          <div className="hero__stage">
            {/* Palavra gigante: decorativa, ATRÁS do modelo (z-index 1 < 2) */}
            <p aria-hidden="true" className="hero__wordmark">
              Estillus
            </p>

            {/* Modelo (PNG com canal alfa) à frente da tipografia */}
            <div className="hero__model-wrap">
              <Image
                className="hero__model"
                src="/assets/hero/modelo_estillus_gato_TRANSPARENTE.png"
                alt="Modelo masculino de óculos escuros, camisa de tricô preta com listras claras e calça branca"
                width={1013}
                height={1553}
                priority
                sizes="(min-width: 1280px) 440px, (min-width: 768px) 44vw, 80vw"
              />
            </div>

            <div className="hero__copy pb-10 pt-2 md:max-w-[39cqw] md:pb-12 md:pt-[2.4cqw]">
              <h1
                id="hero-title"
                className="m-0 font-display text-[13px] font-semibold uppercase leading-[1.9] tracking-[0.34em] text-ink md:text-[clamp(14px,1.55cqw,20px)]"
              >
                <span className="sr-only">Estillus Gato — </span>
                <span className="block">Seu estilo.</span>
                <span className="block">Sua identidade.</span>
              </h1>
              <span className="rule mt-5" aria-hidden="true" />
              <p className="mb-0 mt-5 max-w-[34ch] text-[15px] leading-relaxed text-muted md:text-[clamp(14px,1.3cqw,17px)]">
                Moda masculina atual, com estilo e atitude para o seu dia a dia.
              </p>
              <div className="mt-7 flex flex-col gap-3 lg:flex-row">
                <Button href={LINKS.instagram} external icon={<InstagramIcon className="h-[18px] w-[18px]" />}>
                  Ver Instagram
                </Button>
                <Button href={LINKS.whatsapp} external variant="outline" icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}>
                  Falar no WhatsApp
                </Button>
              </div>
            </div>

            <ul
              aria-label="Moda masculina, Recife"
              className="absolute bottom-14 right-0 z-[3] m-0 hidden list-none p-0 text-[10px] font-medium uppercase leading-[1.9] tracking-[0.34em] text-ink lg:block"
            >
              <li>Moda</li>
              <li>Masculina</li>
              <li>Recife</li>
              <li aria-hidden="true"><span className="rule mt-2 w-5" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
