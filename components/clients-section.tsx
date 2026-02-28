import { Marquee } from "@/components/ui/marquee"
import { scrollToContact } from "@/lib/linkTo"
import { LightRays } from "./ui/light-rays"
import { GradientDivider } from "./ui/section-divider"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function ClientsSection() {
  const clients = [
    { name: "Client 1", logo: "/clients/client-1.png" },
    { name: "Client 2", logo: "/clients/client-2.png" },
    { name: "Client 3", logo: "/clients/client-3.png" },
    { name: "Client 4", logo: "/clients/client-7.png" },
    { name: "Client 5", logo: "/clients/client-5.png" },
    { name: "Client 6", logo: "/clients/client-6.png" },
    { name: "Client 8", logo: "/clients/client-8.png" },
    { name: "Client 9", logo: "/clients/client-9.png" },
  ]

  const partners = [
    { name: "Partner 2", logo: "/partners/partner-2.png" },
    { name: "Partner 3", logo: "/partners/partner-3.png" },
    { name: "Partner 4", logo: "/partners/partner-4.png" },
    { name: "Partner 2", logo: "/partners/partner-2.png" },
    { name: "Partner 3", logo: "/partners/partner-3.png" },
    { name: "Partner 4", logo: "/partners/partner-4.png" },
    { name: "Partner 2", logo: "/partners/partner-2.png" },
    { name: "Partner 3", logo: "/partners/partner-3.png" },
    { name: "Partner 4", logo: "/partners/partner-4.png" },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden border-t border-border/50">
      <LightRays />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary/50"></span>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Trusted By Industry Leaders
            </span>
            <span className="h-px w-8 bg-primary/50"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            Our Valued <span className="gradient-text">Network</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Collaborating with innovative companies and strategic partners to deliver exceptional results.
          </p>
        </div>

        {/* Our Clients */}
        <div data-aos="fade-up" className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <h3 className="text-2xl font-bold bg-foreground/5 dark:bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-border text-foreground tracking-tight">
              Trusted Clients
            </h3>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s] py-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative flex justify-center items-center w-64 h-32 p-6 glass-card rounded-2xl mx-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                  <div className="relative w-full h-full p-4 z-10 flex items-center justify-center">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 p-4"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          </div>
        </div>

        {/* Our Business Partners */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center mb-10">
            <h3 className="text-2xl font-bold bg-foreground/5 dark:bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-border text-foreground tracking-tight">
              Strategic Partners
            </h3>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee reverse pauseOnHover className="[--duration:30s] py-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative flex justify-center items-center w-64 h-32 p-6 glass-card rounded-2xl mx-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                  <div className="relative w-full h-full p-4 z-10 flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 p-4"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none group-hover:-translate-y-2">
                    <span className="text-xs font-bold text-primary-foreground bg-primary px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap tracking-wide">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" data-aos-delay="200" className="text-center mt-24 pt-16 border-t border-border/50">
          <h2 className="mb-8 text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Interested in partnering with us?
          </h2>

          <button
            onClick={() => scrollToContact("contact")}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:scale-105 group"
          >
            Become a Partner
            <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <GradientDivider position="top" />
    </section>
  )
}