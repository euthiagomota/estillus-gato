import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "solid" | "outline" | "outline-light";
  external?: boolean;
  className?: string;
};

const variants = {
  solid: "bg-ink text-white border-ink hover:bg-white hover:text-ink",
  outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-white",
  "outline-light": "bg-transparent text-white border-white hover:bg-white hover:text-ink",
};

export function Button({ href, children, icon, variant = "solid", external, className = "" }: ButtonProps) {
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...ext}
      className={`inline-flex h-[52px] items-center justify-center gap-3 border px-6 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}

export function TextLink({
  href,
  children,
  external,
  className = "text-[10.5px] tracking-[0.16em]",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...ext}
      className={`group inline-flex items-center gap-2 border-b border-current pb-0.5 font-sans font-semibold uppercase leading-tight ${className}`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}

export function SectionTitle({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-display text-[17px] font-extrabold uppercase tracking-[0.02em] text-ink md:text-[20px] ${className}`}
    >
      {children}
    </h2>
  );
}
