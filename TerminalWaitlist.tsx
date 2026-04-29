"use client";
import { useState } from "react";

export default function TerminalWaitlist() {
  const [val, setVal] = useState("");
  return (
    <section className="py-40 px-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-black border border-white/10 rounded-lg p-6 font-mono text-xs">
        <div className="flex gap-2 mb-4 opacity-30">
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
        <p className="text-brand-cyan mb-2">/usr/bin/access --request</p>
        <div className="flex gap-2">
          <span className="text-neutral-600 font-bold">{">"}</span>
          <input 
            className="bg-transparent border-none outline-none w-full text-white placeholder:text-neutral-800"
            placeholder="enter_email_for_early_access..."
            value={val} onChange={(e) => setVal(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
