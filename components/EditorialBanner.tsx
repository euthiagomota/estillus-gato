import Image from "next/image";
import { LINKS, LOOKS } from "@/lib/site";
import { Button } from "./ui";
import { InstagramIcon } from "./icons";

export function EditorialBanner() {
  return (
    <section id="estilo-sem-limites" aria-labelledby="banner-title" className="bg-surface">
      <div className="container-page grid items-stretch gap-8 py-10 md:py-0 lg:grid-cols-[5fr_7fr] lg:gap-14">
        <div className="flex flex-col justify-center py-2 lg:py-16">
          <p className="eyebrow m-0">Atitude e identidade</p>
          <h2
            id="banner-title"
            className="m-0 mt-4 font-display text-[clamp(34px,10vw,76px)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-ink lg:text-[clamp(44px,4.7vw,72px)]"
          >
            Estilo
            <br />
            sem limites
          </h2>
          <span className="rule mt-6" aria-hidden="true" />
          <p className="mb-0 mt-5 max-w-[36ch] text-[15px] leading-relaxed text-muted md:text-base">
            Looks que combinam com a sua rotina. Da cidade à praia, sempre com personalidade.
          </p>
          <div className="mt-8">
            <Button href={LINKS.instagram} external icon={<InstagramIcon className="h-[18px] w-[18px]" />}>
              Acompanhar novidades
            </Button>
          </div>
        </div>

        {/* Composição honesta com recortes fornecidos (substituir por foto de campanha licenciada) */}
        <div className="grid grid-cols-2 gap-3 md:py-10 lg:py-0 lg:gap-0">
          {[LOOKS.conjunto, LOOKS.terracota].map((img, i) => (
            <div key={img.src} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[440px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width:1024px) 400px, 50vw"
                className="object-cover"
                style={{ objectPosition: i === 0 ? "40% 35%" : "50% 30%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
