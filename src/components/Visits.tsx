import { useState, type FormEvent } from "react";
import visitsImg from "../assets/visits.jpg";
import { Cloud, Eyebrow, Sparkle, Star } from "./Decor";

const formats = [
  {
    icon: "🏫",
    color: "#FFD66B",
    title: "School Visits",
    text: "Interactive read-alouds, story-building workshops and Q&A sessions tailored to elementary and middle-school classrooms, plus writing workshops for grades 4–8.",
    meta: "45–60 min sessions",
  },
  {
    icon: "💻",
    color: "#9BD8F4",
    title: "Virtual Visits",
    text: "A magical live storytime streamed straight into your classroom, wherever you are in the world.",
    meta: "30–45 min · any timezone",
  },
  {
    icon: "📚",
    color: "#B7D3F6",
    title: "Libraries & Festivals",
    text: "Family storytimes, book signings and creative drawing sessions for libraries, bookshops and events.",
    meta: "Flexible formats",
  },
];

const steps = [
  ["Send a request", "Tell us about your school, group size and preferred dates."],
  ["Plan together", "We'll shape a session around your age group and goals."],
  ["Story day!", "Christian arrives with books, props, and lots of imagination."],
];

type Status = "idle" | "sent";

export default function Visits() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) errs.name = "Please share your name.";
    const email = String(data.get("email") || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Please enter a valid email.";
    if (!String(data.get("org") || "").trim()) errs.org = "Which school or organization?";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setStatus("sent");
      e.currentTarget.reset();
    }
  };

  const input =
    "w-full rounded-2xl border-2 border-midnight/10 bg-ivory px-4 py-3 font-semibold text-midnight placeholder:text-midnight/35 outline-none transition focus:border-coral focus:bg-white";

  return (
    <section id="visits" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <Cloud className="pointer-events-none absolute right-10 top-16 w-40 opacity-60" color="#9BD8F4" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal">
            <Eyebrow color="#9BD8F4">Author Visits</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-midnight sm:text-5xl lg:text-6xl">
              Bring the Story <span className="text-coral">to Life</span> at Your School
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-midnight/70">
              Joyful, interactive author visits that turn reading into an adventure. Children meet the storyteller,
              explore how picture books are made, and leave inspired to write and draw their own stories.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["K–8", "Grade levels"],
                ["In-person", "& virtual"],
                ["Writing", "Workshops"],
              ].map(([a, b], i) => (
                <div key={a} className="rounded-3xl bg-white p-4 text-center shadow-sm ring-1 ring-midnight/5">
                  <p className="font-display text-xl font-semibold" style={{ color: ["#2E9FDB", "#263653", "#7a64c9"][i] }}>
                    {a}
                  </p>
                  <p className="text-xs font-bold text-midnight/55">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-sky/60" />
            <img
              src={visitsImg}
              alt="Watercolor illustration of children on a rainbow rug enjoying an interactive storytime in a school library"
              className="relative aspect-[3/2] w-full rounded-[2.5rem] border-[6px] border-white object-cover shadow-2xl"
              loading="lazy"
            />
            <Star className="absolute -left-4 -top-4 w-12 animate-spin-slow" />
            <div className="absolute -bottom-6 left-6 animate-float rounded-2xl bg-coral px-5 py-3 font-display font-semibold text-white shadow-xl">
              “Can you read it again?!” 🙌
            </div>
          </div>
        </div>

        {/* Formats */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {formats.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative rounded-[2rem] p-[3px] transition-transform duration-500 hover:-translate-y-2"
              style={{ background: `linear-gradient(140deg, ${f.color}, #fff)`, transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-full rounded-[calc(2rem-3px)] bg-white p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl text-2xl" style={{ background: f.color }}>
                  {f.icon}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-midnight/70">{f.text}</p>
                <p className="mt-5 inline-block rounded-full bg-ivory px-3 py-1 text-sm font-bold text-midnight/70">⏱ {f.meta}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Steps + Form */}
        <div className="mt-20 grid gap-10 overflow-hidden rounded-[2.75rem] bg-midnight p-6 text-ivory sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div className="reveal relative">
            {[...Array(6)].map((_, i) => (
              <Sparkle
                key={i}
                className="absolute animate-twinkle"
                color="#FFD66B"
                style={{ width: 8 + (i % 3) * 4, left: `${(i * 31) % 90}%`, top: `${(i * 47) % 100}%`, animationDelay: `${i * 0.4}s`, opacity: 0.5 }}
              />
            ))}
            <h3 className="relative font-display text-3xl font-semibold sm:text-4xl">How a visit works</h3>
            <ol className="relative mt-8 space-y-6">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-xl font-semibold text-midnight" style={{ background: ["#FFD66B", "#2E9FDB", "#A8DDBB"][i] }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold">{t}</p>
                    <p className="mt-1 text-ivory/70">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="relative mt-10 rounded-2xl bg-white/10 p-4 text-sm text-ivory/75">
              💡 Visit fees, travel details and availability are shared on request. Book early for World Book Day and
              Read Across America week!
            </p>
          </div>

          <div className="reveal rounded-[2rem] bg-white p-6 text-midnight sm:p-8">
            {status === "sent" ? (
              <div className="fade-in flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="grid h-20 w-20 animate-bob place-items-center rounded-full bg-mint text-4xl">🎉</span>
                <h4 className="mt-6 font-display text-3xl font-semibold">Request received!</h4>
                <p className="mt-3 max-w-sm text-midnight/70">
                  Thank you for your interest in an author visit. Note: this demo form isn't connected to an inbox yet.
                  Connect it to your preferred form service to receive requests.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-6 rounded-full bg-midnight px-6 py-3 font-display font-semibold text-ivory">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-4">
                <h3 className="font-display text-2xl font-semibold">Request an Author Visit</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">Your name *</span>
                    <input name="name" className={input} placeholder="Ms. Rivera" aria-invalid={!!errors.name} />
                    {errors.name && <span className="mt-1 block text-sm font-bold text-coral">{errors.name}</span>}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">Email *</span>
                    <input name="email" type="email" className={input} placeholder="you@school.edu" aria-invalid={!!errors.email} />
                    {errors.email && <span className="mt-1 block text-sm font-bold text-coral">{errors.email}</span>}
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold">School / organization *</span>
                  <input name="org" className={input} placeholder="Sunnyside Elementary" aria-invalid={!!errors.org} />
                  {errors.org && <span className="mt-1 block text-sm font-bold text-coral">{errors.org}</span>}
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">Visit type</span>
                    <select name="type" className={input}>
                      <option>In-person school visit</option>
                      <option>Virtual visit</option>
                      <option>Library / festival event</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">Preferred date</span>
                    <input name="date" type="date" className={input} />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold">Tell us more</span>
                  <textarea name="msg" rows={3} className={input} placeholder="Grade levels, number of students, special themes…" />
                </label>
                <button type="submit" className="w-full rounded-full bg-coral py-4 font-display text-lg font-semibold text-white shadow-[0_6px_0_0_#1F7DB3] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none">
                  Send Visit Request ✨
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
