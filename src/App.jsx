import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";
import FloatingPill from "./components/FloatingPill";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Ambient Radial Glow Orb */}
      <div className="orb-container" aria-hidden="true">
        <div className="orb" />
      </div>

      {/* Floating Action Pill (Top, Dark/Light Mode, Copy Email) */}
      <FloatingPill isDark={isDark} toggleTheme={toggleTheme} />

      {/* Two-Column Profile Layout */}
      <div className="profile-layout">
        <Sidebar />
        <main className="profile-content">
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
