"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number; // in ms
}

export default function CountUp({ value: rawValue, duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse the raw value, e.g. "~6" => prefix: "~", num: 6, suffix: ""
  const match = rawValue.match(/^([^\d]*)(\d+)([^\d]*)$/);
  const isParsable = !!match;
  const prefix = match ? match[1] : "";
  const endValue = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!isParsable) return;
    const el = elementRef.current;
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
  }, [hasStarted, isParsable]);

  useEffect(() => {
    if (!isParsable || !hasStarted) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutQuad
      const easeProgress = progress * (2 - progress);
      
      const currentValue = Math.floor(easeProgress * endValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, endValue, duration, isParsable]);

  if (!isParsable) {
    return <span>{rawValue}</span>;
  }

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
