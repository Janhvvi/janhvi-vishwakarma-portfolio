import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";
import { useSpotlight } from "./hooks/useSpotlight";

function SpotlightCursor() {
  useSpotlight();
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: "radial-gradient(600px circle at var(--cursor-x, -999px) var(--cursor-y, -999px), rgba(29, 78, 216, 0.12), transparent 80%)",
      }}
    />
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--navy)", position: "relative" }}>
      <SpotlightCursor />

      <div className="layout-container">
        <Sidebar />
        <main className="main-content">
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
    </div>
  );
}
