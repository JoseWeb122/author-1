import { useState, type FormEvent } from "react";
import { site } from "../data/books";
import { Butterfly, Eyebrow, Sparkle, Star } from "./Decor";

export function Newsletter() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Please enter a valid email address.");
    setErr("");
    setDone(true);
  };

  return (
    <section id="newsletter" className="relative bg-ivory px-5 pb-8 md:px-8">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-lavender via-[#c6e6fb] to-sky p-8 sm:p-12 lg:p-16">
        {[...Array(10)].map((_, i) => (
          <Sparkle
            key={i}
            className="absolute animate-twinkle"
            color={i % 2 ? "#fff" : "#FFD66B"}
            style={{ width: 8 + (i % 4) * 4, left: `${(i * 23) % 95}%`, top: `${(i * 37) % 90}%`, animationDelay: `${i * 0.35}s` }}
          />
        ))}
        <Butterfly className="absolute right-[12%] top-8 w-12 animate-flutter" color="#2E9FDB" />
        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="text-4xl">💌</span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-midnight sm:text-5xl">Join the Story Club</h2>
            <p className="mt-4 text-lg text-midnight/75">
              New book news, printable activities, and a sprinkle of storybook magic, delivered gently to your inbox a few
              times a year.
            </p>
          </div>
          {done ? (
            <div className="fade-in rounded-[2rem] bg-white/85 p-8 text-center backdrop-blur">
              <span className="text-4xl">🌟</span>
              <p className="mt-3 font-display text-2xl font-semibold">You're on the list!</p>
              <p className="mt-2 text-sm text-midnight/65">Demo form: connect to your email provider to collect real sign-ups.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="flex flex-col gap-3 rounded-[2rem] bg-white/85 p-2 backdrop-blur sm:flex-row">
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-4 font-semibold text-midnight outline-none placeholder:text-midnight/40"
                />
                <button className="rounded-full bg-midnight px-7 py-4 font-display text-lg font-semibold text-ivory transition hover:bg-coral">
                  Subscribe ✨
                </button>
              </div>
              {err && <p className="mt-2 pl-4 text-sm font-bold text-[#c44b33]">{err}</p>}
              <p className="mt-3 pl-4 text-sm text-midnight/60">For grown-ups only. No spam, unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(d.get("name") || "").trim()) errs.name = "Please share your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(d.get("email") || ""))) errs.email = "Please enter a valid email.";
    if (String(d.get("message") || "").trim().length < 10) errs.message = "A few more words, please (10+ characters).";
    setErrors(errs);
    if (!Object.keys(errs).length) setSent(true);
  };

  const input =
    "w-full rounded-2xl border-2 border-midnight/10 bg-white px-4 py-3 font-semibold text-midnight placeholder:text-midnight/35 outline-none transition focus:border-coral";

  return (
    <section id="contact" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-peach/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal">
          <Eyebrow>Say Hello</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-midnight sm:text-5xl lg:text-6xl">
            Let's Write the <span className="text-coral">Next Chapter</span> Together
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-midnight/70">
            Whether you're a parent, teacher, librarian, bookseller, or a young reader with a big idea, Christian would
            love to hear from you.
          </p>

          <div className="mt-10 space-y-4">
            {[
              ["✉️", "#FFD66B", "Email", site.email + " (placeholder)"],
              ["🏫", "#9BD8F4", "Visits & events", "Use the author visit form above"],
              ["📰", "#B7D3F6", "Press & media", "Media kit available on request"],
            ].map(([icon, c, t, d]) => (
              <div key={t} className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-midnight/5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl" style={{ background: c }}>
                  {icon}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold">{t}</p>
                  <p className="truncate text-sm text-midnight/60">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <Star className="absolute -right-3 -top-5 z-10 w-12 animate-spin-slow" />
          <div className="relative rounded-[2.5rem] bg-peach/60 p-6 sm:p-10">
            {sent ? (
              <div className="fade-in flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-24 w-24 animate-bob place-items-center rounded-full bg-white text-5xl shadow-lg">💌</span>
                <h3 className="mt-6 font-display text-3xl font-semibold">Thank you for your message!</h3>
                <p className="mt-3 max-w-sm text-midnight/70">
                  This is a front-end demo, so no message has been sent yet. Connect this form to an email or form
                  service to start receiving notes.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-midnight px-6 py-3 font-display font-semibold text-ivory">
                  Write another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">Name *</span>
                    <input name="name" className={input} placeholder="Your name" aria-invalid={!!errors.name} />
                    {errors.name && <span className="mt-1 block text-sm font-bold text-[#c44b33]">{errors.name}</span>}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">Email *</span>
                    <input name="email" type="email" className={input} placeholder="you@example.com" aria-invalid={!!errors.email} />
                    {errors.email && <span className="mt-1 block text-sm font-bold text-[#c44b33]">{errors.email}</span>}
                  </label>
                </div>
                <fieldset>
                  <legend className="mb-2 text-sm font-bold">I am a…</legend>
                  <div className="flex flex-wrap gap-2">
                    {["Parent", "Educator", "Librarian", "Bookseller", "Young reader", "Other"].map((r, i) => (
                      <label key={r} className="cursor-pointer">
                        <input type="radio" name="role" value={r} defaultChecked={i === 0} className="peer sr-only" />
                        <span className="block rounded-full bg-white px-4 py-2 text-sm font-bold text-midnight/70 ring-1 ring-midnight/10 transition peer-checked:bg-midnight peer-checked:text-ivory peer-focus-visible:ring-2 peer-focus-visible:ring-coral">
                          {r}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold">Message *</span>
                  <textarea name="message" rows={5} className={input} placeholder="Once upon a time, I wanted to say…" aria-invalid={!!errors.message} />
                  {errors.message && <span className="mt-1 block text-sm font-bold text-[#c44b33]">{errors.message}</span>}
                </label>
                <button className="w-full rounded-full bg-midnight py-4 font-display text-lg font-semibold text-ivory shadow-[0_6px_0_0_#141f33] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none">
                  Send Message 💌
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
