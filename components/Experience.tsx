"use client";

import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

const experiences = [
  {
    title: "Developing Minecraft Servers",
    company: "Several Minecraft Server Companies",
    period: "2020 - Present",
    description:
      "Developing seamless and stable minecraft server for a large scale community with continuous updates and unique plugins.",
  },
  {
    title: "Developed Simple Web Apps",
    company: "Self-learn",
    period: "2022 - 2024",
    description: "This is where I explored basic web development and started building simple applications. It laid the foundation for my journey as a developer."
  },
  {
    title: "Freelancing",
    company: "Local Businesses and Mutuals",
    period: "2024 - Present",
    description: "Freelancing as a web developer for local businesses and my friends. Creating complex websites and web applications for their needs."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
              Experience
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            <TypewriterText text="My journey so far" speed={50} delay={200}>
              <span className="text-accent">.</span>
            </TypewriterText>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-base text-muted mb-12 max-w-xl">
            Every experience shaped who I am as a developer. Here&apos;s what I&apos;ve been up to.
          </p>
        </ScrollReveal>

        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent transform -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-accent/60 to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div
                  className={`relative flex flex-col md:flex-row md:items-stretch ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}
                  >
                    <div className="group relative">
                      <div className="p-6 bg-background border border-border rounded-2xl hover:border-muted/40 transition-all duration-500 hover:shadow-[0_0_40px_-20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_60px_-20px_rgba(255,255,255,0.08)]">
                        <div
                          className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                        >
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/40 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                          </span>
                          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-mono">
                            {exp.period}
                          </p>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold text-foreground/70 mb-4 tracking-wide">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {index > 0 && (
                        <div
                          className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? "-right-[2.35rem]" : "-left-[2.35rem]"} -translate-y-1/2 w-3 h-3 rounded-full bg-background border border-border`}
                        ></div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`hidden md:block md:w-2/12 relative ${index % 2 === 0 ? "" : ""}`}
                  >
                    <div className="absolute left-1/2 top-8 -translate-x-1/2"></div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
