import FadeIn from "./FadeIn";
import { personal } from "../data/portfolio";
import { Mail, Code2 } from "lucide-react";

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

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: "6rem", paddingTop: "2rem" }}>
      <div className="sticky-header">
        <h2>Contact</h2>
      </div>

      <FadeIn>
        <div style={{ textAlign: "left", maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 32px)",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              color: "var(--slate)",
              lineHeight: 1.625,
              fontSize: "14px",
              marginBottom: "2rem",
            }}
          >
            I'm currently open to new backend development, Python/Django, data engineering, or AI integration opportunities. Whether you have a project idea, a question, or just want to connect — feel free to drop a message!
          </p>

          <a href={`mailto:${personal.email}`} className="btn-green" style={{ padding: "0.75rem 1.75rem", fontSize: "0.85rem" }}>
            Say Hello
          </a>
        </div>
      </FadeIn>

      {/* Social links (visible on mobile only) */}
      <div className="footer-socials">
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
              transition: "color 0.2s",
              display: "inline-flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--slate)")}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Footer credits */}
      <footer
        style={{
          marginTop: "6rem",
          fontSize: "12px",
          color: "var(--slate-dark)",
          lineHeight: 1.6,
          fontFamily: "var(--font-mono)",
        }}
      >
        <p style={{ margin: 0 }}>
          Loosely designed in Figma and coded in VS Code by Janhvi Vishwakarma. Built with React and Tailwind CSS, deployed with Vercel.
        </p>
      </footer>

      <style>{`
        .footer-socials {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-top: 4rem;
        }
        @media (min-width: 1024px) {
          .footer-socials {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
