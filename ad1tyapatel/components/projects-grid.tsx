"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { Project } from "./project-card";

// Sample project data
const projects: Project[] = [
  {
    id: "neural-network-visualizer",
    title: "Neural Network Visualizer",
    description: "An interactive web application for visualizing neural networks and their training process, with real-time feedback and customizable architecture.",
    image: "/images/projects/neural-network.jpg",
    category: ["AI", "Web"],
    technologies: ["React", "TensorFlow.js", "Three.js", "TypeScript"],
    githubUrl: "https://github.com/ad1tyapatel/neural-network-visualizer",
    liveUrl: "https://neural-visualizer.ad1tyapatel.com",
  },
  {
    id: "sentiment-analysis-api",
    title: "Sentiment Analysis API",
    description: "A robust NLP API for sentiment analysis of text data, supporting multiple languages and providing detailed emotional context beyond basic positive/negative classification.",
    image: "/images/projects/sentiment-analysis.jpg",
    category: ["AI", "Backend"],
    technologies: ["Python", "FastAPI", "Hugging Face", "Docker"],
    githubUrl: "https://github.com/ad1tyapatel/sentiment-analysis-api",
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio",
    description: "A modern, animated developer portfolio website with interactive elements, dark mode, and 3D visualizations. Built with Next.js and TailwindCSS.",
    image: "/images/projects/portfolio.jpg",
    category: ["Web", "Frontend"],
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Three.js"],
    githubUrl: "https://github.com/ad1tyapatel/portfolio",
    liveUrl: "https://ad1tyapatel.com",
  },
  {
    id: "code-assistant",
    title: "AI Code Assistant",
    description: "A VS Code extension that provides intelligent code completion, refactoring suggestions, and documentation generation powered by large language models.",
    image: "/images/projects/code-assistant.jpg",
    category: ["AI", "Tools"],
    technologies: ["TypeScript", "VS Code API", "OpenAI API", "Node.js"],
    githubUrl: "https://github.com/ad1tyapatel/code-assistant",
    liveUrl: "https://marketplace.visualstudio.com/code-assistant",
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation",
    description: "An IoT system for home automation with machine learning capabilities for predicting user preferences and optimizing energy usage.",
    image: "/images/projects/smart-home.jpg",
    category: ["AI", "IoT"],
    technologies: ["Python", "TensorFlow", "Raspberry Pi", "MQTT"],
    githubUrl: "https://github.com/ad1tyapatel/smart-home",
  },
  {
    id: "image-generation-app",
    title: "AI Image Generator",
    description: "A web application that generates images from text descriptions using state-of-the-art AI models, with options for style customization.",
    image: "/images/projects/image-generator.jpg",
    category: ["AI", "Web"],
    technologies: ["React", "Stable Diffusion", "FastAPI", "AWS"],
    githubUrl: "https://github.com/ad1tyapatel/image-generator",
    liveUrl: "https://image-gen.ad1tyapatel.com",
  },
];

// Get all unique categories from projects
const allCategories = ["All", ...Array.from(new Set(projects.flatMap(project => project.category)))];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [mounted, setMounted] = useState(false);

  // Set mounted state to true on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter projects based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.category.includes(activeCategory))
      );
    }
  }, [activeCategory]);

  // If not mounted yet, return a placeholder
  if (!mounted) return null;

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allCategories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-card border border-border hover:bg-border"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
} 