"use client"

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
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />
      <main>
        <ScrollProgress />

        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <EliotSite />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        {/* <ProductsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
