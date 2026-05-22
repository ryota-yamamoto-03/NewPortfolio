"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Career" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 80);
  });

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div
        className={`mx-4 sm:mx-auto sm:max-w-5xl transition-all duration-500 ${
          menuOpen
            ? "border border-white/8"
            : scrolled
            ? "glass border border-white/8"
            : ""
        }`}
        style={menuOpen ? { background: "#000" } : undefined}
      >
        <div className="flex items-center justify-between px-6 py-2">
          <a
            href="#hero"
            className="text-white font-bold text-lg tracking-tight"
          >
            <span className="gradient-text">RY</span>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-semibold text-white px-4 py-2 rounded-full"
              style={{ background: "linear-gradient(135deg, #a855f7, #f472b6)" }}
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-current mb-1.5 origin-center"
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-px bg-current mb-1.5"
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-current origin-center"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-6 pb-5 pt-2 border-t border-white/8 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-gray-400 hover:text-white py-2.5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
