import Image from "next/image";
import { LINKS, NAV } from "@/lib/site";

const col = "font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-white";
const link = "text-[13px] text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline";

export function Footer() {
  return (
    <footer id="contato" className="on-dark bg-ink text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:py-16">
        <div>
          <Image
            src="/assets/identidade/logo_fundo_externo_transparente_1500px.png"
            alt="Estillus Gato"
            width={80}
            height={80}
            sizes="80px"
            className="h-20 w-20"
          />
          <p className="mb-0 mt-5 max-w-[34ch] text-[14px] leading-relaxed text-white/75">
            Moda masculina com estilo e atitude, em Casa Amarela, Recife.
          </p>
        </div>

        <nav aria-label="Rodapé: seções da página">
          <h2 className={`${col} m-0`}>Navegue</h2>
          <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0">
            {NAV.filter((n) => n.href !== "#contato").map((n) => (
              <li key={n.href}><a href={n.href} className={link}>{n.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={`${col} m-0`}>Contato</h2>
          <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0">
            <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram<span className="sr-only"> (abre em nova aba)</span></a></li>
            <li><a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp<span className="sr-only"> (abre em nova aba)</span></a></li>
            <li><a href={LINKS.maps} target="_blank" rel="noopener noreferrer" className={link}>Como chegar (Google Maps)<span className="sr-only"> (abre em nova aba)</span></a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-2 py-5 text-[12px] leading-snug text-white/70 md:flex-row md:items-center md:justify-between">
          <p className="m-0">
            Projeto conceitual desenvolvido pela DiamondDev. Não é o site oficial da Estillus Gato.
          </p>
          <p className="m-0">Design conceitual: DiamondDev</p>
        </div>
      </div>
    </footer>
  );
}
