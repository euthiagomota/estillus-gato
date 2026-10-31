"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) btnRef.current?.focus();
  }, []);

  // Escape fecha o menu; fecha ao ampliar a tela
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
      if (e.key === "Tab" && panelRef.current && btnRef.current) {
        const items = [btnRef.current, ...Array.from(panelRef.current.querySelectorAll<HTMLElement>("a"))];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { document.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, [open, close]);

  // Item ativo conforme a seção visível
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive("#" + e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="relative border-b border-transparent bg-paper">
      <div className="container-page flex h-[var(--header-h)] items-center justify-between">
        <div className="flex items-center gap-10 xl:gap-14">
          <a href="#inicio" aria-label="Estillus Gato — ir para o início" className="block shrink-0">
            <Image
              src="/assets/identidade/logo_fundo_externo_transparente_1500px.png"
              alt="Estillus Gato"
              width={96}
              height={96}
              sizes="(min-width:1280px) 80px, (min-width:768px) 72px, 56px"
              className="h-14 w-14 md:h-[68px] md:w-[68px] xl:h-20 xl:w-20"
              priority
            />
          </a>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="m-0 flex list-none items-center gap-9 p-0">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    aria-current={active === n.href ? "true" : undefined}
                    className={`inline-block border-b-2 pb-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      active === n.href ? "border-ink text-ink" : "border-transparent text-ink/70 hover:text-ink"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button
          ref={btnRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 border-y border-line bg-paper lg:hidden"
      >
        <nav aria-label="Menu mobile" className="container-page">
          <ul className="m-0 list-none p-0">
            {NAV.map((n) => (
              <li key={n.href} className="border-b border-line last:border-b-0">
                <a
                  href={n.href}
                  onClick={() => close()}
                  className="flex h-14 items-center font-display text-sm font-extrabold uppercase tracking-[0.12em] text-ink"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
