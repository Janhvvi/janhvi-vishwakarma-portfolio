import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";

function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  useEffect(() => {
    const h = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(100,255,218,0.04), transparent 40%)`,
        transition: "background 0.1s ease",
      }}
    />
  );
}

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--navy)", position: "relative" }}>
      <SpotlightCursor />

      {isMobile ? (
        <>
          <MobileHeader />
          <main style={{ padding: "6rem 1.5rem 0", maxWidth: "700px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Blog />
            <Certifications />
            <LeetCode />
            <Contact />
          </main>
        </>
      ) : (
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "4rem",
            padding: "0 6rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Sidebar />
          <main style={{ padding: "6rem 0" }}>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Blog />
            <Certifications />
            <LeetCode />
            <Contact />
          </main>
        </div>
      )}
    </div>
  );
}
