import { MapPin, Shirt } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const ITEMS = [
  { icon: MapPin, title: "Loja física em Recife", text: "Casa Amarela · Recife" },
  { icon: WhatsAppIcon, title: "Atendimento pelo WhatsApp", text: "Entre em contato diretamente" },
  { icon: InstagramIcon, title: "Novidades no Instagram", text: "Acompanhe os looks e lançamentos" },
  { icon: Shirt, title: "Moda masculina", text: "Estilo para diferentes ocasiões" },
] as const;

export function BrandHighlights() {
  return (
    <section aria-label="Diferenciais da Estillus Gato" className="bg-white">
      <div className="container-page">
        <ul className="m-0 grid list-none grid-cols-1 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex items-center gap-4 border-line py-6 lg:px-6 ${
                i > 0 ? "border-t sm:[&:nth-child(2)]:border-t-0 lg:border-t-0" : ""
              } ${i % 2 === 1 ? "sm:border-l lg:border-l" : "lg:border-l-0"} ${i >= 2 ? "lg:border-l" : ""} ${i === 0 ? "lg:pl-0" : ""}`}
            >
              <Icon className="h-9 w-9 shrink-0 text-ink" strokeWidth={1.3} aria-hidden />
              <div>
                <h3 className="m-0 font-display text-[12px] font-extrabold uppercase tracking-[0.04em] text-ink">{title}</h3>
                <p className="m-0 mt-1 text-[12.5px] leading-snug text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
