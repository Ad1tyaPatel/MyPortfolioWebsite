"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import TypingEffect from "./typing-effect";

type CommandResult = {
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-focus the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isProcessing) return;
    
    setIsProcessing(true);
    
    // Process command
    const command = input.trim().toLowerCase();
    processCommand(command);
    
    // Clear input
    setInput("");
  };

  const processCommand = (command: string) => {
    let output: React.ReactNode;
    
    switch (command) {
      case "help":
        output = (
          <div className="mt-2 text-muted">
            <p>Available commands:</p>
            <ul className="list-disc list-inside ml-2 mt-1">
              <li>about - Learn about Aditya</li>
              <li>projects - View my projects</li>
              <li>resume - Download my resume</li>
              <li>blog - Read my blog posts</li>
              <li>contact - Get in touch</li>
              <li>sudo hire aditya - Take the next step</li>
              <li>clear - Clear the terminal</li>
              <li>help - Show available commands</li>
            </ul>
          </div>
        );
        break;
        
      case "about":
        output = (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 p-4 rounded-md bg-card text-card-foreground"
          >
            <h3 className="text-lg font-bold mb-2">About Aditya Patel</h3>
            <p className="mb-2">
              AI Engineer and Full-Stack Developer passionate about building intelligent systems and beautiful interfaces.
            </p>
            <p>
              With expertise in machine learning, neural networks, and web development,
              I create solutions that combine cutting-edge AI with elegant user experiences.
            </p>
          </motion.div>
        );
        break;
        
      case "projects":
        output = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-muted"
          >
            <p>Navigating to projects section...</p>
            <p className="text-xs mt-1">
              (Use the projects section below for a more interactive experience)
            </p>
          </motion.div>
        );
        
        // Scroll to projects section after a delay
        setTimeout(() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          setIsProcessing(false);
        }, 1500);
        break;
        
      case "resume":
        output = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2"
          >
            <a 
              href="/aditya-patel-resume.pdf" 
              download
              className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/80 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download Resume
            </a>
          </motion.div>
        );
        break;
        
      case "blog":
        output = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-muted"
          >
            <p>Navigating to blog section...</p>
          </motion.div>
        );
        
        // Scroll to blog section after a delay
        setTimeout(() => {
          document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
          setIsProcessing(false);
        }, 1500);
        break;
        
      case "contact":
        output = (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-muted"
          >
            <p>Navigating to contact section...</p>
          </motion.div>
        );
        
        // Scroll to contact section after a delay
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          setIsProcessing(false);
        }, 1500);
        break;
        
      case "sudo hire aditya":
        output = (
          <motion.div 
            className="mt-2 p-4 rounded-md bg-accent/20 border border-accent text-foreground"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: [0.9, 1.05, 1],
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-2 text-accent">Access Granted! 🚀</h3>
            <p className="mb-2">
              Congratulations on making an excellent decision!
            </p>
            <p className="mb-3">
              Let's discuss how my skills can help your team build the next big thing.
            </p>
            <div className="flex justify-end">
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-3 py-1.5 rounded-md bg-accent text-white hover:bg-accent/80 transition-colors text-sm"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        );
        break;
        
      case "clear":
        setHistory([]);
        output = null;
        setIsProcessing(false);
        return;
        
      default:
        output = (
          <p className="mt-2 text-red-500">
            Command not found: {command}. Type 'help' to see available commands.
          </p>
        );
    }
    
    // Add command to history
    setHistory(prev => [...prev, { command, output }]);
    
    // Reset processing state
    setTimeout(() => {
      setIsProcessing(false);
    }, 500);
  };

  return (
    <motion.div 
      className="w-full max-w-3xl h-96 md:h-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="p-3 bg-card border-b border-border flex items-center">
        <div className="flex space-x-2 mr-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm font-medium">aditya@ad1tyaverse: ~/portfolio</span>
      </div>
      
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-card"
      >
        {/* Welcome message */}
        <div className="text-primary font-semibold mb-2">
          Welcome to Ad1tyaVerse Terminal v1.0.0
        </div>
        <p className="text-muted mb-4">
          Type 'help' to see available commands.
        </p>
        
        {/* Command history */}
        {history.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center">
              <span className="text-primary">$ </span>
              <span className="ml-1">{item.command}</span>
            </div>
            {item.output}
          </div>
        ))}
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-primary">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            disabled={isProcessing}
            className="flex-1 ml-1 bg-transparent outline-none border-none"
            aria-label="Terminal input"
          />
        </form>
      </div>
    </motion.div>
  );
} 