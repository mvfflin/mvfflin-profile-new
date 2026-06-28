"use client";

import ScrollReveal from "@/components/ScrollReveal";

const skills = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Python (Backend)", level: 75 },
  { name: "PostgreSQL / MongoDB", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
                Tech Stacks
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              My tech stacks<span className="text-accent">.</span>
            </h2>
            <p className="text-base text-muted mb-14">
              List of technologies and tools that I have experience with.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 80}>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-foreground tracking-wide">
                      {skill.name}
                    </span>
                    <span className="text-muted font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="flex flex-wrap gap-3 mt-16">
              {["Java (Minecraft)", "Lua (Roblox)", "Github"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="tag-rotate px-5 py-2.5 text-sm font-semibold text-foreground bg-background border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
