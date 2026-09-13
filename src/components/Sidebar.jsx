import { motion } from "framer-motion";
import { Mail, Code2, FileText } from "lucide-react";
import { personal, navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

function GithubIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navIds = navLinks.map((n) => n.id);

export default function Sidebar() {
  const active = useActiveSection(navIds);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="profile-sidebar">
      <div className="sidebar-inner">
        {/* Top: Identity */}
        <div className="sidebar-identity">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h1 className="sidebar-name">
              <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
                Janhvi<br />Vishwakarma
              </a>
            </h1>
            <p className="sidebar-role">{personal.title}</p>
            <p className="sidebar-bio">{personal.tagline}</p>
          </motion.div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`sidebar-nav-item ${isActive ? "sidebar-nav-item--active" : ""}`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  <span className="sidebar-nav-line" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Resume & Social */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Resume Button */}
          <a
            href={personal.resume && personal.resume !== "#" ? personal.resume : "mailto:janhvivish10@gmail.com?subject=Resume%20Request%20-%20Janhvi%20Vishwakarma"}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            aria-label="View or Request Janhvi's Resume"
          >
            <FileText size={15} />
            <span>View Resume</span>
          </a>

          {/* Social Icons */}
          <div className="sidebar-social">
            {[
              { href: personal.github, icon: <GithubIcon size={18} />, label: "GitHub" },
              { href: personal.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
              { href: personal.leetcode, icon: <Code2 size={18} />, label: "LeetCode" },
              { href: `mailto:${personal.email}`, icon: <Mail size={18} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="sidebar-social-link"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
