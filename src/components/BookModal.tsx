import { useEffect, useRef, useState } from "react";
import type { Book } from "../data/books";
import BookCover from "./BookCover";
import { Sparkle, Star } from "./Decor";

export default function BookModal({ book, onClose, onNav }: { book: Book; onClose: () => void; onNav: (dir: 1 | -1) => void }) {
  const [tab, setTab] = useState<"about" | "highlights">("about");
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTab("about");
    scrollRef.current?.scrollTo({ top: 0 });
  }, [book.id]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const configured = book.purchaseLinks.filter((l) => l.url.trim() !== "");
  const bubbleColors = ["#FFD66B", "#A8DDBB", "#9BD8F4"];

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="book-modal-title">
      <div className="fade-in absolute inset-0 bg-midnight/60 backdrop-blur-md" onClick={onClose} />

      <div ref={scrollRef} className="modal-in paper relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-[2.5rem] bg-ivory shadow-2xl sm:rounded-[2.5rem]">
        {/* Colored band */}
        <div className="absolute inset-x-0 top-0 h-72 md:h-full md:w-[42%]" style={{ background: `linear-gradient(160deg, ${book.accent}, ${book.accent}99)` }}>
          {[...Array(8)].map((_, i) => (
            <Sparkle
              key={i}
              className="absolute animate-twinkle"
              color="#fff"
              style={{ width: 8 + (i % 3) * 5, left: `${(i * 29) % 90}%`, top: `${(i * 41) % 85}%`, animationDelay: `${i * 0.4}s`, opacity: 0.7 }}
            />
          ))}
        </div>

        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-midnight shadow-lg transition-transform hover:rotate-90"
          aria-label="Close book details"
        >
          ×
        </button>

        <div className="relative grid gap-8 p-6 pt-10 md:grid-cols-[42%_1fr] md:gap-0 md:p-0">
          {/* Cover column */}
          <div className="flex flex-col items-center md:p-10 md:pt-14">
            <div className="relative w-56 sm:w-64 md:w-full md:max-w-[310px]">
              <BookCover book={book} size="lg" className="rotate-[-2deg] animate-bob" />
              <Star className="absolute -right-5 -top-5 w-12 animate-spin-slow" />
              {book.awards && (
                <span className="absolute -bottom-4 -left-4 grid h-20 w-20 rotate-[-12deg] place-items-center rounded-full bg-sun text-center font-display text-[0.7rem] font-semibold leading-tight text-midnight shadow-lg ring-4 ring-white">
                  🏆<br />Award<br />Winner
                </span>
              )}
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={() => onNav(-1)} className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-midnight shadow transition hover:bg-white" aria-label="Previous book">
                ← Prev
              </button>
              <button onClick={() => onNav(1)} className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-midnight shadow transition hover:bg-white" aria-label="Next book">
                Next →
              </button>
            </div>
          </div>

          {/* Details column */}
          <div className="md:p-10 md:pl-12 md:pt-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-peach px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-midnight">
              ✏️ By Christian Kueng · Illustrated by {book.illustrator}
            </span>
            <h3 id="book-modal-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight md:text-5xl">
              {book.title}
            </h3>
            <p className="mt-2 font-display text-lg text-coral">{book.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-midnight px-3 py-1.5 text-sm font-bold text-ivory">📖 {book.ages}</span>
              {book.themes.map((t) => (
                <span key={t} className="rounded-full bg-sky/50 px-3 py-1.5 text-sm font-bold text-midnight">
                  {t}
                </span>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-7 inline-flex rounded-full bg-midnight/5 p-1" role="tablist">
              {(["about", "highlights"] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition ${tab === t ? "bg-white text-midnight shadow" : "text-midnight/60 hover:text-midnight"}`}
                >
                  {t === "about" ? "About the Story" : book.awards ? "🏆 Awards & Highlights" : "✨ Highlights"}
                </button>
              ))}
            </div>

            {tab === "about" ? (
              <div className="fade-in mt-5 space-y-4 text-[1.05rem] leading-relaxed text-midnight/80">
                <p>{book.longDescription[0]}</p>
                {book.questions && (
                  <div className="flex flex-col gap-2.5 py-1">
                    {book.questions.map((q, i) => (
                      <span
                        key={q}
                        className="relative w-fit rounded-2xl rounded-bl-sm px-4 py-2 font-display text-lg font-semibold text-midnight shadow-sm"
                        style={{ background: bubbleColors[i % 3], marginLeft: `${i * 1.25}rem` }}
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                )}
                {book.longDescription.slice(1).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : (
              <div className="fade-in mt-5 space-y-5">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {book.highlights.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-bold text-midnight">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun text-[0.65rem]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {book.awards && (
                  <div className="rounded-3xl border-2 border-sun/70 bg-white p-5">
                    <p className="font-display text-lg font-semibold text-midnight">🏆 Honors & Awards</p>
                    <ul className="mt-3 space-y-2">
                      {book.awards.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-[0.95rem] text-midnight/80">
                          <Star className="mt-0.5 h-4 w-4 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Purchase */}
            <div className="mt-8 rounded-3xl bg-midnight p-6 text-ivory">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛍️</span>
                <h4 className="font-display text-xl font-semibold">Bring this story home</h4>
              </div>
              {configured.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {configured.map((l) => (
                    <a
                      key={l.retailer}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-sun px-5 py-2.5 font-display font-semibold text-midnight transition hover:-translate-y-0.5"
                    >
                      Buy on {l.retailer} ↗
                    </a>
                  ))}
                </div>
              ) : (
                <div className="mt-4 flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                  <span className="grid h-11 w-11 shrink-0 animate-bob place-items-center rounded-xl bg-sun text-xl">⏳</span>
                  <div>
                    <p className="font-display text-lg font-semibold text-sun">Purchase link coming soon</p>
                    <p className="mt-1 text-sm text-ivory/75">Retailer links for this book haven't been added yet. Check back soon!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
