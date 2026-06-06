import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal, navLinks } from "../data/portfolio";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          background: "rgba(10,25,47,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(100,255,218,0.05)",
        }}
      >
        <span style={{ color: "var(--green)", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
          JV
        </span>
        <button
          onClick={() => setOpen(true)}
          style={{ background: "none", border: "none", color: "var(--green)", cursor: "pointer" }}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "none",
                border: "none",
                color: "var(--green)",
                cursor: "pointer",
              }}
            >
              <X size={28} />
            </button>

            <div style={{ textAlign: "center" }}>
              <p style={{ color: "var(--slate)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", marginBottom: "2.5rem" }}>
                {personal.name}
              </p>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      display: "block",
                      background: "none",
                      border: "none",
                      color: "var(--white)",
                      fontSize: "clamp(20px,5vw,26px)",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "0.6rem 0",
                      width: "100%",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white)")}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
