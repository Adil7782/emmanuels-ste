"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Users } from "lucide-react";
import { GradientDivider } from "./ui/section-divider";

const images = [
  { src: "/team/1.jpeg", isPortrait: false },
  { src: "/team/2.jpeg", isPortrait: false },
  { src: "/team/3.jpeg", isPortrait: true },
  { src: "/team/7.jpeg", isPortrait: false },
  { src: "/team/12.jpeg", isPortrait: true },
  { src: "/team/8.jpeg", isPortrait: false },
  { src: "/team/10.jpeg", isPortrait: false },
  { src: "/team/11.jpeg", isPortrait: false },
  { src: "/team/6.jpeg", isPortrait: false },
  { src: "/team/13.jpeg", isPortrait: false },
  { src: "/team/14.jpeg", isPortrait: false },
  { src: "/team/15.jpeg", isPortrait: false },
  { src: "/team/16.jpeg", isPortrait: false },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="team-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" />
          </svg>
        </div>
      </div>

      <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary/50"></span>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Our People
            </span>
            <span className="h-px w-8 bg-primary/50"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            The talented individuals driving innovation and excellence in every project we undertake.
          </p>
        </div>

        <div className="glass-panel p-4 rounded-[2rem] border border-border">
          <ParallaxScroll images={images} className="w-full" />
        </div>
      </div>

      <GradientDivider position="bottom" />
    </section>
  );
}