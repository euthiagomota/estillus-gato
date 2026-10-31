"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/site";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow m-0">Dúvidas frequentes</p>
          <h2
            id="faq-title"
            className="m-0 mt-3 font-display text-[clamp(28px,4vw,42px)] font-extrabold uppercase leading-[1.02] tracking-[0.02em] text-ink"
          >
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted">
            Encontre as principais informações para conhecer e visitar a Estillus Gato.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-[#d9d9d9] last:border-b-0">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.04em] text-ink md:text-[18px]">
                      {item.question}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c2bdb3] bg-white text-ink transition-transform duration-200">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">
                      {item.answer}
                      {item.answerLink ? (
                        <a
                          href={item.answerLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 font-medium text-ink underline underline-offset-4"
                        >
                          Ver no Google Maps
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
