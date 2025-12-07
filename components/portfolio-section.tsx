"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Zap, ArrowUpRight, Sparkles } from "lucide-react"

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
      description: "AI-powered computer vision system for quality control",
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
      title: "AI Vision System",
      category: "Jetson AI",
      image: "/machine-vision-ai-system.jpg",
      description: "Machine vision system for automated quality inspection",
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
      className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="modern-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#modern-grid)" className="text-primary"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-primary to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Project Portfolio
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our innovative solutions delivered to clients across various industries, 
            showcasing cutting-edge technology and engineering excellence.
          </p>
        </div>

        {/* Modern Filter Buttons */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Modern Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-xl shadow-xl dark:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Modern Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-medium">View Project</span>
                        <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
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
        <div data-aos="fade-up" className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-cyan-500 p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="white" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Innovate?
              </h3>
              
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Transform your ideas into reality with our cutting-edge R&D solutions. 
                Let's build the future of your industry together.
              </p>
              
              <button
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Start Your Project
                <ArrowUpRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}