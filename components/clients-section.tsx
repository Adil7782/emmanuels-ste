import { Marquee } from "@/components/ui/marquee"
import { scrollToContact } from "@/lib/linkTo"
import { LightRays } from "./ui/light-rays"
import { GradientDivider, SectionDivider } from "./ui/section-divider"

export default function ClientsSection() {
  const clients = [
    { name: "Client 1", logo: "/clients/client-1.png" },
    { name: "Client 2", logo: "/clients/client-2.png" },
    { name: "Client 3", logo: "/clients/client-3.png" },
    { name: "Client 4", logo: "/clients/client-7.png" },
    { name: "Client 5", logo: "/clients/client-5.png" },
    { name: "Client 6", logo: "/clients/client-6.png" },
    { name: "Client 8 ", logo: "/clients/client-8.png" },
    { name: "Client 9 ", logo: "/clients/client-9.png" },
  ]

  const partners = [
    // { name: "Partner 1", logo: "/partners/partner-1.png" },
    { name: "Partner 2", logo: "/partners/partner-2.png" },
    { name: "Partner 3", logo: "/partners/partner-3.png" },
    { name: "Partner 4", logo: "/partners/partner-4.png" },
    // { name: "Partner 1", logo: "/partners/partner-1.png" },
    { name: "Partner 2", logo: "/partners/partner-2.png" },
    { name: "Partner 3", logo: "/partners/partner-3.png" },
    { name: "Partner 4", logo: "/partners/partner-4.png" },
    { name: "Partner 2", logo: "/partners/partner-2.png" },
    { name: "Partner 3", logo: "/partners/partner-3.png" },
    { name: "Partner 4", logo: "/partners/partner-4.png" },

  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">

      <LightRays />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6">
            Our Valued Network
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Collaborating with innovative companies and strategic partners to deliver exceptional results
          </p>
        </div>

        {/* Our Clients */}
        <div data-aos="fade-up" className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 mr-4" />
              <h3 className="text-xl font-semibold text-primary whitespace-nowrap ">
                Trusted Clients
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 ml-4" />
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-background p-4 md:shadow-none shadow-none border-none">
            <Marquee pauseOnHover className="[--duration:20s]">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative flex justify-center items-center w-64 h-32 p-4 bg-white/90  rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm mx-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 relative z-10 object-contain"
                  />

                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent dark:from-background"></div>
          </div>
        </div>

        {/* Our Business Partners */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 mr-4" />
              <h3 className="text-xl font-semibold text-primary whitespace-nowrap">
                Strategic Partners
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 ml-4" />
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-background p-4 md:shadow-none shadow-none border-none">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative flex justify-center items-center w-64 h-32 p-4 bg-white/90  rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm mx-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 relative z-10 object-contain"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <span className="text-xs text-foreground bg-background/90 px-2 py-1 rounded shadow-sm whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent dark:from-background"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" data-aos-delay="200" className="text-center mt-24 pt-12 border-t border-border/50">
          <h2 className="mb-6 text-xl font-semibold text-foreground/90 whitespace-nowrap">
            Interested in partnering with us?
          </h2>

          <button onClick={() => scrollToContact("contact")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Become a Partner
          </button>
        </div>
      </div>
      {/* <GradientDivider position="top" />
       */}

      <GradientDivider position="top" />
    </section>
  )
}