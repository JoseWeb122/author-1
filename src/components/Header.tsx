import { useEffect, useState } from "react";
import { Star, Sparkle } from "./Decor";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "books", label: "My Books" },
  { id: "about", label: "About the Author" },
  { id: "visits", label: "Author Visits" },
  { id: "educators", label: "For Educators" },
  { id: "contact", label: "Contact" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-2" aria-label="Christian, home">
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-midnight shadow-md transition-transform duration-500 group-hover:rotate-12">
        <Star className="h-6 w-6 animate-twinkle" />
        <Sparkle className="absolute -right-1 -top-1 h-3 w-3" color="#2E9FDB" />
      </span>
      <span className={`font-display text-[1.7rem] font-semibold leading-none tracking-tight ${light ? "text-ivory" : "text-midnight"}`}>
        Christ<span className="relative">i<span className="absolute -top-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-coral" /></span>an
      </span>
    </a>
  );
}

export default function Header({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] px-4 transition-all duration-500 md:px-6 ${
            scrolled
              ? "bg-ivory/85 py-2.5 shadow-[0_10px_40px_-15px_rgba(38,54,83,0.35)] ring-1 ring-midnight/5 backdrop-blur-xl"
              : "bg-ivory/40 py-3.5 backdrop-blur-md"
          }`}
          aria-label="Main navigation"
        >
          <Logo />

          <ul className="hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.95rem] font-bold transition-colors ${
                    active === n.id ? "text-midnight" : "text-midnight/65 hover:text-midnight"
                  }`}
                >
                  {active === n.id && <span className="absolute inset-0 -z-10 rounded-full bg-sun/60 fade-in" />}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#books"
              className="group relative hidden overflow-hidden rounded-full bg-coral px-5 py-2.5 font-display text-[0.95rem] font-semibold text-white shadow-[0_6px_0_0_#1F7DB3] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#1F7DB3] active:translate-y-1 active:shadow-[0_2px_0_0_#1F7DB3] sm:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Books
                <Sparkle className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180" color="#FFD66B" />
              </span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-midnight text-ivory xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded bg-current" />
                <span className="h-0.5 w-3.5 rounded bg-sun" />
                <span className="h-0.5 w-5 rounded bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-midnight/40 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col overflow-hidden rounded-l-[2.5rem] bg-midnight p-7 text-ivory transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* starry bg */}
          {[...Array(14)].map((_, i) => (
            <Sparkle
              key={i}
              className="absolute animate-twinkle"
              color={i % 3 === 0 ? "#2E9FDB" : "#FFD66B"}
              style={{
                width: 6 + (i % 4) * 3,
                top: `${(i * 37) % 95}%`,
                left: `${(i * 53) % 90}%`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.6,
              }}
            />
          ))}
          <div className="relative flex items-center justify-between">
            <Logo light />
            <button
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-2xl"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <ul className="relative mt-12 space-y-2">
            {NAV.map((n, i) => (
              <li
                key={n.id}
                className="transition-all duration-500"
                style={{
                  transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateX(30px)",
                }}
              >
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 font-display text-2xl font-medium transition-colors ${
                    active === n.id ? "bg-sun text-midnight" : "hover:bg-white/10"
                  }`}
                >
                  {n.label}
                  <span className="text-lg opacity-60">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#books"
            onClick={() => setOpen(false)}
            className="relative mt-auto rounded-full bg-coral py-4 text-center font-display text-lg font-semibold text-white"
          >
            Explore My Books ✨
          </a>
        </div>
      </div>
    </>
  );
}
