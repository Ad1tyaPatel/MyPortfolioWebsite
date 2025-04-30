"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  eraseSpeed?: number;
  eraseDelay?: number;
  typingDelay?: number;
  onComplete?: () => void;
  repeat?: boolean;
  className?: string;
}

export default function TypingEffect({
  text,
  typingSpeed = 100,
  eraseSpeed = 50,
  eraseDelay = 2000,
  typingDelay = 500,
  onComplete,
  repeat = false,
  className = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const repeatRef = useRef(repeat);

  const typeText = useCallback(() => {
    let currentIndex = 0;
    setIsTyping(true);
    setDisplayText("");

    const type = () => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text.charAt(currentIndex));
        currentIndex++;
        timeoutRef.current = setTimeout(type, typingSpeed);
      } else {
        setIsTyping(false);
        setIsComplete(true);
        if (onComplete) onComplete();
        
        if (repeatRef.current) {
          timeoutRef.current = setTimeout(() => {
            eraseText();
          }, eraseDelay);
        }
      }
    };

    timeoutRef.current = setTimeout(type, typingDelay);
  }, [text, typingSpeed, typingDelay, onComplete]);

  const eraseText = useCallback(() => {
    let currentText = text;
    setIsTyping(true);
    setIsComplete(false);

    const erase = () => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setDisplayText(currentText);
        timeoutRef.current = setTimeout(erase, eraseSpeed);
      } else {
        setIsTyping(false);
        timeoutRef.current = setTimeout(() => {
          typeText();
        }, typingDelay);
      }
    };

    timeoutRef.current = setTimeout(erase, eraseDelay);
  }, [text, eraseSpeed, eraseDelay, typingDelay, typeText]);

  useEffect(() => {
    typeText();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typeText]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="ml-1 inline-block w-2 h-5 bg-primary"
        />
      )}
    </div>
  );
} 