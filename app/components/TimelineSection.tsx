"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    period: "2019〜2022",
    org: "N高等学校",
    sub: "バンタンゲームアカデミー高等部 ゲーム制作専攻",
    desc: "ゲームが好きで、本格的にゲーム制作を学ぶ道へ。在学中は学内審査会で最優秀賞を複数回受賞。吉本興業×KADOKAWAの産学連携プロジェクトでも1位を獲得した。",
    tags: ["Unity", "ゲーム制作", "最優秀賞"],
    color: "#818cf8",
  },
  {
    period: "2022〜2023",
    org: "株式会社DeNA",
    sub: "エンジニア職（高卒新卒入社）",
    desc: "高卒で新卒採用を勝ち取り、エンジニアとして入社。研修を経て、ライブ配信サービスIRIAMへ出向。実際のプロダクト開発に携わる経験を積んだ。",
    tags: ["新卒入社", "エンジニア", "プロダクト開発"],
    color: "#a855f7",
  },
  {
    period: "2022〜2023",
    org: "IRIAM（DeNA出向）",
    sub: "Unityエンジニア",
    desc: "ライブ配信サービスのUnityエンジニアとして開発に参加。開発を続けながら「ユーザーが本当に喜ぶとは何か」という問いが強くなり、企画やUX設計への関心が高まった。",
    tags: ["Unity", "iOS/Android", "ライブ配信"],
    color: "#f472b6",
  },
  {
    period: "現在",
    org: "WowMe",
    sub: "Founder / Developer（個人開発）",
    desc: "推しとファンをつなぐ動画メッセージサービス「WowMe」を企画・開発中。サービス設計からMVP開発、LP制作、SNS発信、営業、クラファン準備まで一人で前に進めている。",
    tags: ["個人開発", "サービス企画", "MVP開発", "LP制作"],
    color: "#fb923c",
    current: true,
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-purple-400">
            Career
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            これまでの歩み
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-6 top-0 bottom-0 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, #a855f7, #f472b6, rgba(168,85,247,0.1))",
            }}
          />

          <div className="space-y-12 pl-16">
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  className="absolute -left-[3rem] top-1.5 w-4 h-4 rounded-full border-2 border-[#050510]"
                  style={{ background: ev.color, boxShadow: `0 0 12px ${ev.color}` }}
                />

                <div className="glass rounded-2xl p-6 hover:border-white/15 transition-all group">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${ev.color}20`,
                        color: ev.color,
                        border: `1px solid ${ev.color}40`,
                      }}
                    >
                      {ev.period}
                    </span>
                    {ev.current && (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        現在進行中
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-2">{ev.org}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{ev.sub}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">
                    {ev.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {ev.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full text-gray-400"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
