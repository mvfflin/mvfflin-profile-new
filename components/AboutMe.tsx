"use client";

import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  {
    value: "2+",
    label: "Years Experience",
    desc: "Building softwares since 2024",
  },
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
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
                  About myself
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight">
                Everything starts with a curiosity
                <span className="text-accent">.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-5 text-muted leading-relaxed text-base">
                <p>
                  I'm 18 years old, currently being a college student majoring
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
                <div className="group p-6 lg:p-8 bg-surface border border-border rounded-2xl hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-500 hover-lift">
                  <p className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {stat.value}
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
