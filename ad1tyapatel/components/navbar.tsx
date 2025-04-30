"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  const sections = [
    { id: "home", label: "Home" },
    { id: "terminal", label: "Terminal" },
    { id: "timeline", label: "Timeline" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  // Update navigation visibility based on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 glass-effect px-6 py-3 rounded-full"
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: hidden ? 100 : 0,
        opacity: hidden ? 0 : 1 
      }}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex items-center space-x-6">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === section.id
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(section.id);
              }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
} 