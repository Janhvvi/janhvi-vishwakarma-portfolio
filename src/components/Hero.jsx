import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "4rem",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--green)",
          fontSize: "clamp(14px,3vw,16px)",
          marginBottom: "1.5rem",
        }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          fontSize: "clamp(40px,8vw,80px)",
          fontWeight: 700,
          color: "var(--white)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        {personal.name}.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          fontSize: "clamp(30px,6vw,65px)",
          fontWeight: 700,
          color: "var(--slate)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          margin: "0.25rem 0 0 0",
        }}
      >
        I build scalable backends.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{
          maxWidth: "520px",
          marginTop: "1.5rem",
          fontSize: "clamp(15px,2vw,18px)",
          lineHeight: 1.7,
          color: "var(--slate)",
        }}
      >
        I'm a backend developer specializing in{" "}
        <span style={{ color: "var(--green)" }}>Python</span>,{" "}
        <span style={{ color: "var(--green)" }}>Django</span>, and{" "}
        <span style={{ color: "var(--green)" }}>Data Engineering</span>. I build secure, scalable
        enterprise APIs, ETL pipelines, and AI-powered backend systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}
      >
        <a
          href={personal.resume}
          className="btn-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Résumé ↗
        </a>
        <a href={`mailto:${personal.email}`} className="btn-green">
          Get In Touch
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ marginTop: "5rem" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{
            width: "24px",
            height: "40px",
            border: "2px solid var(--slate-dark)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              background: "var(--green)",
              borderRadius: "2px",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
