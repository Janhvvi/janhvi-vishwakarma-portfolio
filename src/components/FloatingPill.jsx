import { useState } from "react";
import { User, Sun, Moon, Mail, Check } from "lucide-react";
import { personal } from "../data/portfolio";

export default function FloatingPill({ isDark, toggleTheme }) {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pill-wrapper">
      <div className="pill">
        {/* Profile / Scroll to Top */}
        <div className="pill-item-wrapper">
          <button className="pill-btn pill-btn--active" onClick={scrollToTop} aria-label="Scroll to top">
            <User size={18} />
          </button>
          <span className="pill-tooltip">Top</span>
        </div>

        <div className="pill-divider" />

        {/* Dark / Light Mode Toggle */}
        <div className="pill-item-wrapper">
          <button
            className="pill-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <span className="pill-tooltip">{isDark ? "Light Mode" : "Dark Mode"}</span>
        </div>

        <div className="pill-divider" />

        {/* Copy Email */}
        <div className="pill-item-wrapper">
          <button className="pill-btn" onClick={handleCopyEmail} aria-label="Copy Email">
            {copied ? <Check size={18} style={{ color: "var(--accent)" }} /> : <Mail size={18} />}
          </button>
          <span className="pill-tooltip">{copied ? "Copied!" : "Copy Email"}</span>
        </div>
      </div>
    </div>
  );
}
