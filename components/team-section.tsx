"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Users } from "lucide-react";
import { GradientDivider } from "./ui/section-divider";

const images = [
  { src: "/team/1.jpeg", isPortrait: false },
  { src: "/team/2.jpeg", isPortrait: false },
  { src: "/team/3.jpeg", isPortrait: true }, // Varied for visual interest, change as needed
  // { src: "/team/5.jpeg", isPortrait: false },
  // { src: "/team/4.jpeg", isPortrait: false },
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


  // { src: "/team/9.jpeg", isPortrait: false },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="team-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" className="text-primary" />
          </svg>
        </div>
      </div>

      <div className="w-full relative z-10">
        <div className="text-center mb-10 px-4">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full mb-6">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div> */}

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-primary to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The talented individuals driving innovation and excellence in every project we undertake.
          </p>
        </div>

        <ParallaxScroll images={images} className="w-full" />
      </div>

      <GradientDivider position="top" />
    </section>
  );
}