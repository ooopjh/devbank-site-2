"use client";
import React, { useState, useRef } from "react";

export default function TemporalSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent | React.TouchEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    setPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <section id="temporal" className="py-32 px-6 max-w-6xl mx-auto">
      <div ref={ref} onMouseMove={move} className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-neutral-800">
           <img src="/baseline-sample.jpg" className="w-full h-full object-cover grayscale opacity-40" />
        </div>
        <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
           <img src="/devbank-sample.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 bottom-0 z-20 w-px bg-brand-cyan" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-brand-cyan bg-black/80 backdrop-blur shadow-[0_0_20px_rgba(0,245,255,0.4)]" />
        </div>
      </div>
    </section>
  );
}
