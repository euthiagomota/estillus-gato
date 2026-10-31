import Image from "next/image";
import { LINKS, LOOKS } from "@/lib/site";
import { TextLink } from "./ui";

const CATEGORIES = [
  { title: "Casual", text: "Peças versáteis para o seu dia a dia.", img: LOOKS.trico, pos: "50% 30%" },
  { title: "Conjuntos", text: "Estilo e praticidade em looks completos.", img: LOOKS.conjunto, pos: "35% 40%" },
  { title: "Polos", text: "Conforto e estilo em todas as ocasiões.", img: LOOKS.polos, pos: "20% 35%" },
  { title: "Bermudas", text: "Leveza e liberdade para o seu ritmo.", img: LOOKS.bermuda, pos: "50% 45%" },
];

export function StyleCategories() {
  return (
    <section id="estilos" aria-label="Estilos masculinos" className="border-y border-line bg-white py-6 md:py-8">
      <div className="container-page">
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li key={c.title} className="grid min-h-[196px] grid-cols-[42%_58%] bg-surface xl:min-h-[212px]">
              <div className="relative min-h-[196px]">
                <Image
                  src={c.img.src}
                  alt={c.img.alt}
                  fill
                  sizes="(min-width:1280px) 130px, (min-width:768px) 22vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: c.pos }}
                />
              </div>
              <div className="flex flex-col justify-center gap-3 px-5 py-5 xl:px-5">
                <h3 className="m-0 font-display text-[15px] font-extrabold uppercase tracking-[0.02em] text-ink">
                  {c.title}
                </h3>
                <p className="m-0 text-[13px] leading-snug text-muted">{c.text}</p>
                <div>
                  <TextLink href={LINKS.instagram} external className="text-[10px] tracking-[0.12em]">
                    Ver no Instagram
                  </TextLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
