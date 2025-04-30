"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div className="w-full h-80 relative perspective-1000 cursor-pointer">
      <motion.div
        className={`w-full h-full relative preserve-3d transition-all duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border bg-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={handleFlip}
        >
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-6 w-full">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs py-1 px-2 rounded-full bg-primary/80 text-white"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <div className="flex items-center text-white/80 text-sm">
                  <span>Click to view details</span>
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-border bg-card p-6 flex flex-col justify-between"
          onClick={handleFlip}
        >
          <div>
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-muted text-sm mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs py-1 px-2 rounded-full bg-accent/20 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-card hover:bg-card/80 border border-border transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12C22 6.477 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </Link>
            )}
            
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-primary text-white hover:bg-primary/80 transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </Link>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 