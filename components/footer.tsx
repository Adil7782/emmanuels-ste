"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, Factory } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "Linkedin", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Github", icon: Github, href: "#" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden pt-16 pb-8">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start mb-12">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                <Factory className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Emmanuel's Lanka</h3>
            </div>
            <p className="text-foreground/70 text-sm max-w-xs leading-relaxed font-medium">
              Pioneering Smart Factory Solutions and Industrial Automation Since 2009.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-2">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/70 hover:text-primary text-sm font-semibold transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="cursor-pointer group flex bg-foreground/5 dark:bg-white/5 p-4 rounded-3xl border border-border transition-all hover:bg-foreground/10" onClick={() => scrollToSection("#home")}>
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={120}
                height={60}
                className="opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-xs font-medium">
            © {new Date().getFullYear()} Emmanuel's Lanka (Pvt) Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
