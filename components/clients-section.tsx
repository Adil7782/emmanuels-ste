export default function ClientsSection() {
  const clients = [
    { name: "Client 1", logo: "/generic-tech-logo.png" },
    { name: "Client 2", logo: "/manufacturing-company-logo.png" },
    { name: "Client 3", logo: "/industrial-logo.png" },
    { name: "Client 4", logo: "/automation-company-logo.jpg" },
  ]

  const partners = [
    { name: "Partner 1", logo: "/tech-partner-logo.png" },
    { name: "Partner 2", logo: "/business-partner-logo.jpg" },
    { name: "Partner 3", logo: "/industry-partner-logo.jpg" },
    { name: "Partner 4", logo: "/solution-partner-logo.jpg" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
            Our Valued Network
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Collaborating with innovative companies and strategic partners to deliver exceptional results
          </p>
        </div>

        {/* Our Clients */}
        <div data-aos="fade-up" className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 mr-4" />
              <h3 className="text-xl font-semibold text-foreground/90 whitespace-nowrap">
                Trusted Clients
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 ml-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative flex justify-center p-8 bg-background/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 relative z-10"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-xs text-foreground bg-background/90 px-3 py-2 rounded-lg border shadow-lg whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Business Partners */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 mr-4" />
              <h3 className="text-xl font-semibold text-foreground/90 whitespace-nowrap">
                Strategic Partners
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20 ml-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative flex justify-center p-8 bg-background/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 relative z-10"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-xs text-foreground bg-background/90 px-3 py-2 rounded-lg border shadow-lg whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
       <div data-aos="fade-up" data-aos-delay="200" className="text-center mt-24 pt-12 border-t border-border/50">
  <h2 className="mb-6 text-xl font-semibold text-foreground/90 whitespace-nowrap">
  Interested in partnering with us?
</h2>

  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
    Become a Partner
  </button>
</div>
      </div>
    </section>
  )
}