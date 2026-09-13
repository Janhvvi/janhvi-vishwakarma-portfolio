import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";
import FloatingPill from "./components/FloatingPill";
import { useTheme } from "./hooks/useTheme";
import { useSpotlight } from "./hooks/useSpotlight";

function SpotlightCursor() {
  useSpotlight();
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: "radial-gradient(650px circle at var(--cursor-x, -999px) var(--cursor-y, -999px), var(--accent-glow-strong), transparent 80%)",
      }}
    />
  );
}

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Interactive Mouse Spotlight Glowing Effect */}
      <SpotlightCursor />

      {/* Ambient Breathing Background Glow Orb */}
      <div className="orb-container" aria-hidden="true">
        <div className="orb" />
      </div>

      {/* Top-Right Floating Pill (Theme Toggle & Copy Email) */}
      <FloatingPill isDark={isDark} toggleTheme={toggleTheme} />

      {/* Two-Column Profile Layout */}
      <div className="profile-layout">
        <Sidebar />
        <main className="profile-content">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <LeetCode />
          <Contact />
        </main>
      </div>
    </div>
  );
}
