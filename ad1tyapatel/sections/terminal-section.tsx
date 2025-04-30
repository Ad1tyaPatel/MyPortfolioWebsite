"use client";

import { motion } from "framer-motion";
import Terminal from "../components/terminal";

export default function TerminalSection() {
  return (
    <section 
      id="terminal" 
      className="min-h-screen py-20 flex flex-col items-center justify-center px-4"
    >
      <motion.div
        className="w-full max-w-3xl mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Inside My <span className="text-primary">Command Center</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Type commands to interact with my portfolio. Try <span className="font-mono text-primary">help</span> to see what's available!
        </p>
      </motion.div>
      
      <Terminal />
      
      <motion.div
        className="mt-12 text-center text-sm text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>Pro tip: Try <span className="font-mono text-primary">sudo hire aditya</span> for a special surprise!</p>
      </motion.div>
    </section>
  );
} 