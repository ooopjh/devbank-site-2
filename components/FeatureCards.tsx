"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Card({ title, text }: { title: string, text: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x);
  const sy = useSpring(y);
  const bg = useTransform([sx, sy], ([vx, vy]) => `radial-gradient(300px circle at ${vx}px ${vy}px, rgba(0, 245, 255, 0.1), transparent)`);

  return (
    <motion.div 
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set(e.clientX - r.left); y.set(e.clientY - r.top); }}
      className="relative p-10 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ background: bg }} />
      <h3 className="relative z-10 text-2xl font-bold mb-4">{title}</h3>
      <p className="relative z-10 text-neutral-500 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      <Card title="Temporal Locking" text="Advanced anchoring for generative video stability." />
      <Card title="Neural Physics" text="Injecting real-world gravity into diffusion models." />
    </section>
  );
}
