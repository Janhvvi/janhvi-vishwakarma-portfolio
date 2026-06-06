import { motion } from "framer-motion";
import { Mail, Link2, GitFork, Code2, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: "8rem", textAlign: "center" }}>
      <FadeIn>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--green)",
            fontSize: "14px",
            marginBottom: "1rem",
          }}
        >
          08. What's Next?
        </p>
        <h2
          style={{
            fontSize: "clamp(36px,7vw,64px)",
            fontWeight: 700,
            color: "var(--white)",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            color: "var(--slate)",
            lineHeight: 1.75,
            fontSize: "clamp(14px,2vw,17px)",
          }}
        >
          I'm currently open to backend development, Python/Django engineering, data engineering,
          and AI integration opportunities. Whether you have a question, a project idea, or just
          want to connect — my inbox is open.
        </p>

        <FadeIn delay={0.2}>
          <a href={`mailto:${personal.email}`} className="btn-green" style={{ fontSize: "0.95rem" }}>
            Say Hello ↗
          </a>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "4rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: personal.github, icon: <GitFork size={22} />, label: "GitHub" },
              { href: personal.linkedin, icon: <Link2 size={22} />, label: "LinkedIn" },
              { href: `mailto:${personal.email}`, icon: <Mail size={22} />, label: "Email" },
              { href: personal.leetcode, icon: <Code2 size={22} />, label: "LeetCode" },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: "var(--green)" }}
                style={{
                  color: "var(--slate)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                }}
              >
                {icon}
                {label}
              </motion.a>
            ))}
          </div>
        </FadeIn>
      </FadeIn>

      {/* Footer */}
      <div style={{ marginTop: "5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--slate-dark)",
            lineHeight: 1.8,
          }}
        >
          Designed & Built by{" "}
          <span style={{ color: "var(--green)" }}>Janhvi Vishwakarma</span>
          <br />
          Inspired by Brittany Chiang's design philosophy
        </p>
      </div>
    </section>
  );
}
