import portrait from "../assets/christian.jpg";
import { BookIcon, Butterfly, Eyebrow, Sparkle, Star, Wave } from "./Decor";

const highlights = [
  {
    icon: "🎨",
    color: "#FFD66B",
    title: "Imagination & Creativity",
    text: "A lifelong artist and writer who studied design, visual communications, and fine & studio arts, and once worked as a freelance artist.",
  },
  {
    icon: "🍎",
    color: "#9BD8F4",
    title: "30+ Years in Education",
    text: "Taught grades K, 2 and 4–6, then served as a principal, director of curriculum & assessment, and assistant superintendent.",
  },
  {
    icon: "✍️",
    color: "#A8DDBB",
    title: "Writing Workshops",
    text: "Loves visiting schools to talk about writing and leading writing workshops for teachers and students in grades 4–8.",
  },
];

const facts = [
  ["📍", "Ontario, California"],
  ["🇨🇭", "Swiss-born parents"],
  ["🎓", "Ed.D., Organizational Leadership"],
  ["📚", "Institute of Children's Literature graduate"],
];

export default function About() {
  return (
    <section id="about" className="relative">
      <Wave fill="#E1F3FD" />
      <div className="paper relative overflow-hidden bg-[#E1F3FD] pb-24 pt-10 md:pb-32">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-sky/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-lavender/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-16 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Portrait */}
          <div className="reveal relative mx-auto w-full max-w-[480px] lg:sticky lg:top-28">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-sky" />
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[55%_45%_45%_55%/45%_55%_45%_55%] bg-sun/80" />
            <div className="relative overflow-hidden rounded-[48%_52%_46%_54%/52%_46%_54%_48%] border-8 border-white shadow-2xl">
              <img src={portrait} alt="Portrait of author Christian Kueng" className="aspect-square w-full object-cover object-[50%_25%]" loading="lazy" />
            </div>

            <div className="absolute -bottom-3 left-1/2 w-max -translate-x-1/2 rounded-full bg-white px-5 py-2.5 text-center shadow-lg">
              <p className="font-display text-lg font-semibold leading-none text-midnight">Christian Kueng</p>
              <p className="mt-1 text-xs font-bold text-midnight/55">pronounced “King” · call him “Chris”</p>
            </div>

            <div className="absolute -right-2 top-4 animate-float rounded-3xl bg-midnight p-4 text-ivory shadow-xl md:-right-8">
              <BookIcon className="w-10" />
              <p className="mt-1 font-display text-sm font-semibold">Author & educator</p>
            </div>
            <Butterfly className="absolute -left-4 bottom-24 w-10 animate-flutter" color="#2E9FDB" />
            <Star className="absolute left-10 -top-10 w-10 animate-twinkle" />
          </div>

          {/* Copy */}
          <div>
            <div className="reveal">
              <Eyebrow color="#A8DDBB">About the Author</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-midnight sm:text-5xl lg:text-[3.6rem]">
                Every Great Adventure Begins With a <span className="text-coral">Story.</span>
              </h2>
            </div>

            <blockquote className="reveal relative mt-8 rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-midnight/5">
              <Sparkle className="absolute -left-2 -top-2 w-6" color="#2E9FDB" />
              <p className="font-display text-xl leading-snug text-midnight">
                “I always had a deep desire to write, draw, and create things since I was a child.”
              </p>
              <footer className="mt-3 text-sm font-bold text-midnight/55">Christian “Chris” Kueng</footer>
            </blockquote>

            <div className="reveal mt-7 space-y-4 text-[1.07rem] leading-relaxed text-midnight/80">
              <p>
                My name is <strong className="text-midnight">Christian Kueng</strong> (pronounced King), but everyone calls me “Chris”. I always had a deep
                desire to write, draw, and create things since I was a child. I grew up in Ontario, California, when there were orange groves, grape
                vineyards, and dairies throughout the Southland. My parents, Robert and Margrit Kueng, came from Switzerland, and I am the oldest of
                their four sons.
              </p>
              <p>
                As a youngster I loved going to school. My favorite subjects were art and creative writing. I have several university degrees. I
                studied design and visual communications at Chaffey College and fine and studio arts at the California State University at Fullerton.
                During this time I worked as a freelance artist to supplement my income. I also obtained a master's degree in education from Azusa
                Pacific University, and later added a doctorate in organizational leadership from the University of La Verne. In addition, I am a
                graduate from the Institute of Children's Literature.
              </p>
              <p>
                I have been an educator in the public school system for over thirty years, teaching elementary-school children (grades K, 2, and 4–6)
                and serving as a public school administrator (principal, director of curriculum and assessment, and assistant superintendent).
              </p>
              <p>
                I still live in Ontario where I spend my spare time between my family and my creative hobbies. I enjoy going to schools to talk about
                writing and providing writing workshops for teachers and students (grades 4–8).
              </p>
              <p>
                <em className="text-midnight">“Three Genie Brothers”</em> is my first attempt to write a juvenile fantasy fiction novel, and{" "}
                <em className="text-midnight">“Caleb's Adventures with Granddad”</em> is the first picture book I have done.
              </p>
            </div>

            <div className="reveal mt-8 flex flex-wrap gap-2">
              {facts.map(([i, t]) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-midnight shadow-sm ring-1 ring-midnight/5">
                  <span>{i}</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="relative mx-auto mt-20 grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(38,54,83,0.5)] transition-transform duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 transition-transform duration-700 group-hover:scale-150" style={{ background: h.color }} />
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl text-3xl shadow-inner transition-transform duration-500 group-hover:rotate-12" style={{ background: h.color }}>
                {h.icon}
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-semibold text-midnight">{h.title}</h3>
              <p className="relative mt-3 leading-relaxed text-midnight/70">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Wave fill="#E1F3FD" flip className="bg-ivory" />
    </section>
  );
}
