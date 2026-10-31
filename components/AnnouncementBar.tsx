import { LINKS } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const linkCls =
  "inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white";

export function AnnouncementBar() {
  return (
    <div className="on-dark bg-ink text-white">
      <div className="container-page flex h-8 items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.16em] md:h-9">
        <p className="m-0 flex min-w-0 items-center truncate">
          <span className="hidden md:inline">Novidades no Instagram</span>
          <span aria-hidden="true" className="mx-4 hidden h-3 w-px bg-white/40 md:inline-block" />
          <span className="truncate">Moda masculina em Recife</span>
        </p>
        <nav aria-label="Redes e contato" className="flex shrink-0 items-center gap-5">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Estillus Gato (abre em nova aba)" className={linkCls}>
            <InstagramIcon className="h-[15px] w-[15px]" />
            <span className="hidden lg:inline">Instagram</span>
          </a>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Estillus Gato (abre em nova aba)" className={linkCls}>
            <WhatsAppIcon className="h-[15px] w-[15px]" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
