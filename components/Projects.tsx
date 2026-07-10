"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

const projects = [
  {
    title: "Legends Update",
    description:
      "Mobile Legends human-driven updates information website made by me and maintained by one of my friends.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "UploadThing",
      "React",
    ],
    link: "https://legends-update.vercel.app/",
    status: "live",
    year: 2025,
    featured: true,
    image: "./legends-update.png",
  },
  {
    title: "Room Management",
    description:
      "Room management system with booking queue and approval from administrative roles.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "React",
      "Redis",
    ],
    link: "https://room-management-eta.vercel.app/",
    status: "live",
    year: 2026,
    featured: true,
    image: "./room-management.png",
  },
  {
    title: "Muffin Datastore",
    description:
      "Datastore plugin for a minecraft server that needs their player data to be uploaded into MongoDB database.",
    tags: ["Java", "Spigot", "MongoDB"],
    link: "https://github.com/mvfflin/muffin-datastore/",
    status: "live",
    year: 2025,
    featured: true,
    image: "",
  },
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  const featured = projects.filter((p) => p.featured);
  const archived = projects.filter((p) => !p.featured);

  const filteredFeatured = selectedTag === "All"
    ? featured
    : featured.filter((p) => p.tags.includes(selectedTag));

  const filteredArchived = selectedTag === "All"
    ? archived
    : archived.filter((p) => p.tags.includes(selectedTag));

  // Extract unique tags
  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const statusColor = (s: string) => {
    switch (s) {
      case "live":
        return "bg-emerald-400 dark:bg-emerald-500";
      case "progress":
        return "bg-amber-400 dark:bg-amber-500";
      default:
        return "bg-zinc-400 dark:bg-zinc-600";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent"></div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
              Projects
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              <TypewriterText text="Chosen Projects" speed={45} delay={200}>
                <span className="text-accent">.</span>
              </TypewriterText>
            </h2>
            <p className="text-sm text-muted max-w-sm md:text-right">
              Some of my projects that I am proud of, showcasing my skills.
            </p>
          </div>
        </ScrollReveal>

        {/* Tag Filters */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap gap-2 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${selectedTag === tag
                  ? "bg-accent text-white shadow-md scale-105"
                  : "bg-black/5 dark:bg-white/5 text-foreground/75 hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {filteredFeatured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFeatured.map((project, idx) => (
              <ScrollReveal key={project.title} delay={idx * 120} className="h-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="project-card relative bg-surface border border-border shadow-sm hover:shadow-md rounded-2xl hover:border-accent/40 transition-all duration-500 overflow-hidden flex flex-col h-full">
                    <div className="w-full aspect-video bg-background/50 border-b border-border relative overflow-hidden group-hover:bg-background/80 transition-colors duration-500">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted/30">
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className={`w-2 h-2 rounded-full ${statusColor(project.status)}`}
                            ></span>
                            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted">
                              {project.status} — {project.year}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-semibold text-muted group-hover:text-foreground transition-colors duration-300 shrink-0">
                          <span className="hidden md:inline">Detail</span>
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 17L17 7M17 7H7M17 7v10"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-muted leading-relaxed mb-6 max-w-3xl flex-1 text-sm md:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground bg-black/5 dark:bg-white/10 rounded-md"
                            >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-surface border border-dashed border-border rounded-2xl">
            <p className="text-muted">No projects found for this tag.</p>
          </div>
        )}

        {filteredArchived.length > 0 && (
          <div className="mt-16">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-muted/50"></div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-muted/50">
                  Arsip
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredArchived.map((project, idx) => (
                <ScrollReveal key={project.title} delay={idx * 80}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-surface/50 border border-border/60 shadow-sm hover:shadow-md rounded-xl opacity-60 hover:opacity-100 transition-all duration-400 hover:border-accent/40"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-[11px] font-mono text-muted/60">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted bg-black/5 dark:bg-white/5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
