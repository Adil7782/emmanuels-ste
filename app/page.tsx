"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ClientsSection from "@/components/clients-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TeamSection from "@/components/team-section"
import ProductsSection from "@/components/products-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import EliotSite from "@/components/eliot"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <ScrollProgress />

        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <EliotSite />
        <ServicesSection />
        <PortfolioSection />
        {/* <TeamSection /> */}
        {/* <ProductsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
