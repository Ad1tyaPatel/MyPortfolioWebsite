"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const timelineData: TimelineItem[] = [
  {
    year: "2015",
    title: "First Lines of Code",
    description: "Wrote my first program and discovered the world of programming. Started with HTML, CSS, and basic JavaScript.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    year: "2018",
    title: "Computer Science Degree",
    description: "Began studying Computer Science, diving deep into algorithms, data structures, and software engineering principles.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    year: "2020",
    title: "AI Exploration Begins",
    description: "Discovered machine learning and neural networks. Built my first ML models and became fascinated with AI's potential.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Developed a deep learning system for image recognition that won first place in a national competition.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    year: "2022",
    title: "Industry Experience",
    description: "Joined a tech startup as an AI Engineer, working on cutting-edge NLP systems and recommendation algorithms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    year: "Present",
    title: "Innovating & Building",
    description: "Currently focused on creating AI systems that solve real-world problems and push the boundaries of what's possible.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
];

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Create timeline animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    
    // Animate the line
    timeline.to(".timeline-line", {
      height: "100%",
      duration: 1,
      ease: "none",
    });
    
    // Animate each item
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      
      const offset = index / (timelineData.length - 1);
      
      ScrollTrigger.create({
        trigger: item,
        start: "top 75%",
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(item, {
            opacity: 0.5,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
      
      // Update line progress based on scroll
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          if (index < timelineData.length - 1) {
            const progress = self.progress;
            const currentSegment = document.querySelector(`.timeline-segment-${index}`);
            if (currentSegment) {
              gsap.to(currentSegment, {
                height: `${progress * 100}%`,
                duration: 0.1,
              });
            }
          }
        },
      });
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  return (
    <div ref={timelineRef} className="relative py-16 px-4 max-w-4xl mx-auto">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border opacity-30">
        <div className="timeline-line absolute top-0 left-0 w-full bg-primary opacity-80 h-0"></div>
      </div>
      
      {/* Timeline Items */}
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`relative mb-12 ${
            index % 2 === 0 ? "text-right pr-12 md:pr-16" : "text-left pl-12 md:pl-16"
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        >
          {/* Timeline segment (line between points) */}
          {index < timelineData.length - 1 && (
            <div
              className={`timeline-segment-${index} absolute top-10 left-1/2 transform -translate-x-1/2 w-px bg-primary h-0`}
              style={{ top: "2.5rem", height: "calc(100% + 1rem)" }}
            ></div>
          )}
          
          {/* Year Bubble */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10">
            <span className="text-xs font-bold">{item.year}</span>
          </div>
          
          {/* Content Card */}
          <motion.div
            className={`${
              index % 2 === 0
                ? "mr-6 md:mr-8 origin-right"
                : "ml-6 md:ml-8 origin-left"
            } bg-card p-4 rounded-lg shadow-md border border-border relative max-w-sm ${
              index % 2 === 0 ? "float-right" : "float-left"
            }`}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon */}
            <div className="absolute top-4 text-primary">
              {index % 2 === 0 ? (
                <div className="absolute -left-16">{item.icon}</div>
              ) : (
                <div className="absolute -right-16">{item.icon}</div>
              )}
            </div>
            
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-muted text-sm">{item.description}</p>
          </motion.div>
          
          <div className="clear-both"></div>
        </motion.div>
      ))}
    </div>
  );
} 