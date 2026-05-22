"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Product & UX",
    color: "#a855f7",
    skills: [
      { name: "Product Planning", level: 80, note: "企画〜MVPまで自走" },
      { name: "UX Thinking", level: 75, note: "ユーザー視点の設計" },
      { name: "LP Design", level: 70, note: "改善・A/Bテスト経験" },
    ],
  },
  {
    category: "Engineering",
    color: "#818cf8",
    skills: [
      { name: "Unity", level: 75, note: "実務経験あり（IRIAM）" },
      { name: "Supabase", level: 60, note: "バックエンド構築" },
      { name: "Vercel", level: 65, note: "デプロイ・運用" },
    ],
  },
  {
    category: "Growth & Ops",
    color: "#f472b6",
    skills: [
      { name: "SNS Marketing", level: 65, note: "X/InstagramでのSNS発信" },
      { name: "Talent Outreach", level: 70, note: "タレント集客・営業" },
      { name: "Claude Code", level: 80, note: "AI活用開発" },
    ],
  },
];

const tags = [
  "サービス企画", "MVP開発", "Unity", "Supabase", "Vercel",
  "Claude Code", "SNS発信", "LP改善", "タレント集客", "UX設計",
  "No-code / Low-code", "ユーザーインタビュー", "クラファン準備",
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-purple-400">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            できること
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            ※ レベルは相対的な目安です。まだ成長途中のものも含みます。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-6"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + gi * 0.15 + si * 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}88)`,
                          boxShadow: `0 0 8px ${group.color}60`,
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{skill.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="text-sm px-4 py-2 rounded-full text-gray-300 cursor-default border border-white/8"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
