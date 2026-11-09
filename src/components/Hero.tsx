import heroImg from "../assets/hero.jpg";
import { Butterfly, Cloud, Hills, Sparkle, Star } from "./Decor";
import { useScrollY } from "../hooks/useReveal";

export default function Hero() {
  const y = useScrollY();
  const p = Math.min(y, 900);

  return (
    <section
      id="home"
      className="paper relative overflow-hidden bg-gradient-to-b from-[#cfeefc] via-[#e6f5fd] to-ivory pb-24 pt-32 md:pb-36 md:pt-40"
    >
      {/* Sun glow */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full bg-sun/50 blur-3xl"
        style={{ transform: `translateY(${p * 0.15}px)` }}
      />
      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-lavender/40 blur-3xl" />

      {/* Drifting clouds */}
      <div className="pointer-events-none absolute inset-0" style={{ transform: `translateY(${p * 0.25}px)` }}>
        <Cloud className="absolute top-28 w-44 animate-drift opacity-90" />
        <Cloud className="absolute top-60 w-28 animate-drift-slow opacity-70" style={{ animationDelay: "-40s" }} />
        <Cloud className="absolute top-14 w-64 animate-drift-slow opacity-80" style={{ animationDelay: "-70s" }} />
        <Cloud className="absolute bottom-48 w-36 animate-drift opacity-60" style={{ animationDelay: "-25s" }} />
      </div>

      {/* Twinkling stars */}
      {[
        ["8%", "18%", 18, "#FFD66B"],
        ["46%", "12%", 12, "#2E9FDB"],
        ["38%", "70%", 14, "#B7D3F6"],
        ["4%", "64%", 10, "#FFD66B"],
        ["92%", "58%", 16, "#FFD66B"],
        ["55%", "88%", 10, "#2E9FDB"],
      ].map(([l, t, s, c], i) => (
        <Sparkle
          key={i}
          className="pointer-events-none absolute animate-twinkle"
          color={c as string}
          style={{ left: l as string, top: t as string, width: s as number, animationDelay: `${i * 0.5}s` }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="relative z-10">
          <div className="rise inline-flex items-center gap-2 rounded-full bg-white/80 py-1.5 pl-1.5 pr-4 text-sm font-bold shadow-sm ring-1 ring-midnight/5 backdrop-blur">
            <span className="rounded-full bg-mint px-2.5 py-0.5 font-display text-xs font-semibold text-midnight">NEW</span>
            Award-winning picture books by Christian Kueng
          </div>

          <h1 className="rise mt-6 font-display text-[2.9rem] font-semibold leading-[0.98] tracking-tight text-midnight sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]" style={{ animationDelay: "0.1s" }}>
            <span className="block">Little Readers.</span>
            <span className="relative block">
              <span className="relative z-10 text-coral">Big Imaginations.</span>
              <svg className="absolute -bottom-1 left-0 z-0 h-4 w-[92%] sm:h-5" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M3 14C60 4 140 3 297 10" stroke="#FFD66B" strokeWidth="9" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <span className="block">
              Endless{" "}
              <span className="relative inline-block">
                Adventures.
                <Star className="absolute -right-7 -top-4 h-8 w-8 animate-twinkle sm:-right-9 sm:h-10 sm:w-10" />
              </span>
            </span>
          </h1>

          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-midnight/75 md:text-xl" style={{ animationDelay: "0.25s" }}>
            Welcome to a world of colorful characters, unforgettable adventures, and stories that inspire children to
            dream, discover, and imagine.
          </p>

          <div className="rise mt-9 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ animationDelay: "0.4s" }}>
            <a
              href="#books"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-midnight px-8 py-4 font-display text-lg font-semibold text-ivory shadow-[0_8px_0_0_#141f33] transition-all hover:-translate-y-1 hover:shadow-[0_12px_0_0_#141f33] active:translate-y-1 active:shadow-[0_3px_0_0_#141f33]"
            >
              Discover My Books
              <span className="grid h-7 w-7 place-items-center rounded-full bg-sun text-midnight transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#visits"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-midnight/15 bg-white/70 px-7 py-[0.9rem] font-display text-lg font-semibold text-midnight backdrop-blur transition-all hover:-translate-y-0.5 hover:border-coral hover:bg-white"
            >
              🏫 Invite Me for an Author Visit
            </a>
          </div>

          <div className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-bold text-midnight/70" style={{ animationDelay: "0.55s" }}>
            {[
              ["#A8DDBB", "Read-aloud favorites"],
              ["#B7D3F6", "School & library visits"],
              ["#FFD66B", "Free educator resources"],
            ].map(([c, t]) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: c }} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto w-full max-w-[640px]" style={{ transform: `translateY(${p * -0.06}px)` }}>
          {/* back shapes */}
          <div className="absolute -inset-4 rotate-[-4deg] rounded-[3rem_6rem_3rem_5rem] bg-sun/70 md:-inset-6" />
          <div className="absolute -inset-2 rotate-[3deg] rounded-[5rem_3rem_6rem_3rem] bg-coral/30 md:-inset-3" />

          <div className="rise relative overflow-hidden rounded-[3rem_6rem_3rem_6rem] border-[6px] border-white shadow-[0_40px_80px_-30px_rgba(38,54,83,0.55)]" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroImg}
              alt="A friendly fox in a mint scarf reads an open storybook as a magical village, castle and rainbow rise from its pages"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[2s]"
              style={{ transform: `scale(${1.06 + p * 0.00012}) translateY(${p * 0.04}px)` }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/10 to-transparent" />
          </div>

          {/* Floating paper-cut accents */}
          <div className="absolute -left-6 top-10 animate-float rounded-2xl bg-white px-4 py-3 shadow-xl md:-left-12">
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-coral">Once upon</p>
            <p className="font-display text-lg font-semibold leading-tight text-midnight">a time…</p>
          </div>

          <div className="absolute -bottom-8 right-4 flex animate-float-slow items-center gap-3 rounded-[1.5rem] bg-midnight px-4 py-3 text-ivory shadow-2xl md:-right-6" style={{ animationDelay: "-3s" }}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-xl">📖</span>
            <div>
              <p className="font-display text-sm font-semibold leading-tight">Stories to treasure</p>
              <p className="text-xs text-ivory/70">for readers of all ages</p>
            </div>
          </div>

          <Butterfly className="absolute -top-8 left-1/3 w-10 animate-flutter" color="#2E9FDB" />
          <Butterfly className="absolute -right-4 top-1/3 w-8 animate-flutter" color="#B7D3F6" style={{ animationDelay: "-4s" }} />
          <Star className="absolute -right-3 -top-5 w-12 animate-spin-slow" />
          <Sparkle className="absolute -left-3 bottom-16 w-6 animate-twinkle" color="#9BD8F4" />
        </div>
      </div>

      <Hills className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full md:h-44" />
    </section>
  );
}
