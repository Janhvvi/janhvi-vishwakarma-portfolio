import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";
import { personal, navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

function GithubIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar">
      {/* Top section: Branding & Nav */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 48px)",
              fontWeight: 700,
              color: "var(--white)",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
              letterSpacing: "-0.02eM",
            }}
          >
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
              {personal.name}
            </a>
          </h1>
          <h2
            style={{
              fontSize: "clamp(16px, 3vw, 20px)",
              fontWeight: 500,
              color: "var(--white)",
              marginBottom: "1rem",
            }}
          >
            {personal.title}
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--slate)",
              lineHeight: 1.6,
              maxWidth: "320px",
              margin: 0,
            }}
          >
            {personal.tagline}
          </p>
        </motion.div>

        {/* Desktop Navigation (Hidden on mobile) */}
        <nav className="desktop-nav" style={{ marginTop: "4rem" }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-item ${active === link.id ? "active" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px 0",
                width: "fit-content",
                textAlign: "left",
              }}
            >
              <span
                className="nav-indicator"
                style={{
                  width: active === link.id ? "64px" : "32px",
                  height: "1px",
                  backgroundColor: active === link.id ? "var(--white)" : "var(--slate-dark)",
                  transition: "all 0.2s ease-in-out",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: "700",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: active === link.id ? "var(--white)" : "var(--slate)",
                  transition: "color 0.2s ease-in-out",
                }}
              >
                {link.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom section: Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "2rem" }}
      >
        {[
          { href: personal.github, icon: <GithubIcon size={20} />, label: "GitHub" },
          { href: personal.linkedin, icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
          { href: `mailto:${personal.email}`, icon: <Mail size={20} />, label: "Email" },
          { href: personal.leetcode, icon: <Code2 size={20} />, label: "LeetCode" },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: "var(--slate)",
              transition: "color 0.2s, transform 0.2s",
              display: "inline-flex",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--green)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--slate)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {icon}
          </a>
        ))}
      </motion.div>

      <style>{`
        .sidebar {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 4rem 0 2rem 0;
          width: 100%;
        }
        .desktop-nav {
          display: none;
        }
        @media (min-width: 1024px) {
          .sidebar {
            position: sticky;
            top: 0;
            height: 100vh;
            padding: 6rem 0;
            width: 45%;
            min-width: 280px;
            max-width: 400px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .desktop-nav {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </aside>
  );
}
