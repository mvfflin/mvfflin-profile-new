"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import Image from "next/image";

const FloatingShapes = dynamic(() => import("./FloatingShapes"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

const skills = [
  {
    name: "JavaScript / TypeScript",
    level: 95,
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    ],
  },
  {
    name: "React / Next.js",
    level: 90,
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js", className: "dark:invert" },
    ],
  },
  {
    name: "Node.js",
    level: 85,
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    ],
  },
  {
    name: "Tailwind CSS",
    level: 90,
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
    ],
  },
  {
    name: "Python (Backend)",
    level: 75,
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python" },
    ],
  },
  {
    name: "PostgreSQL / MongoDB",
    level: 70,
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface relative overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
                Tech Stacks
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              <TypewriterText text="Tools I work with" speed={40} delay={200}>
                <span className="text-accent">.</span>
              </TypewriterText>
            </h2>
            <p className="text-base text-muted mb-10">
              These are the technologies I use daily and feel comfortable with.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 80}>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="flex items-center gap-2.5 text-foreground tracking-wide">
                      <span className="flex items-center gap-1.5">
                        {skill.icons.map((icon) => (
                          <Image
                            key={icon.alt}
                            src={icon.src}
                            alt={icon.alt}
                            title={icon.alt}
                            width={20}
                            height={20}
                            className={`w-4 h-4 md:w-5 md:h-5 ${icon.className || ""}`}
                          />
                        ))}
                      </span>
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
            <div className="flex flex-wrap gap-3 mt-10">
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
              <span className="px-5 py-2.5 text-sm text-muted italic cursor-default">
                ...and still exploring
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
