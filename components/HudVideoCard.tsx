"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HudVideoCard({ src, id, title }: { src: string, id: string, title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  const onEnter = () => {
    setHover(true);
    videoRef.current?.play();
    window.dispatchEvent(new Event("cursor-view-start"));
  };
  const onLeave = () => {
    setHover(false);
    videoRef.current?.pause();
    window.dispatchEvent(new Event("cursor-view-end"));
  };

  return (
    <motion.div 
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      className="relative aspect-[3/4] rounded-xl border border-white/10 overflow-hidden bg-neutral-900"
    >
      <video ref={videoRef} loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none">
        <div className="flex justify-between font-mono text-[10px] text-brand-cyan uppercase">
          <span>[ID: {id}]</span>
          <span className="animate-hud-flicker">● Processing</span>
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg">{title}</h3>
          <p className="font-mono text-[9px] text-neutral-500 mt-2">TEMPORAL_SEED: {Math.random().toString(16).slice(2, 8)}</p>
        </div>
      </div>
      <div className="absolute inset-0 border-[0.5px] border-brand-cyan/20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-cyan/10 animate-scan-line" />
    </motion.div>
  );
}
