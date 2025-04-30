"use client";

import { motion } from "framer-motion";
import Timeline from "../components/timeline";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="min-h-screen py-20 px-4"
    >
      <motion.div
        className="w-full max-w-4xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          My <span className="text-primary">Journey</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Scroll through the key moments that shaped my path in technology and AI.
        </p>
      </motion.div>
      
      <Timeline />
      
      <motion.div
        className="w-full max-w-lg mx-auto mt-12 p-6 rounded-lg glass-effect text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-lg font-medium mb-2">
          "The beautiful thing about learning is that nobody can take it away from you."
        </p>
        <p className="text-muted">— B.B. King</p>
      </motion.div>
    </section>
  );
} 