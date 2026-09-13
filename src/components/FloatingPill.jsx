import { useState } from "react";
import { Sun, Moon, Mail, Check } from "lucide-react";
import { personal } from "../data/portfolio";

export default function FloatingPill({ isDark, toggleTheme }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pill-wrapper">
      <div className="pill">
        {/* Dark / Light Mode Toggle */}
        <div className="pill-item-wrapper">
          <button
            className="pill-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <span className="pill-tooltip">{isDark ? "Light Mode" : "Dark Mode"}</span>
        </div>

        <div className="pill-divider" />

        {/* Copy Email */}
        <div className="pill-item-wrapper">
          <button className="pill-btn" onClick={handleCopyEmail} aria-label="Copy Email">
            {copied ? <Check size={17} style={{ color: "var(--accent)" }} /> : <Mail size={17} />}
          </button>
          <span className="pill-tooltip">{copied ? "Copied!" : "Copy Email"}</span>
        </div>
      </div>
    </div>
  );
}
