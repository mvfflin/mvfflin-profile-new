"use client";

import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import CountUp from "@/components/CountUp";

const stats = [
  {
    value: "~6",
    label: "Years experience",
    desc: "Starts coding since 2020"
  },
  {
    value: "+10",
    label: "Projects",
    desc: "I have worked on"
  }
  // {
  //   value: "20+",
  //   label: "Proyek Selesai",
  //   desc: "Dari konsep hingga deployed",
  // },
  // { value: "15+", label: "Klien Puas", desc: "Kepercayaan yang berkelanjutan" },
  // { value: "10+", label: "Teknologi", desc: "Toolset yang dikuasai" },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent"></div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
                  About myself
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5 leading-tight">
                <TypewriterText text="Everything starts with a curiosity" speed={35} delay={200}>
                  <span className="text-accent">.</span>
                </TypewriterText>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4 text-muted leading-relaxed text-base">
                <p>
                  I&apos;m 18 years old, currently being a college student majoring
                  in Informatics Engineering at Institut Teknologi Sepuluh
                  Nopember. I have a strong passion for programming and
                  technology, which has driven me to continuously learn and grow
                  in the field of software development.
                </p>
                <p>
                  I started my programming journey in 2020, when i was curious
                  about how a game works. Then I tried to learn how to modify a
                  game which now has evolved into a passion to be a full stack
                  developer.
                </p>
                <p>
                  I have experience working on various projects, from small
                  personal projects to larger collaborative ones, which has
                  helped me develop a strong foundation in both frontend and
                  backend development.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.value} delay={index * 100}>
                <div className="group p-5 lg:p-6 bg-surface border border-border shadow-sm hover:shadow-md rounded-2xl hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-500 hover-lift">
                  <p className="text-3xl lg:text-4xl font-bold tracking-tighter text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
