import { useState } from "react";
import FadeIn from "./FadeIn";
import { personal } from "../data/portfolio";
import { Mail, Check, ExternalLink } from "lucide-react";

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

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="content-section" style={{ paddingBottom: "2rem" }}>
      <div className="sticky-header">
        <h2>Contact</h2>
      </div>

      <FadeIn>
        <h2 className="content-section-label">
          <span>08.</span> Get In Touch
        </h2>
      </FadeIn>

      <FadeIn>
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            fontSize: "15px",
            marginBottom: "24px",
            maxWidth: "640px",
          }}
        >
          I'm currently open to new backend development, Python/Django, data engineering, and AI integration opportunities. Whether you have an open role, an interesting project, or just want to connect — feel free to drop a message!
        </p>

        {/* Contact Links Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {/* Email Row */}
          <div
            className="glass-card"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Mail size={18} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: "14px", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
                {personal.email}
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleCopyEmail}
                className="tag"
                style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                {copied ? (
                  <>
                    <Check size={12} /> Copied!
                  </>
                ) : (
                  "Copy"
                )}
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="tag"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                <span>Compose</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* LinkedIn Row */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <LinkedinIcon size={18} />
              <span style={{ fontSize: "14px", color: "var(--text-primary)" }}>LinkedIn Profile</span>
            </div>
            <span className="tag" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <span>Connect</span>
              <ExternalLink size={11} />
            </span>
          </a>

          {/* GitHub Row */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <GithubIcon size={18} />
              <span style={{ fontSize: "14px", color: "var(--text-primary)" }}>GitHub Profile</span>
            </div>
            <span className="tag" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <span>Follow</span>
              <ExternalLink size={11} />
            </span>
          </a>
        </div>
      </FadeIn>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          paddingTop: "24px",
          borderTop: "1px solid var(--border)",
          fontSize: "12px",
          color: "var(--text-muted)",
          fontFamily: "var(--font-mono)",
          lineHeight: 1.6,
        }}
      >
        <p style={{ margin: 0 }}>
          Engineered & styled by Janhvi Vishwakarma with React & Tailwind CSS. Deployed on Vercel.
        </p>
      </footer>
    </section>
  );
}
