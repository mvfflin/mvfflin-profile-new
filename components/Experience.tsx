"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";
import Image from "next/image";

const experiences = [
  {
    logo: "",
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

const education = [
  {
    title: "Institut Teknologi Sepuluh Nopember",
    company: "Informatics Engineering (Teknik Informatika)",
    period: "2026 - Present",
    description: "Currently pursuing a bachelor's degree in Informatics Engineering. Learning about software engineering, data structures, algorithms, and advanced programming concepts. Admitted throught the SNBT (Seleksi Nasional Berdasarkan Tes) pathway",
    logo: "/its-logo.png"
  },
  {
    logo: "/sman5.png",
    title: "SMAN 5 Kota Bekasi",
    company: "Senior High School",
    period: "2023 - 2026",
    description: "Passed the provincial stage of the National Science Olympiad (OSN), served as Vice President of the ICT Club, acted as Head Organizer for CINOTIC (a sub-event of FESTIFIVE), participated in hockey competitions, and developed a program beneficial to the school."
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"journey" | "education">("journey");

  const activeData = activeTab === "journey" ? experiences : education;

  return (
    <section id="experience" className="py-20 bg-surface overflow-hidden">
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
          <p className="text-base text-muted mb-8 max-w-xl">
            Every experience shaped who I am as a developer. Here&apos;s what I&apos;ve been up to.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => setActiveTab("journey")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "journey"
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                : "bg-background border border-border text-muted hover:text-foreground hover:border-muted/40"
                }`}
            >
              Journey
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "education"
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                : "bg-background border border-border text-muted hover:text-foreground hover:border-muted/40"
                }`}
            >
              Education
            </button>
          </div>
        </ScrollReveal>

        <div className="relative mt-8 md:mt-10">
          {/* Vertical line for all devices */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent"></div>

          <div className="flex flex-col gap-8 md:gap-10 pb-8">
            {activeData.map((item, index) => (
              <ScrollReveal key={`${activeTab}-${index}`} delay={index * 150}>
                <div className="relative flex flex-row gap-6 md:gap-8 group">
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 w-[30px] h-[30px] rounded-full bg-background border border-border flex items-center justify-center transition-colors duration-300 group-hover:border-accent/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 max-w-2xl">
                    <div className="p-6 md:p-8 bg-background border border-border rounded-2xl hover:border-muted/40 transition-all duration-500 hover:shadow-[0_0_40px_-20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_60px_-20px_rgba(255,255,255,0.08)]">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/40 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                          </span>
                          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted font-mono">
                            {item.period}
                          </p>
                        </div>
                        {item.logo && (
                          <div className="shrink-0 h-8 w-auto flex items-center justify-center bg-background/50 rounded-md p-1">
                            <Image src={item.logo} alt={`${item.company} logo`} width={80} height={64} className="h-9 w-auto object-contain dark:brightness-200" draggable={false} />
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-foreground/70 mb-4 tracking-wide">
                        {item.company}
                      </p>
                      <p className="text-sm md:text-base text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
