"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 300);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none"
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(255,255,255,0.3)"
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      aria-label="Scroll to top"
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path d="M18 15l-6-6-6 6" />
      </motion.svg>
    </motion.button>
  );
}

