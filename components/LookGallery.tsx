"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LINKS, LOOKS } from "@/lib/site";
import { SectionTitle, TextLink } from "./ui";

const ITEMS = [LOOKS.trico, LOOKS.bermuda, LOOKS.polos, LOOKS.conjunto, LOOKS.terracota];

export function LookGallery() {
  const [visible, setVisible] = useState<boolean[]>(Array(ITEMS.length).fill(false));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLLIElement;
          const index = Number(element.dataset.index);
          setVisible((current) => {
            const next = [...current];
            next[index] = true;
            return next;
          });
          observer.unobserve(element);
        });
      },
      { threshold: 0.18 },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.classList.remove("modal-open");
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedIndex]);

  const selectedItem = selectedIndex !== null ? ITEMS[selectedIndex] : null;
  const whatsappMessage = selectedItem
    ? `Olá! Vi o look ${selectedItem.title} na página da Estillus Gato e gostaria de saber mais sobre ele.`
    : "Olá! Conheci a Estillus Gato pelo site e gostaria de saber mais sobre as roupas.";

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const goToNext = () => setSelectedIndex((current) => (current === null ? 0 : (current + 1) % ITEMS.length));
  const goToPrevious = () =>
    setSelectedIndex((current) => (current === null ? 0 : (current - 1 + ITEMS.length) % ITEMS.length));

  return (
    <>
      <section id="destaques" aria-labelledby="destaques-title" className="bg-white pb-12 pt-6 md:pb-14 md:pt-8">
        <div className="container-page">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <SectionTitle id="destaques-title">Destaques da Estillus</SectionTitle>
              <span aria-hidden="true" className="hidden h-px w-10 bg-ink sm:block" />
            </div>
            <TextLink href={LINKS.instagram} external className="text-[10px] tracking-[0.14em]">
              Acompanhe no Instagram
            </TextLink>
          </div>

          <div
            role="region"
            aria-label="Galeria editorial de looks masculinos"
            className="snap-row -mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] pb-3 md:mx-0 md:overflow-visible md:px-0 md:pb-0"
          >
            <ul className="m-0 flex list-none snap-x snap-mandatory gap-3 p-0 md:grid md:grid-cols-5 md:gap-4">
              {ITEMS.map((img, index) => (
                <li
                  key={img.src}
                  data-index={index}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  className={`look-card w-[56vw] max-w-[250px] shrink-0 snap-start md:w-auto md:max-w-none ${
                    visible[index] ? "is-visible" : ""
                  }`}
                  style={{ ["--delay" as string]: `${index * 120}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => openModal(index)}
                    aria-label={`Abrir look ${img.title}`}
                    className="group relative block aspect-[3/4.1] w-full overflow-hidden bg-surface text-left"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width:1440px) 250px, (min-width:768px) 20vw, 56vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                    <span className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="font-display text-[11px] uppercase tracking-[0.18em]">{img.title}</span>
                      <Expand className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização do look ${selectedItem.title}`}
          className="look-modal-backdrop fixed inset-0 z-[1100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden border border-white/10 bg-[#111111] text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar visualização do look"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition-opacity hover:opacity-80"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[260px] md:min-h-[420px]">
                <Image
                  src={ITEMS[selectedIndex ?? 0].src}
                  alt={ITEMS[selectedIndex ?? 0].alt}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center bg-[#111111] p-6 md:p-8">
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Look editorial</p>
                <h3 className="mt-3 font-display text-[clamp(26px,3vw,36px)] font-extrabold uppercase leading-none text-white">
                  {selectedItem.title}
                </h3>
                <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-white/70">
                  Combinações sofisticadas e masculinas inspiradas no estilo do dia a dia com atitude premium.
                </p>

                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Visualizar look anterior"
                    className="flex h-11 w-11 items-center justify-center border border-white/15 bg-transparent text-white transition-colors hover:bg-white hover:text-ink"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Visualizar próximo look"
                    className="flex h-11 w-11 items-center justify-center border border-white/15 bg-transparent text-white transition-colors hover:bg-white hover:text-ink"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <a
                  href={`${LINKS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-3 border border-white bg-white px-5 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-transparent hover:text-white"
                >
                  Consultar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
