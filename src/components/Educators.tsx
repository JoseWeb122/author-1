import { useState } from "react";
import { Eyebrow, Sparkle, Wave } from "./Decor";

/** Set `file` to a real URL/path to enable downloads. "" = coming soon. */
const resources = [
  { icon: "🖍️", color: "#FFD66B", title: "Activity Packs", text: "Puzzles, mazes and draw-your-own-adventure pages for each story.", file: "" },
  { icon: "💬", color: "#2E9FDB", title: "Discussion Guides", text: "Thoughtful questions about feelings, friendship and big ideas.", file: "" },
  { icon: "🎨", color: "#A8DDBB", title: "Coloring Pages", text: "Printable character sheets that bring the illustrations home.", file: "" },
  { icon: "🔊", color: "#B7D3F6", title: "Read-Aloud Tips", text: "Voices, pauses and props for unforgettable storytimes.", file: "" },
];

const links = ["Early literacy", "Social-emotional learning", "Vocabulary building", "Creative writing", "Nature & science", "Art & drawing"];

const faqs = [
  ["Are the classroom resources free?", "Yes. All educator resources will be free to download for classroom, library and homeschool use."],
  ["Who are the books written for?", "The picture books are designed for young children and are wonderful to share across generations, while Christian's writing workshops serve students in grades 4–8."],
  ["Can I read the books aloud on a virtual class?", "Please get in touch via the contact form for read-aloud permissions; we're happy to help educators share stories."],
  ["Do you offer bulk orders for schools?", "Bulk and school orders can be arranged. Send a message with your quantities and we'll follow up."],
];

export default function Educators() {
  const [open, setOpen] = useState<number | null>(0);
  const [toast, setToast] = useState<string | null>(null);

  const download = (title: string, file: string) => {
    if (file) {
      window.open(file, "_blank", "noopener");
      return;
    }
    setToast(`${title} are coming soon. Check back shortly!`);
    window.setTimeout(() => setToast(null), 2800);
  };

  return (
    <section id="educators" className="relative">
      <Wave fill="#D6EEFB" />
      <div className="paper relative overflow-hidden bg-[#D6EEFB] pb-24 pt-10 md:pb-32">
        <div className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-sky/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow color="#2E9FDB">For Educators & Librarians</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-midnight sm:text-5xl lg:text-6xl">
              Classroom Magic, <span className="text-[#1F7DB3]">Ready to Go</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-midnight/70">
              Free, thoughtfully designed resources that help teachers, librarians and homeschool families extend every
              story into meaningful, playful learning.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((r, i) => (
              <div
                key={r.title}
                className="reveal group relative flex flex-col overflow-hidden rounded-[2rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(38,54,83,0.45)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-1deg]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-2" style={{ background: r.color }} />
                <span className="grid h-16 w-16 place-items-center rounded-[1.25rem] text-3xl transition-transform duration-500 group-hover:scale-110" style={{ background: `${r.color}66` }}>
                  {r.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-midnight/70">{r.text}</p>
                <button
                  onClick={() => download(r.title, r.file)}
                  className="mt-6 flex items-center justify-between rounded-full bg-ivory px-5 py-2.5 text-sm font-extrabold text-midnight ring-1 ring-midnight/10 transition hover:bg-midnight hover:text-ivory"
                >
                  {r.file ? "Download PDF" : "Coming soon"}
                  <span>{r.file ? "↓" : "⏳"}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="reveal rounded-[2rem] bg-midnight p-8 text-ivory sm:p-10">
              <Sparkle className="w-8" color="#FFD66B" />
              <h3 className="mt-4 font-display text-3xl font-semibold">Curriculum connections</h3>
              <p className="mt-3 text-ivory/70">Each story is designed with natural links to early-years learning goals.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {links.map((l, i) => (
                  <span key={l} className="rounded-full px-4 py-2 text-sm font-bold text-midnight" style={{ background: ["#FFD66B", "#9BD8F4", "#A8DDBB", "#D4EDFB", "#B7D3F6", "#2E9FDB"][i] }}>
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal space-y-3">
              {faqs.map(([q, a], i) => (
                <div key={q} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-midnight/5">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-semibold"
                  >
                    {q}
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sun text-lg transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <p className="overflow-hidden px-6 text-midnight/70">
                      <span className="block pb-5">{a}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {toast && (
          <div className="fade-in fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-midnight px-6 py-3 font-bold text-ivory shadow-2xl" role="status">
            ⏳ {toast}
          </div>
        )}
      </div>
      <Wave fill="#D6EEFB" flip className="bg-ivory" />
    </section>
  );
}
