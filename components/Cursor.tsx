"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [type, setType] = useState("default");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    const start = () => setType("view");
    const end = () => setType("default");

    window.addEventListener("mousemove", move);
    window.addEventListener("cursor-view-start", start);
    window.addEventListener("cursor-view-end", end);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor-view-start", start);
      window.removeEventListener("cursor-view-end", end);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: type === "view" ? 80 : 12,
        height: type === "view" ? 80 : 12,
        backgroundColor: "#00F5FF",
        mixBlendMode: type === "view" ? "difference" : "normal",
      }}
    >
      {type === "view" && (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-black font-mono text-[10px] font-bold">VIEW</motion.span>
      )}
    </motion.div>
  );
}
