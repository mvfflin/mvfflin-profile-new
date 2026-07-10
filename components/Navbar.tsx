"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  {
    name: "About",
    href: "#about",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    name: "Skills",
    href: "#skills",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    name: "Experience",
    href: "#experience",
    icon: "M21 13.255A23.93 23.93 0 0112 21c-5.383 0-10.291-2.056-13.95-5.755A23.93 23.93 0 0112 3c5.383 0 10.291 2.056 13.95 5.755zM12 12a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    name: "Contact",
    href: "#contact",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const saved = localStorage.getItem("navbar-collapsed");
    if (saved === "true") {
      setIsDesktopCollapsed(true);
    }
  }, []);

  const toggleDesktopCollapse = (collapsed: boolean) => {
    setIsDesktopCollapsed(collapsed);
    localStorage.setItem("navbar-collapsed", String(collapsed));
  };
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth >= 768) {
        document.body.style.marginLeft = isDesktopCollapsed ? "0px" : "";
      } else {
        document.body.style.marginLeft = "";
      }
    };
    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, [isDesktopCollapsed]);


  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const textMain = "text-black dark:text-white";
  const textMuted = "text-neutral-500 dark:text-neutral-400";
  const hoverBg = "hover:bg-black/5 dark:hover:bg-white/5";
  const activeBg = "bg-black/5 dark:bg-white/10";
  const sidebarBg = scrolled
    ? "bg-white/60 dark:bg-black/60"
    : "bg-white/40 dark:bg-black/20";

  return (
    <>
      {/* Floating Toggle Button when Collapsed (Desktop) */}
      <button
        onClick={() => toggleDesktopCollapse(false)}
        className={`hidden md:flex fixed top-6 left-6 z-[60] w-12 h-12 items-center justify-center rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5 transition-all duration-500 hover:scale-105 shadow-lg ${isDesktopCollapsed ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0 pointer-events-none"}`}
      >
        <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav
        className={`hidden md:flex fixed top-0 left-0 h-full z-50 flex-col items-center py-8 transition-all duration-500 ${sidebarBg} backdrop-blur-xl border-r border-black/5 dark:border-white/5 ${isDesktopCollapsed ? "-translate-x-full w-20 md:w-24" : "translate-x-0 w-20 md:w-24"}`}
      >
        <a href="#" className="mb-6 group">
          <div className="relative">
            <span
              className={`text-3xl font-black tracking-tighter ${textMain} group-hover:text-accent transition-colors duration-300`}
            >
              m
            </span>
            <span className="absolute -top-1 -right-1.5 w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></span>
          </div>
        </a>

        <button
          onClick={() => toggleDesktopCollapse(true)}
          className={`mb-6 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${hoverBg} text-muted hover:text-foreground`}
          title="Collapse Sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`group relative w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? activeBg : ""} ${hoverBg}`}
                onClick={() => setIsOpen(false)}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full"></div>
                )}
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${isActive ? "text-accent" : textMuted} group-hover:text-accent`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d={link.icon}
                  />
                </svg>
                <span
                  className={`text-[9px] md:text-[10px] font-semibold mt-1.5 transition-colors duration-300 ${isActive ? "text-accent" : textMuted} group-hover:text-accent`}
                >
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col items-center gap-3">
          <button
            onClick={(e) => toggleTheme(e)}
            className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl transition-all duration-300 ${hoverBg} group`}
          >
            <svg
              className={`w-5 h-5 transition-all duration-500 text-amber-500 dark:text-amber-400 group-hover:rotate-180 group-hover:text-accent`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isDark ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>

          <a
            href="https://github.com/mvfflin"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl transition-all duration-300 ${hoverBg} group`}
          >
            <svg
              className={`w-5 h-5 transition-colors duration-300 ${textMuted} group-hover:text-accent`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-16 w-full z-40 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${scrolled ? "bg-white/40 dark:bg-black/40" : "bg-transparent"} backdrop-blur-md md:hidden`}
      >
        <span className={`text-sm font-semibold tracking-wider ${textMain}`}>
          mvfflin.
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-64 sm:w-72 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-l border-black/5 dark:border-white/5 flex flex-col items-center py-8`}
          >
            <div className="flex-1 flex flex-col items-center gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`group relative w-20 h-20 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? activeBg : ""} ${hoverBg}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {isActive && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-l-full"></div>
                    )}
                    <svg
                      className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-accent" : textMuted} group-hover:text-accent`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d={link.icon}
                      />
                    </svg>
                    <span
                      className={`text-xs font-semibold mt-1 transition-colors duration-300 ${isActive ? "text-accent" : textMuted} group-hover:text-accent`}
                    >
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-auto flex flex-col items-center gap-3 pb-8">
              <button
                onClick={(e) => toggleTheme(e)}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${hoverBg} group`}
              >
                <svg
                  className={`w-5 h-5 transition-all duration-500 text-amber-500 dark:text-amber-400 group-hover:rotate-180 group-hover:text-accent`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isDark ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              </button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${hoverBg} group`}
              >
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${textMuted} group-hover:text-accent`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
