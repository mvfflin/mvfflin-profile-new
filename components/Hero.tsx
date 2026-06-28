"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,59,0,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,90,46,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-accent"></div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
                Hi, I'm mvfflin, or my real name-
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-2 text-foreground leading-[0.9]">
              Fatih<span className="text-accent">.</span>
            </h1>
            <h2 className="mb-8 text-lg font-semibold dark:bg-zinc-700 text-foreground bg-zinc-200 w-max px-2 rounded">
              Fatihul Ihsan Ramadhan
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg md:text-2xl font-medium text-foreground/90 mb-4 tracking-tight">
              Full Stack Developer - Content Creator - Tech Enthusiast
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-14 max-w-xl">
              A dedicated person who is passionate about technology and
              programming, always eager to learn and grow in the field of
              software development.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="btn-spin group inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-foreground text-background rounded-full"
              >
                <span className="flex items-center gap-2">
                  Projects
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-10 py-4 text-sm font-semibold text-foreground border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-foreground/30 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
