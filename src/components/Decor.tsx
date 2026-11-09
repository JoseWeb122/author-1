import type { CSSProperties } from "react";

type P = { className?: string; style?: CSSProperties; color?: string };

export function Star({ className = "", style, color = "#FFD66B" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 1.8c.5 0 .9.3 1.1.8l2.3 5.1 5.5.6c1 .1 1.4 1.4.6 2l-4.1 3.7 1.2 5.4c.2 1-.9 1.8-1.8 1.2L12 17.9l-4.8 2.8c-.9.5-2-.2-1.8-1.2l1.2-5.4-4.1-3.7c-.7-.7-.3-1.9.7-2l5.5-.6 2.3-5.1c.1-.5.5-.8 1-.8Z"
        fill={color}
        stroke="#263653"
        strokeOpacity=".12"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Sparkle({ className = "", style, color = "#FFD66B" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12C11.4 17.8 6.2 12.6 0 12 6.2 11.4 11.4 6.2 12 0Z" fill={color} />
    </svg>
  );
}

export function Cloud({ className = "", style, color = "#FFFFFF" }: P) {
  return (
    <svg viewBox="0 0 200 90" className={className} style={style} aria-hidden="true">
      <path
        d="M38 82c-18 0-32-12-32-27s13-27 30-27c3-15 17-26 34-26 14 0 26 7 32 18 5-3 11-5 18-5 18 0 32 13 33 29 15 1 27 12 27 25 0 7-5 13-12 13H38Z"
        fill={color}
      />
    </svg>
  );
}

export function Butterfly({ className = "", style, color = "#2E9FDB" }: P) {
  return (
    <svg viewBox="0 0 40 32" className={className} style={style} aria-hidden="true">
      <g>
        <ellipse cx="12" cy="11" rx="10" ry="9" fill={color} />
        <ellipse cx="28" cy="11" rx="10" ry="9" fill={color} />
        <ellipse cx="13" cy="23" rx="7" ry="6" fill={color} opacity=".75" />
        <ellipse cx="27" cy="23" rx="7" ry="6" fill={color} opacity=".75" />
        <circle cx="11" cy="10" r="3" fill="#F3FAFF" opacity=".7" />
        <circle cx="29" cy="10" r="3" fill="#F3FAFF" opacity=".7" />
        <rect x="19" y="6" width="2" height="22" rx="1" fill="#263653" />
        <path d="M20 6c-1-3-3-5-5-5M20 6c1-3 3-5 5-5" stroke="#263653" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function BookIcon({ className = "", style }: P) {
  return (
    <svg viewBox="0 0 48 40" className={className} style={style} aria-hidden="true">
      <path d="M24 8C18 3 9 3 3 5v29c6-2 15-2 21 3V8Z" fill="#2E9FDB" />
      <path d="M24 8c6-5 15-5 21-3v29c-6-2-15-2-21 3V8Z" fill="#9BD8F4" />
      <path d="M24 8v29" stroke="#263653" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12c4-1 8-1 11 1M8 18c4-1 8-1 11 1M29 13c3-2 7-2 11-1M29 19c3-2 7-2 11-1" stroke="#F3FAFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Wavy divider between sections */
export function Wave({ fill = "#F3FAFF", flip = false, className = "" }: { fill?: string; flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={`block h-[50px] w-full md:h-[90px] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path d="M0 40c120 30 240 45 360 35S600 20 720 20s240 40 360 45 240-15 360-35v60H0Z" fill={fill} />
    </svg>
  );
}

/** Paper-cut style rolling hills */
export function Hills({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 120c160-60 320-80 480-40s300 70 460 30 340-90 500-50v160H0Z" fill="#A8DDBB" opacity=".55" />
      <path d="M0 160c200-50 380-40 560 0s360 40 520 0 260-40 360-20v80H0Z" fill="#A8DDBB" />
      <path d="M0 200c240-30 480-30 720-10s480 20 720-10v40H0Z" fill="#F3FAFF" />
    </svg>
  );
}

/** Section eyebrow label */
export function Eyebrow({ children, color = "#2E9FDB" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 font-display text-sm font-semibold tracking-wide text-midnight shadow-sm ring-1 ring-midnight/5"
    >
      <Sparkle className="h-3.5 w-3.5" color={color} />
      {children}
    </span>
  );
}
