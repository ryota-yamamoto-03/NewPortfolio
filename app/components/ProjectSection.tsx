"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  "サービス企画",
  "MVP開発",
  "LP制作 / 改善",
  "タレント集客",
  "SNS発信",
  "クラウドファンディング準備",
  "ユーザー体験設計",
];

const features = [
  {
    icon: "🎬",
    title: "パーソナライズ動画",
    desc: "名前を呼んでもらえる、世界に一つだけの動画メッセージ",
  },
  {
    icon: "🎂",
    title: "特別な瞬間に",
    desc: "誕生日・記念日・サプライズ・応援など、大切なシーンで使える",
  },
  {
    icon: "💸",
    title: "タレント還元率最大80%",
    desc: "運営手数料20%、タレントへ最大80%還元を目指す設計",
  },
  {
    icon: "✨",
    title: "モノではなく体験",
    desc: "物質的な贈り物ではなく、感動体験そのものを届ける",
  },
];

export default function ProjectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-purple-400">
            Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            つくっているもの
          </h2>
        </motion.div>

        {/* Main project card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -6 }}
          className="relative rounded-3xl overflow-hidden glass border border-white/10 group cursor-default"
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(244,114,182,0.08))",
              }}
            />
          </div>

          {/* Light reflection */}
          <motion.div
            className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
            }}
          />

          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💌</span>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">WowMe</h3>
                    <p className="text-sm text-purple-400 mt-0.5">
                      開発中 / 個人プロジェクト
                    </p>
                  </div>
                </div>

                <p className="text-xl text-white font-medium mb-4">
                  推しとファンをつなぐ、パーソナライズ動画メッセージサービス
                </p>

                <p className="text-gray-400 leading-relaxed mb-8">
                  好きなタレントに動画メッセージを依頼でき、
                  名前を呼んでもらえる世界に一つだけの体験を届けるサービスです。
                  誕生日・記念日・サプライズなど、感動が生まれる瞬間に寄り添います。
                  友人が推しからの動画を受け取って泣いて喜んでいた姿が、
                  このサービスを作るきっかけになりました。
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex gap-3 p-4 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      <span className="text-2xl shrink-0">{f.icon}</span>
                      <div>
                        <p className="text-white text-sm font-semibold">{f.title}</p>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                    担当範囲
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((r, i) => (
                      <motion.span
                        key={r}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        className="text-xs px-3 py-1.5 rounded-full border border-purple-500/30 text-purple-300"
                        style={{ background: "rgba(168,85,247,0.08)" }}
                      >
                        {r}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
