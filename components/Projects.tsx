"use client";

import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Legends Update",
    description:
      "Mobile Legends human-driven updates information website made by me and maintained by one of my friends.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "UploadThing", "React"],
    link: "https://legends-update.vercel.app/",
    status: "live",
    year: 2025,
    featured: true,
  }, {
    title: "Room Management",
    description:
      "Room management system with booking queue and approval from administrative roles.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React", "Redis"],
    link: "https://room-management-eta.vercel.app/",
    status: "live",
    year: 2026,
    featured: true,
  },

];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const archived = projects.filter((p) => !p.featured);

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
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
              Projects
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Chosen Projects<span className="text-accent">.</span>
            </h2>
            <p className="text-sm text-muted max-w-sm md:text-right">
              Some of my projects that I am proud of, showcasing my skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6">
          {featured.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 120}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="project-card relative p-8 md:p-10 bg-surface border border-border rounded-2xl hover:border-muted/40 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`w-2 h-2 rounded-full ${statusColor(project.status)}`}
                        ></span>
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted">
                          {project.status} — {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-muted group-hover:text-foreground transition-colors duration-300">
                      <span>Lihat detail</span>
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
                  <p className="text-muted leading-relaxed mb-8 max-w-3xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-semibold tracking-wide text-foreground bg-background border border-border rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {archived.length > 0 && (
          <div className="mt-28">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-muted/50"></div>
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-muted/50">
                  Arsip
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {archived.map((project, idx) => (
                <ScrollReveal key={project.title} delay={idx * 80}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-surface/50 border border-border/60 rounded-xl opacity-60 hover:opacity-100 transition-all duration-400 hover:border-muted/40"
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
                          className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted bg-background/80 border border-border/60 rounded-md"
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
