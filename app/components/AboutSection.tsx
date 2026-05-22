"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { icon: "🎮", label: "ゲーム制作で\n最優秀賞受賞" },
  { icon: "🏢", label: "DeNA → IRIAM\nエンジニア就職" },
  { icon: "⚡", label: "Unity開発\n実務経験" },
  { icon: "🚀", label: "WowMe\n個人開発中" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-purple-400">
            About
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            山本涼太について
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p>
              学生時代とにかくゲームが好きで、バンタンゲームアカデミー高等部でゲーム制作を学びました。
              在学中に学内審査会で最優秀賞を4回連続で受賞し過去最多記録になりました。
              また、吉本興業×KADOKAWAの産学連携プロジェクトでは1位を獲得。
              実際にアニメの公式サイトに自分たちが作ったゲームが掲載されました。
            </p>
            <p>
              高校卒業後、DeNAにエンジニアとして入社。研修を経てIRIAMへ出向し、
              Unityエンジニアとして実際のサービス開発に携わりました。
              開発を続けるうちに「どうすればユーザーが本当に喜ぶのか」という視点が
              どんどん大切になってきて、企画やサービス設計への関心も強くなっていきました。
            </p>
            <p>
              現在は、友人が推しからのパーソナライズ動画メッセージを受け取って
              涙を流して喜んでいるのを見た経験をきっかけに、
              「WowMe」というサービスを個人で企画から開発、MVP制作、SNS発信、営業まで、一人で前に進めています。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass rounded-2xl p-6 flex flex-col gap-3 cursor-default"
              >
                <span className="text-3xl">{h.icon}</span>
                <p className="text-sm text-gray-300 font-medium whitespace-pre-line leading-relaxed">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
