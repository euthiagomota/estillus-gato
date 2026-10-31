import { MessageCircleMore } from "lucide-react";
import { LINKS } from "@/lib/site";

const defaultMessage =
  "Olá! Conheci a Estillus Gato pelo site e gostaria de saber mais sobre as roupas.";

export function WhatsAppButton() {
  const href = `${LINKS.whatsapp}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Estillus Gato pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-250 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      title="Fale com a Estillus Gato"
    >
      <span className="sr-only">Fale com a Estillus Gato</span>
      <MessageCircleMore className="h-6 w-6" aria-hidden="true" />
      <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden whitespace-nowrap rounded-full border border-white/20 bg-ink px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white group-hover:block group-focus-visible:block md:block">
        Fale com a Estillus Gato
      </span>
    </a>
  );
}
