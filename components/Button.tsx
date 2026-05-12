import type { ReactNode } from "react";

type Props = {
  variant?: "primary" | "secondary" | "tertiary";
  theme?: "light" | "dark";
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
};

const BASE =
  "btn-shimmer inline-flex items-center justify-center gap-2 font-archivo text-[11px] font-bold uppercase tracking-[.2em] rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none";

const PILL = "px-6 py-4";

const VARIANTS: Record<
  NonNullable<Props["variant"]>,
  Record<NonNullable<Props["theme"]>, string>
> = {
  primary: {
    light: `${PILL} bg-gs-ink text-gs-paper hover:bg-gs-grey-4 border border-gs-ink hover:border-gs-grey-4 focus-visible:ring-gs-ink focus-visible:ring-offset-gs-paper`,
    dark:  `${PILL} bg-gs-paper text-gs-ink hover:bg-gs-grey-1 border border-gs-paper hover:border-gs-grey-1 focus-visible:ring-white focus-visible:ring-offset-black`,
  },
  secondary: {
    light: `${PILL} border border-gs-ink text-gs-ink bg-transparent hover:bg-gs-ink hover:text-gs-paper focus-visible:ring-gs-ink focus-visible:ring-offset-gs-paper`,
    dark:  `${PILL} border border-white text-white bg-transparent hover:bg-white hover:text-black focus-visible:ring-white focus-visible:ring-offset-black`,
  },
  tertiary: {
    light: "nav-link-underline pb-0.5 text-gs-ink hover:text-gs-grey-4 focus-visible:ring-gs-ink focus-visible:ring-offset-gs-paper",
    dark:  "nav-link-underline pb-0.5 text-white hover:text-gs-grey-2 focus-visible:ring-white focus-visible:ring-offset-black",
  },
};

export default function Button({
  variant = "primary",
  theme = "light",
  href,
  children,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
}: Props) {
  const cls = `${BASE} ${VARIANTS[variant][theme]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}
