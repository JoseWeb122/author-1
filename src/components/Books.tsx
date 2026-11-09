import { useCallback, useEffect, useRef, useState } from "react";
import { books } from "../data/books";
import BookCover from "./BookCover";
import BookModal from "./BookModal";
import { Cloud, Eyebrow, Sparkle } from "./Decor";

export default function Books() {
  const track = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 28 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const close = useCallback(() => setOpenIdx(null), []);
  const nav = useCallback((d: 1 | -1) => setOpenIdx((i) => (i === null ? i : (i + d + books.length) % books.length)), []);

  return (
    <section id="books" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <Cloud className="pointer-events-none absolute -left-10 top-24 w-56 opacity-70" color="#9BD8F4" />
      <Cloud className="pointer-events-none absolute -right-16 bottom-24 w-72 opacity-40" color="#B7D3F6" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="reveal max-w-2xl">
            <Eyebrow>The Storybook Collection</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-midnight sm:text-5xl lg:text-6xl">
              Stories Made for <span className="squiggle text-coral">Little Imaginations</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-midnight/70">
              Every book opens the door to a new adventure. Explore stories filled with imagination, discovery, friendship,
              and unforgettable moments.
            </p>
          </div>
          <div className="reveal flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Previous books"
              className="grid h-14 w-14 place-items-center rounded-full border-2 border-midnight/15 bg-white text-xl text-midnight shadow-sm transition hover:-translate-y-0.5 hover:border-midnight disabled:pointer-events-none disabled:opacity-35"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Next books"
              className="grid h-14 w-14 place-items-center rounded-full bg-midnight text-xl text-ivory shadow-[0_5px_0_0_#141f33] transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-35"
            >
              →
            </button>
          </div>
        </div>

        <p className="reveal mt-6 inline-flex items-center gap-2 rounded-2xl border border-dashed border-coral/50 bg-peach/60 px-4 py-2 text-sm font-semibold text-midnight/80">
          🎨 Picture books by Christian Kueng · Illustrated by Nana Melkadze
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={track}
        onScroll={update}
        className="no-scrollbar relative mt-12 flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth px-5 pb-10 pt-4 md:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        aria-label="Book carousel"
      >
        {books.map((b, i) => (
          <article
            key={b.id}
            data-card
            className="group reveal relative w-[82%] shrink-0 snap-start sm:w-[360px]"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div
              className="relative overflow-hidden rounded-[2.25rem] p-7 pb-0 transition-transform duration-500 group-hover:-translate-y-2"
              style={{ background: `linear-gradient(165deg, ${b.accent}, ${b.accent}70)` }}
            >
              <Sparkle className="absolute right-6 top-6 w-5 animate-twinkle" color="#fff" />
              <Sparkle className="absolute left-8 top-20 w-3 animate-twinkle" color="#fff" style={{ animationDelay: "1s" }} />
              <span className="relative z-10 inline-block rounded-full bg-white/85 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-midnight">
                {b.genre}
              </span>
              {b.awards && (
                <span className="absolute right-5 top-14 z-20 grid h-16 w-16 rotate-12 place-items-center rounded-full bg-sun text-center font-display text-[0.62rem] font-semibold leading-tight text-midnight shadow-lg ring-4 ring-white">
                  🏆<br />Award<br />Winner
                </span>
              )}
              <button
                onClick={() => setOpenIdx(i)}
                className="relative mx-auto mt-5 block w-[72%] translate-y-6 transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-y-2 group-hover:rotate-[-3deg]"
                aria-label={`Open ${b.title}`}
              >
                <BookCover book={b} />
              </button>
            </div>
            <div className="relative -mt-2 rounded-b-[2.25rem] bg-white p-7 pt-9 shadow-[0_20px_50px_-25px_rgba(38,54,83,0.4)] ring-1 ring-midnight/5">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-coral">
                <span>{b.ages}</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-midnight">{b.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-midnight/70">{b.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {b.themes.map((t) => (
                  <span key={t} className="rounded-full bg-ivory px-2.5 py-1 text-xs font-bold text-midnight/70 ring-1 ring-midnight/10">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenIdx(i)}
                className="mt-6 flex w-full items-center justify-between rounded-full bg-midnight py-3 pl-6 pr-2 font-display font-semibold text-ivory transition-colors hover:bg-coral"
              >
                Explore This Book
                <span className="grid h-9 w-9 place-items-center rounded-full bg-sun text-midnight transition-transform group-hover:rotate-[-45deg]">→</span>
              </button>
            </div>
          </article>
        ))}
        {/* coming soon card */}
        <article data-card className="reveal relative flex w-[82%] shrink-0 snap-start flex-col items-center justify-center rounded-[2.25rem] border-[3px] border-dashed border-midnight/15 bg-white/50 p-10 text-center sm:w-[360px]">
          <span className="grid h-20 w-20 animate-float place-items-center rounded-3xl bg-lavender text-4xl">🌙</span>
          <h3 className="mt-6 font-display text-2xl font-semibold text-midnight">More stories on the way</h3>
          <p className="mt-3 text-midnight/65">
            Christian is also the author of the juvenile fantasy novel <em>Three Genie Brothers</em>. New adventures are being dreamed up right now. Join the Story Club to hear first!
          </p>
          <a href="#newsletter" className="mt-6 rounded-full bg-coral px-6 py-3 font-display font-semibold text-white transition hover:-translate-y-0.5">
            Join the Story Club
          </a>
        </article>
      </div>

      {/* Progress */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-midnight/10">
          <div className="h-full rounded-full bg-gradient-to-r from-coral to-sun transition-all duration-300" style={{ width: `${20 + progress * 80}%` }} />
        </div>
      </div>

      {openIdx !== null && <BookModal book={books[openIdx]} onClose={close} onNav={nav} />}
    </section>
  );
}
