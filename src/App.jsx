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
    <div style={{ minHeight: "100vh", background: "var(--navy)", position: "relative", overflowX: "hidden" }}>
      <SpotlightCursor />

      <div className="layout-container">
        <Sidebar />
        <main style={{ flex: 1, position: "relative", zIndex: 1 }} className="main-content">
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

      <style>{`
        .main-content {
          padding: 0;
          max-width: 100%;
        }
        @media (min-width: 1024px) {
          .main-content {
            margin-left: 50% !important;
            width: 48% !important;
            max-width: 600px !important;
            padding: 6rem 0 6rem 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
