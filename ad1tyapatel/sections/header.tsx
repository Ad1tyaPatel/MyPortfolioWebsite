"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypingEffect from "../components/typing-effect";

export default function Header() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2">
          <span className="text-primary">Ad1tya</span> Patel
        </h1>
        <h2 className="text-xl sm:text-2xl text-muted font-light">
          AI Engineer <span className="mx-2">•</span> Full-Stack Developer
        </h2>
      </motion.div>
      
      <motion.div
        className="mb-10 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <TypingEffect
          text="Welcome to Ad1tyaVerse – Where Logic Meets Imagination."
          typingSpeed={70}
          className="text-lg sm:text-xl md:text-2xl font-medium"
        />
      </motion.div>
      
      <motion.button
        className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        onClick={() => document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" })}
      >
        Explore My Work
      </motion.button>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showScrollIndicator ? 1 : 0,
          y: showScrollIndicator ? [0, 10, 0] : 0 
        }}
        transition={{ 
          delay: 1,
          duration: 1.5,
          repeat: showScrollIndicator ? Infinity : 0,
          repeatType: "loop"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
} 