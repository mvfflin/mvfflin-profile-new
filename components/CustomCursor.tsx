'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouse);
    const raf = requestAnimationFrame(animate);

    const onHover = () => {
      dot.style.transform += ' scale(2.5)';
      ring.style.transform += ' scale(1.5)';
      ring.style.borderColor = 'var(--accent)';
    };
    const onLeave = () => {
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      ring.style.borderColor = 'var(--foreground)';
    };

    window.addEventListener('mousedown', onHover);
    window.addEventListener('mouseup', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mousedown', onHover);
      window.removeEventListener('mouseup', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" style={{ left: '0', top: '0' }} />
      <div ref={ringRef} className="cursor-ring hidden md:block" style={{ left: '0', top: '0' }} />
    </>
  );
}
