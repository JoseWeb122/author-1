import Header, { NAV } from "./components/Header";
import Hero from "./components/Hero";
import Books from "./components/Books";
import About from "./components/About";
import Visits from "./components/Visits";
import Educators from "./components/Educators";
import Contact, { Newsletter } from "./components/Contact";
import Footer from "./components/Footer";
import { Sparkle } from "./components/Decor";
import { useActiveSection, useRevealAll } from "./hooks/useReveal";

const IDS = NAV.map((n) => n.id);
const WORDS = ["Imagine", "Discover", "Read Aloud", "Dream Big", "Make Friends", "Explore", "Wonder", "Create"];

function Ribbon() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative z-10 -my-6 rotate-[-1.5deg] overflow-hidden bg-midnight py-4 shadow-xl" aria-hidden="true">
      <div className="flex w-max animate-[ribbon_40s_linear_infinite] gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold text-ivory">
            {w}
            <Sparkle className="h-5 w-5" color={["#FFD66B", "#2E9FDB", "#A8DDBB", "#B7D3F6"][i % 4]} />
          </span>
        ))}
      </div>
      <style>{`@keyframes ribbon { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

export default function App() {
  const active = useActiveSection(IDS);
  useRevealAll();

  return (
    <div className="min-h-screen bg-ivory">
      <a href="#books" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:font-bold">
        Skip to books
      </a>
      <Header active={active} />
      <main>
        <Hero />
        <Ribbon />
        <Books />
        <About />
        <Visits />
        <Educators />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
