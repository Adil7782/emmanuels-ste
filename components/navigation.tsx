"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Zap } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const isDark = mounted ? (theme === "dark" || theme === "system") : true;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${scrolled
          ? "glass-panel"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 transition-all duration-300">
          {/* Logo */}
          <div className="flex-shrink-0 z-10 w-1/4">
            <button onClick={() => scrollToSection("#home")} className="group">
              <div className="flex items-center space-x-3">
                <div className="relative rounded-xl flex items-center justify-center bg-white/5 p-1 border border-white/10 group-hover:border-primary/50 transition-all shadow-[0_0_15px_rgba(0,100,255,0.1)]">
                  <Image src={"/logo.png"} height={40} width={40} alt="Logo" className="w-10 h-10 object-contain" />
                </div>
                <h1 className="text-xl font-bold gradient-text hidden sm:block tracking-tight">Emmanuels Lanka</h1>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-1 lg:space-x-4 bg-foreground/5 dark:bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-border/50">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 relative group bg-transparent rounded-full hover:bg-foreground/5 dark:hover:bg-white/5"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 justify-end w-1/4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="rounded-full border-border/50 bg-background/50 backdrop-blur hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              {mounted && !isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300 px-6 gap-2"
            >
              <Zap className="h-4 w-4" />
              <span>Get Started</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3 w-3/4 justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="rounded-full border-border/50 bg-background/50 backdrop-blur hover:bg-primary/10 hover:text-primary transition-all"
            >
              {mounted && !isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full border-border/50 bg-background/50 backdrop-blur hover:bg-primary/10 hover:text-primary transition-all relative z-50"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="flex flex-col h-full justify-center px-6 space-y-4">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground/80 hover:text-primary block px-4 py-3 text-2xl font-bold w-full text-center transition-all duration-300 tracking-wide border-b border-white/5"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-8 w-full">
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="w-full rounded-full bg-primary py-6 text-lg hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)] gap-2 transition-all hover:scale-105"
            >
              <Zap className="h-5 w-5" />
              Start Project
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
