"use client";

import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import TypewriterRotator from "@/components/TypewriterRotator";
import Image from "next/image";

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
            "radial-gradient(circle at 25% 25%, rgba(99,102,241,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99,102,241,0.3) 0%, transparent 50%)",
        }}
      />


      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-silhouette absolute -right-6 md:right-0 top-0 md:top-auto md:bottom-0 w-[85vw] md:w-[550px] lg:w-[650px] h-[80vh] md:h-[700px] lg:h-[800px] max-w-[450px] md:max-w-none"
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, black 15%), linear-gradient(to right, transparent 0%, black 20%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, black 15%), linear-gradient(to right, transparent 0%, black 20%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <Image
            src="/myself.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 550px, 650px"
            className="object-cover object-top select-none"
            draggable={false}
            priority
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-3 mb-5">
              <p className="text-sm font-medium text-muted">
                I&apos;m <span className="text-foreground font-semibold">mvfflin</span>, or my real name-
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-2 text-foreground leading-[0.9]">
              <TypewriterText text="Fatih" speed={100} delay={200}>
                <span className="text-accent">.</span>
              </TypewriterText>
            </h1>
            <h2 className="mb-5 text-lg font-semibold dark:bg-zinc-700 text-foreground bg-zinc-200 inline-block max-w-full px-2 rounded break-words">
              Fatihul Ihsan Ramadhan
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg md:text-2xl font-medium text-foreground/90 mb-4 tracking-tight min-h-[1.75rem] md:min-h-[2rem]">
              <TypewriterRotator
                texts={["Full Stack Developer", "Content Creator", "Tech Enthusiast"]}
                typingSpeed={50}
                deletingSpeed={30}
                delayBetweenTexts={2000}
              />
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-xl">
              I love turning ideas into real things on the internet. Whether it&apos;s
              a web app, a game plugin, or just a fun side project — if it involves
              code, I&apos;m probably excited about it. ☕
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
                  Contact Me <svg
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
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-foreground/30 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
