"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Cpu, Network } from "lucide-react"
import { useEffect, useState } from "react"
import { DockDemo } from "./ui/UiSample"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (link: string) => {
    const element = document.querySelector(`#${link}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden flex items-center pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern for light and dark modes */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="professional-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#professional-grid)" />
          </svg>
        </div>

        {/* Dynamic Gradient overlays - hidden on mobile for performance */}
        <div className="hidden md:block absolute top-[0%] right-[0%] w-[500px] h-[500px] bg-primary/20 dark:bg-primary/15 rounded-full blur-[100px] animate-background-position-spin" />
        <div className="block md:hidden absolute top-[0%] right-[0%] w-[300px] h-[300px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[60px]" />

        <div className="hidden md:block absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/20 dark:bg-accent/15 rounded-full blur-[120px] animate-background-position-spin" style={{ animationDelay: '2s' }} />
        <div className="block md:hidden absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-10 md:mt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Status Badge */}
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border-primary/20 bg-background/60"
            >
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
              <span className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">Award-Winning R&D Since 2009</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tighter">
                <span className="block text-foreground drop-shadow-sm">Emmanuel's</span>
                <span className="block gradient-text drop-shadow-lg pb-2">Lanka</span>
              </h1>

              <div className="space-y-5 flex flex-col pt-2">
                <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" data-aos="fade-right" data-aos-delay="300" />
                <p className="text-xl lg:text-2xl font-medium text-muted-foreground leading-relaxed max-w-lg mt-4">
                  Industrial R&D • IoT Solutions • Smart Manufacturing
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-foreground/70 leading-relaxed max-w-xl"
            >
              Since 2009, our multidisciplinary team of <span className="font-semibold text-foreground">engineers and consultants</span> has
              delivered innovative <span className="font-semibold text-primary">IoT and automation solutions</span> for Sri Lankan
              manufacturing sectors including <span className="font-semibold text-foreground">Retail, RMG, and Poultry industries</span>.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border/50" data-aos="fade-up" data-aos-delay="300">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "200+", label: "Projects Delivered" },
                { value: "Multiple", label: "Awards Won" }
              ].map((metric, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1 tracking-tight">{metric.value}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Removed DockDemo from desktop flow because it clashed */}
            <div className="flex flex-col sm:flex-row gap-5 items-start pt-4" data-aos="fade-up" data-aos-delay="400">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] px-8 py-7 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 group"
                onClick={() => scrollToSection("portfolio")}
              >
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/50 backdrop-blur-md border-border/50 hover:bg-foreground/5 text-foreground px-8 py-7 text-lg rounded-full font-semibold transition-all duration-300 group"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Modern Bento Grid Cards */}
          <div className="relative h-full flex flex-col justify-center gap-6 mt-12 lg:mt-0 lg:pl-10">
            {/* Added abstract connecting line for Industry 4.0 feel */}
            <div className="hidden lg:block absolute left-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {[
              {
                icon: Factory,
                title: "Industrial Equipment R&D",
                description: "Custom robotics machines and equipment development for manufacturing optimization.",
                features: ["Robotics Design", "Equipment Dev", "Automation"],
                delay: "200"
              },
              {
                icon: Network,
                title: "IoT & Digitization Solutions",
                description: "Scientific self-learning algorithms using enterprise data to optimize production.",
                features: ["Smart Products", "Data Analytics", "Process Optimization"],
                delay: "400"
              },
              {
                icon: Cpu,
                title: "Industry-Specific Solutions",
                description: "Specialized management tools and innovative products for Retail, RMG, and Poultry.",
                features: ["Retail Solutions", "RMG Tools", "Poultry Management"],
                delay: "600"
              }
            ].map((service, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={service.delay}
                className="group relative glass-card rounded-2xl p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-background border border-border rounded-xl flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all flex-shrink-0">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2 tracking-tight">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-foreground/5 dark:bg-white/5 px-2.5 py-1 rounded-md">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-xs font-medium text-foreground/80">{feature}</span>
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
    </section>
  )
}