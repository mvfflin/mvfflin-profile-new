"use client";

import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import CountUp from "@/components/CountUp";
import Image from "next/image";

const stats = [
  {
    value: "~6",
    label: "Years coding",
    desc: "Started messing with code in 2020",
  },
  {
    value: "+10",
    label: "Projects built",
    desc: "From small experiments to real apps",
  }
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
                  About me
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
                  I&apos;m an 18-year-old college student studying Informatics Engineering
                  at <span className="text-foreground font-medium inline-flex items-center gap-2">Institut Teknologi Sepuluh Nopember <Image src="/its-logo.png" alt="ITS Logo" width={80} height={20} className="h-5 w-auto object-contain dark:brightness-200" draggable={false} /></span>.
                  I build fast, seamless, efficient, and stable web experiences from front to back.
                  Whether you need a website, an app, or just want to explore with me, feel free to reach out!
                </p>
                <p>
                  Also check out my friend which started our coding journey together since 2020.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <a href="https://willis.my.id" target="_blank" rel="noopener noreferrer" className="mt-8 p-4 rounded-xl bg-surface border border-border shadow-sm flex cursor-pointer items-center gap-4 hover:border-accent/40 hover:shadow-md transition-all duration-300 w-fit pr-8 group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">@wls_rhtmn</p>
                  <p className="text-[11px] text-muted font-medium">Building and exploring together since 2020</p>
                </div>
              </a>
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
