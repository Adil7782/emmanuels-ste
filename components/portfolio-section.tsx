"use client"

import { useState } from "react"
import { ExternalLink, Zap, ArrowUpRight, Sparkles } from "lucide-react"
import { Particles } from "./ui/particles"
import { GradientDivider } from "./ui/section-divider"
import Image from "next/image"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Jetson AI", "Solar Project", "Vender Machine", "Printing Machine"]

  const projects = [
    {
      id: 1,
      title: "Printing Machine",
      category: "Printing Machine",
      image: "/industrial-printing-machine-automation.jpg",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 2,
      title: "Jetson AI System",
      category: "Jetson AI",
      image: "/ai-computer-vision-system-industrial.jpg",
      description: "AI-powered computer vision system",
      tech: ["AI", "Computer Vision", "Jetson"],
    },
    {
      id: 3,
      title: "Smart Vender Machine",
      category: "Vender Machine",
      image: "/smart-vending-machine-iot.jpg",
      description: "IoT-enabled smart vending solution with remote monitoring",
      tech: ["IoT", "Smart Systems", "Remote Control"],
    },
    {
      id: 4,
      title: "Solar Installation Project",
      category: "Solar Project",
      image: "/solar-panel-installation-industrial.jpg",
      description: "Large-scale solar installation with energy management",
      tech: ["Solar", "Energy Management", "Sustainability"],
    },
    {
      id: 5,
      title: "Advanced Printing Solution",
      category: "Printing Machine",
      image: "/advanced-printing-technology.jpg",
      description: "Next-generation printing technology with AI optimization",
      tech: ["AI", "Printing", "Optimization"],
    },
    {
      id: 6,
      title: "Jetson AI System",
      category: "Jetson AI",
      image: "/machine-vision-ai-system.jpg",
      description: "AI-powered computer vision system",
      tech: ["Machine Vision", "AI", "Quality Control"],
    },
    {
      id: 7,
      title: "Printing Machine",
      category: "Printing Machine",
      image: "/print-5.jpg",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 8,
      title: "Solar Installation Project",
      category: "Solar Project",
      image: "/solar-3.jpg",
      description: "Large-scale solar installation with energy management",
      tech: ["Solar", "Energy Management", "Sustainability"],
    },
    {
      id: 9,
      title: "Smart Vender Machine",
      category: "Vender Machine",
      image: "/vendor_machine-3.jpg",
      description: "IoT-enabled smart vending solution with remote monitoring",
      tech: ["IoT", "Smart Systems", "Remote Control"],
    },
    {
      id: 10,
      title: "Solar Installation Project",
      category: "Solar Project",
      image: "/solar-2.jpg",
      description: "Large-scale solar installation with energy management",
      tech: ["Solar", "Energy Management", "Sustainability"],
    },
    {
      id: 11,
      title: "Advanced Printing Solution",
      category: "Printing Machine",
      image: "/print-6.jpg",
      description: "Next-generation printing technology with AI optimization",
      tech: ["AI", "Printing", "Optimization"],
    },
    {
      id: 12,
      title: "Smart Vender Machine",
      category: "Vender Machine",
      image: "/vendor_machine-4.jpg",
      description: "IoT-enabled smart vending solution with remote monitoring",
      tech: ["IoT", "Smart Systems", "Remote Control"],
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="portfolio"
      className="py-24 bg-background relative overflow-hidden"
    >
      <GradientDivider position="top" />

      {/* Modern Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="modern-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#modern-grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary/50"></span>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Our Work
            </span>
            <span className="h-px w-8 bg-primary/50"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            Project <span className="gradient-text">Portfolio</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Explore our innovative solutions delivered to clients across various industries,
            showcasing cutting-edge technology and engineering excellence.
          </p>
        </div>

        {/* Modern Filter Buttons */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 border ${activeFilter === filter
                ? "bg-primary text-primary-foreground shadow-[0_4px_15px_rgba(var(--primary),0.3)] border-transparent"
                : "bg-background/50 backdrop-blur-md text-foreground/80 border-border hover:bg-foreground/5 hover:text-foreground"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Modern Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
              className="group cursor-pointer h-full"
            >
              <div className="h-full flex flex-col glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] w-full bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Modern Overlay CTA */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/20 backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out shadow-lg">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-4 py-1.5 bg-background/80 backdrop-blur-md text-foreground text-xs font-bold uppercase tracking-wider rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-foreground/5 dark:bg-white/5 text-foreground/80 text-xs font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern CTA Section */}
        <div data-aos="fade-up" className="relative mt-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-primary to-accent p-12 lg:p-16 text-center border border-white/10 shadow-[0_20px_50px_rgba(var(--primary),0.3)] group hover:shadow-[0_20px_60px_rgba(var(--primary),0.4)] transition-all duration-700">
            <div className="absolute inset-0 hidden md:block">
              <Particles />
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-background/5 dark:bg-background/20" />
            <div className="absolute inset-0 opacity-20 MixBlendMode-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/20 dark:bg-black/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/30 transform group-hover:rotate-12 transition-transform duration-500">
                <Zap className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to Innovate?
              </h3>

              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
                Transform your ideas into reality with our cutting-edge R&D solutions.
                Let's build the future of your industry together.
              </p>

              <button
                className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span>Start Your Project</span>
                <span className="bg-primary/10 rounded-full p-1.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <GradientDivider position="bottom" />
    </section>
  )
}