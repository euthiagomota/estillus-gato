import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function InstagramIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3.2 20.8l1.3-4.7A8.8 8.8 0 1 1 8 19.5l-4.8 1.3z" />
      <path d="M9.2 7.9c-.3 0-.7.3-.9.9-.3 1.1.2 2.6 1.5 4.1 1.4 1.6 3.2 2.5 4.5 2.4.6-.1 1.2-.6 1.3-1.1l.1-.5-1.9-.9-.7.8c-.9-.3-2.3-1.6-2.6-2.5l.8-.7-.9-1.9-.5.1z" />
    </svg>
  );
}
