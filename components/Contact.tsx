"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
              Contact
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Let's discuss<span className="text-accent">.</span>
              </h2>
              <p className="text-base text-muted leading-relaxed mb-12 max-w-md">
                I'm open to new opportunities, collaborations, or maybe just a
                chat about tech and programming. Feel free to reach out!
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:mynameisfatihul@gmail.com"
                    className="text-lg font-semibold text-foreground hover:text-accent transition-colors duration-300"
                  >
                    mynameisfatihul@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-2">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Bekasi & Surabaya, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="your email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-3"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="what to discuss?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="send me your message or ideas"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    className="btn-spin group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold bg-foreground text-background rounded-full"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-28 pt-10 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-sm text-muted">
                Created with love by{" "}
                <span className="text-foreground font-semibold">mvfflin</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs text-muted font-semibold tracking-widest uppercase">
                  Available for collborations or hiring.
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
