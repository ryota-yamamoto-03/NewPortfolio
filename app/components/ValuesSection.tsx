"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: "❤️",
    title: "ユーザーの感情を起点に考える",
    desc: "「便利か」より「感動するか」。機能よりも、そのサービスを使ったときに何を感じてほしいかから考え始める。",
    gradient: "from-pink-500/20 to-transparent",
  },
  {
    icon: "⚡",
    title: "小さく作って、早く試す",
    desc: "完璧なものを目指して止まるより、動くものを素早く届けてフィードバックを得ることを優先する。",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    icon: "🔨",
    title: "自分の手で前に進める",
    desc: "「誰かがやってくれる」を待たない。企画も、開発も、営業も、まず自分でやってみる。",
    gradient: "from-indigo-500/20 to-transparent",
  },
  {
    icon: "🎁",
    title: "モノではなく体験を届ける",
    desc: "人が本当に喜ぶのは、物そのものではなく、そこにある感情や体験だと思っている。",
    gradient: "from-pink-400/20 to-transparent",
  },
  {
    icon: "🌟",
    title: "推し活文化をもっと面白くする",
    desc: "推しとファンの関係性は、まだもっと豊かにできる。そのためのプロダクトを作り続けたい。",
    gradient: "from-amber-500/20 to-transparent",
  },
];

export default function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="values" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-purple-400">
            Values
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            大切にしていること
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative glass rounded-2xl p-6 overflow-hidden group cursor-default ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b ${v.gradient} opacity-50 group-hover:opacity-80 transition-opacity`}
              />
              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
