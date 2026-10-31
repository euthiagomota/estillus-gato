import { Star } from "lucide-react";
import { LINKS, TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-title"
      className="bg-[#F5F3EF] py-16 md:py-20"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow m-0">Experiências reais</p>
          <h2
            id="avaliacoes-title"
            className="m-0 mt-3 font-display text-[clamp(28px,4vw,42px)] font-extrabold uppercase leading-[1.02] tracking-[0.02em] text-ink"
          >
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[15px] leading-relaxed text-muted">
            Conheça a experiência de quem já visitou a Estillus Gato.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="group rounded-[18px] border border-[#d7d2cc] bg-white p-6 text-left shadow-[0_14px_30px_rgba(17,17,17,0.03)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 text-[#111111]" aria-label={`${item.rating} estrelas de avaliação`}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                {item.source}
              </p>

              <h3 className="mt-4 font-display text-[18px] font-extrabold uppercase tracking-[0.04em] text-ink">
                {item.name}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-muted">“{item.review}”</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={LINKS.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-ink bg-ink px-6 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-white hover:text-ink"
          >
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
