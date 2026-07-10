"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorColor?: string;
  children?: React.ReactNode;
}

export default function TypewriterText({
  text,
  speed = 60,
  delay = 0,
  className = "",
  cursorColor,
  children,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);


  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);


  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          setIsDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, text, speed, delay]);

  return (
    <span ref={ref} className={`typewriter-text ${className}`}>
      {displayedText}
      {!isDone && (
        <span
          className={`typewriter-cursor ${isTyping ? "typing" : ""}`}
          style={cursorColor ? { borderColor: cursorColor } : undefined}
        />
      )}
      {isDone && children}
    </span>
  );
}
