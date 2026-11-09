import nightImg from "../assets/night.jpg";
import { site } from "../data/books";
import { Sparkle } from "./Decor";
import { Logo, NAV } from "./Header";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-ivory">
      <div className="relative h-[340px] sm:h-[420px]">
        <img src={nightImg} alt="Watercolor night scene of a sleepy storybook village under a starry sky" className="absolute inset-0 h-full w-full object-cover object-bottom" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-midnight" style={{ backgroundImage: "linear-gradient(to bottom, #F3FAFF 0%, rgba(243,250,255,0) 18%, rgba(38,54,83,0) 60%, #263653 100%)" }} />
        {[...Array(12)].map((_, i) => (
          <Sparkle
            key={i}
            className="absolute animate-twinkle"
            color="#FFD66B"
            style={{ width: 6 + (i % 3) * 4, left: `${(i * 29 + 5) % 95}%`, top: `${25 + ((i * 17) % 35)}%`, animationDelay: `${i * 0.3}s` }}
          />
        ))}
        <div className="absolute inset-x-0 bottom-10 px-5 text-center">
          <p className="reveal font-display text-3xl font-semibold drop-shadow-lg sm:text-5xl">The End… is just the beginning.</p>
          <a href="#books" className="mt-6 inline-flex rounded-full bg-sun px-7 py-3 font-display text-lg font-semibold text-midnight shadow-lg transition hover:-translate-y-0.5">
            Start Reading ✨
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-ivory/65">
            Colorful, whimsical picture books that inspire little readers to dream, discover, and imagine.
          </p>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-sun">Explore</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-ivory/70 transition hover:text-ivory">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-sun">Follow along</p>
          <ul className="mt-4 space-y-2">
            {site.socials.map((s) =>
              s.url ? (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ivory/70 hover:text-ivory">
                    {s.label} ↗
                  </a>
                </li>
              ) : (
                <li key={s.label} className="text-ivory/45" title="Add link in src/data/books.ts">
                  {s.label} · <span className="text-xs">link coming soon</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-ivory/50 sm:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Christian Kueng. All rights reserved.</p>
          <p>Book illustrations by Nana Melkadze.</p>
        </div>
      </div>
    </footer>
  );
}
