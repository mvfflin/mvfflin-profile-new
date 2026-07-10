"use client";

import { useEffect, useState } from "react";

interface TypewriterRotatorProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  cursorColor?: string;
}

export default function TypewriterRotator({
  texts,
  typingSpeed = 60,
  deletingSpeed = 40,
  delayBetweenTexts = 2000,
  className = "",
  cursorColor,
}: TypewriterRotatorProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeedState(deletingSpeed);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeedState(typingSpeed);
      }

      if (!isDeleting && displayedText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        return;
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeedState(typingSpeed);
        // Small pause before typing the next word
        timer = setTimeout(() => {}, 500);
        return;
      }
      
      timer = setTimeout(handleType, typingSpeedState);
    };

    timer = setTimeout(handleType, typingSpeedState);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, delayBetweenTexts, typingSpeedState]);

  // Determine if cursor should blink (when paused) or be solid (when typing/deleting)
  const isPaused = !isDeleting && displayedText === texts[loopNum % texts.length];

  return (
    <span className={`typewriter-text ${className}`}>
      {displayedText}
      <span
        className={`typewriter-cursor ${!isPaused ? "typing" : ""}`}
        style={cursorColor ? { borderColor: cursorColor } : undefined}
      />
    </span>
  );
}
