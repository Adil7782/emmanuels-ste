"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Cpu, Network, Shield, Activity, ChevronRight, Play } from "lucide-react"
import { useEffect } from "react"

export default function HeroSection() {


  const scrollToContact = (link:string) => {
    const element = document.querySelector(`#${link}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden flex items-center">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="professional-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#professional-grid)" />
          </svg>
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" data-aos="fade-in" data-aos-duration="2000" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="500" />
        
        {/* Corner accent lines */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-blue-400/30" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-blue-400/30" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-blue-400/30" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-blue-400/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/80 border border-blue-400/30 rounded-full backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-200 text-sm font-medium">Award-Winning R&D Since 2009</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-white drop-shadow-lg">Emmanuel's</span>
                <span className="block text-cyan-400 drop-shadow-lg">Lanka</span>
              </h1>
              
              <div className="space-y-4">
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" data-aos="width-expand" data-aos-delay="600" />
                <p className="text-xl lg:text-2xl font-medium text-slate-200 leading-relaxed">
                  Industrial R&D • IoT Solutions • Smart Manufacturing
                </p>
              </div>
            </div>

            {/* Description */}
            <p 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Since 2009, our multidisciplinary team of <span className="font-semibold text-cyan-400">engineers and consultants</span> has 
              delivered innovative <span className="font-semibold text-blue-300">IoT and automation solutions</span> for Sri Lankan 
              manufacturing sectors including <span className="font-semibold text-cyan-400">Retail, RMG, and Poultry industries</span>.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="500">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "200+", label: "Projects Delivered" },
                { value: "Multiple", label: "Awards Won" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="600">

              <Button
                size="lg"
                onClick={()=>scrollToContact("services")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25 group"
              >
                Start Your Innovation Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:border-slate-500 px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-200 hover:scale-105 group bg-transparent"
                onClick={()=>scrollToContact("portfolio")}

              >
                View Our Projects
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

            </div>
          </div>

          {/* Right Content - Properly Aligned Service Cards */}
          <div className="flex flex-col h-full justify-center">
            <div className="space-y-4">
              {[
                {
                  icon: Factory,
                  title: "Industrial Equipment R&D",
                  description: "Custom robotics machines and equipment development for manufacturing optimization across multiple industries.",
                  features: ["Robotics Design", "Equipment Development", "Process Automation"],
                  delay: "700"
                },
                {
                  icon: Network,
                  title: "IoT & Digitization Solutions",
                  description: "Scientific self-learning algorithms using enterprise data to optimize production and business processes.",
                  features: ["Smart Products", "Data Analytics", "Process Optimization"],
                  delay: "800"
                },
                {
                  icon: Cpu,
                  title: "Industry-Specific Solutions",
                  description: "Specialized management tools and innovative products for Retail, RMG, and Poultry industries.",
                  features: ["Retail Solutions", "RMG Industry Tools", "Poultry Management"],
                  delay: "900"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={service.delay}
                  className="group bg-slate-800/60 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/80 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 group-hover:border-cyan-400/50 transition-colors flex-shrink-0">
                      <service.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-lg mb-2 leading-tight">{service.title}</h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                            <span className="text-sm text-slate-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent" />
    </section>
  )
}