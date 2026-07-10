"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TypewriterText from "@/components/TypewriterText";

export default function Contact() {
  const [status, setStatus] = useState("Idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bc734dc8-283e-443d-a893-c432faf5c84a",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("Idle"), 5000);
      } else {
        setStatus("Error");
        setTimeout(() => setStatus("Idle"), 3000);
      }
    } catch {
      setStatus("Error");
      setTimeout(() => setStatus("Idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted">
              Contact
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                <TypewriterText text="Let's chat" speed={50} delay={200}>
                  <span className="text-accent">!</span>
                </TypewriterText>
              </h2>
              <p className="text-base text-muted leading-relaxed mb-8 max-w-md">
                Got an idea, a project, or just want to say hi? I&apos;d love to hear
                from you. Don&apos;t be shy — drop me a message!
              </p>

              <div className="space-y-6">
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

                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
                    Other Platforms
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://instagram.com/tihulzz_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border hover:border-accent hover:text-accent transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                      <span className="text-xs font-semibold">Instagram</span>
                    </a>
                    <a href="https://discord.gg/7uYHY7frbR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border hover:border-accent hover:text-accent transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                      <span className="text-xs font-semibold">Discord</span>
                    </a>
                    <a href="https://github.com/mvfflin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border hover:border-accent hover:text-accent transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      <span className="text-xs font-semibold">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="your name"
                  />
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
                    value={formData.subject}
                    onChange={handleChange}
                    required
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="send me your message or ideas"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "Submitting"}
                    className="btn-spin group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold bg-foreground text-background rounded-full disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    <span>
                      {status === "Idle" && "Send Message"}
                      {status === "Submitting" && "Sending..."}
                      {status === "Success" && "Message Sent!"}
                      {status === "Error" && "Failed to Send"}
                    </span>
                    {status === "Idle" && (
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
                    )}
                  </button>
                  {status === "Success" && (
                    <p className="mt-4 text-sm text-emerald-500 font-medium">Thank you for reaching out! I&apos;ll get back to you soon.</p>
                  )}
                  {status === "Error" && (
                    <p className="mt-4 text-sm text-red-500 font-medium">Something went wrong. Please try again or email me directly.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-16 pt-8 border-t border-border">
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
                  Available for hire and collaborations.
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
