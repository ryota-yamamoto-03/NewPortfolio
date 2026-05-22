"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "X (Twitter)",
    icon: "𝕏",
    href: "https://x.com/mirai3_ai",
    desc: "@mirai3_ai",
  },
  {
    label: "GitHub",
    icon: "⌨️",
    href: "https://github.com/ryota-yamamoto-03",
    desc: "ryota-yamamoto-03",
  },
  {
    label: "Mail",
    icon: "✉️",
    href: "mailto:ryota.yamamoto03@gmail.com",
    desc: "ryota.yamamoto03@gmail.com",
  },
];

const topics = [
  "転職・採用のご相談",
  "業務委託・副業",
  "プロダクト開発の相談",
  "推し活領域のコラボ",
  "WowMeへのフィードバック",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-purple-400">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            話しましょう
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            転職・採用のご相談から、プロダクト開発の相談、
            推し活領域でのコラボまで、お気軽にご連絡ください。
          </p>
        </motion.div>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {topics.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="text-sm px-4 py-2 rounded-full text-gray-300 border border-white/8"
              style={{ background: "rgba(168,85,247,0.08)" }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="glass rounded-2xl p-6 flex flex-col items-center gap-3 group hover:border-purple-500/30 transition-colors"
            >
              <span className="text-3xl">{link.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm">{link.label}</p>
                <p className="text-gray-600 text-xs mt-0.5">{link.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-24 text-gray-700 text-xs"
      >
        © 2026 Ryota Yamamoto. All rights reserved.
      </motion.div>
    </section>
  );
}
