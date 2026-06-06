import { motion } from "framer-motion";
import { GitFork, Link2, Mail, Code2 } from "lucide-react";
import { personal, navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

const navIds = navLinks.map((n) => n.id);

export default function Sidebar() {
  const active = useActiveSection(navIds);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6rem 0",
        maxWidth: "280px",
        width: "100%",
      }}
    >
      {/* Top — identity */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            style={{
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 700,
              color: "var(--white)",
              lineHeight: 1.1,
              marginBottom: "0.6rem",
              letterSpacing: "-0.02em",
            }}
          >
            {personal.name}
          </h1>
          <h2
            style={{
              fontSize: "clamp(14px,2vw,18px)",
              fontWeight: 500,
              color: "var(--slate-light)",
              marginBottom: "1.25rem",
            }}
          >
            {personal.title}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "var(--slate)",
              lineHeight: 1.7,
              maxWidth: "240px",
            }}
          >
            {personal.tagline}
          </p>
        </motion.div>

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ marginTop: "3rem" }}
        >
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
                padding: "8px 0",
                width: "100%",
                textAlign: "left",
              }}
            >
              <span
                className="nav-indicator"
                style={{ width: active === link.id ? "64px" : "32px" }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: active === link.id ? "var(--white)" : "var(--slate)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </span>
            </button>
          ))}
        </motion.nav>
      </div>

      {/* Bottom — socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
      >
        {[
          { href: personal.github, icon: <GitFork size={20} />, label: "GitHub" },
          { href: personal.linkedin, icon: <Link2 size={20} />, label: "LinkedIn" },
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
              display: "flex",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--green)";
              e.currentTarget.style.transform = "translateY(-2px)";
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
    </aside>
  );
}
