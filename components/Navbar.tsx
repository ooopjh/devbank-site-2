"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-tighter">DEVBANK_AI</span>
        </div>
        <div className="hidden md:flex gap-6 text-[11px] uppercase tracking-widest text-neutral-400">
          {["Research", "Temporal", "Vision"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <button className="text-[11px] font-bold px-4 py-1.5 bg-white text-black rounded-full uppercase">Access</button>
      </nav>
    </motion.header>
  );
}
