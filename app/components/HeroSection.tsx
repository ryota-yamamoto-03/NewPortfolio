"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function FloatingOrb({
  style,
}: {
  style: React.CSSProperties;
}) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={style}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: Math.random() * 4 + 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = ["#f472b6", "#a855f7", "#818cf8", "#60a5fa"];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-pink-950/20" />

      {/* Orbs */}
      <FloatingOrb
        style={{
          width: 400,
          height: 400,
          top: "-10%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
        }}
      />
      <FloatingOrb
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)",
        }}
      />
      <FloatingOrb
        style={{
          width: 300,
          height: 300,
          top: "40%",
          left: "60%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block text-sm font-medium tracking-widest text-purple-400 border border-purple-500/30 rounded-full px-4 py-1.5 glass">
            Product Creator / WowMe Founder
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="gradient-text glow-text">推しとファンの距離を、</span>
          <br />
          <span className="text-white">プロダクトで近づける。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          山本涼太です。Unityでの開発経験を出発点に、現在は推しとファンをつなぐ
          動画メッセージサービス「WowMe」を企画・開発しています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #a855f7, #f472b6)",
            }}
          >
            <span className="relative z-10">WowMeを見る</span>
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)",
              }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white glass border border-white/10 hover:border-purple-500/40 transition-colors"
          >
            お問い合わせ
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-purple-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
