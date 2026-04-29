"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const words = "CINEMATIC INTELLIGENCE".split(" ");
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover grayscale opacity-60">
        <source src="/pilot-ad.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
      <motion.h1 
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
        className="relative z-20 flex gap-4 md:gap-8 flex-wrap justify-center text-center px-4"
      >
        {words.map((w, i) => (
          <motion.span 
            key={i}
            variants={{
              hidden: { opacity: 0, filter: "blur(20px)", y: 20 },
              visible: { opacity: 1, filter: "blur(0px)", y: 0 }
            }}
            transition={{ duration: 1.5, ease: [0.2, 0, 0.2, 1] }}
            className="text-5xl md:text-9xl font-sans font-bold tracking-tighter"
          >
            {w}
          </motion.span>
        ))}
      </motion.h1>
    </section>
  );
}
