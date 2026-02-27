import { Cpu, Lightbulb, Cog, Zap, Bot, Sun, Database, Search } from "lucide-react"
import { ParticlesBackground } from "./ui/meshBackground"
import { GradientDivider } from "./ui/section-divider"

export default function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: "Technology",
      description: "For every service we provide, we use cutting edge high end technologies for the development.",
      color: "from-primary/20",
    },
    {
      icon: Lightbulb,
      title: "Innovations",
      description: "With the support of technology we engineer and innovate best solutions for the organizations.",
      color: "from-accent/20",
    },
    {
      icon: Cog,
      title: "Automation",
      description: "We provide our automation services for Apparel Garments & FMCG industries.",
      color: "from-indigo-500/20",
    },
    {
      icon: Zap,
      title: "Energy",
      description:
        "We provide our services for Energy Sector including Solar plant Installation & Energy Management tools.",
      color: "from-blue-500/20",
    },
    {
      icon: Bot,
      title: "Industrial Robotics",
      description: "IoT enabled industrial robotics machines are one of the major areas we have been working on.",
      color: "from-purple-500/20",
    },
    {
      icon: Sun,
      title: "Solar Plants Installation",
      description: "We make best plans and solution for Solar plant installation.",
      color: "from-yellow-400/20",
    },
    {
      icon: Database,
      title: "Digitization",
      description: "We provide modern and well developed digitization support to top apparel industries",
      color: "from-teal-500/20",
    },
    {
      icon: Search,
      title: "Research and Development",
      description: "We innovate new and modern ways to develop solutions for your problems by doing a broad survey.",
      color: "from-cyan-500/20",
    },
  ]

  const expertise = [
    "Industrial Automation",
    "Industrial IOT",
    "IOT",
    "Research and Development",
    "Electronic Designing",
    "Software Designing",
    "Data Based Management",
    "Embedded System Development",
    "Artificial Intelligence",
    "UX Designing",
    "Website Designing",
    "Robotic Development",
  ]

  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-30"><ParticlesBackground id="services-particles" /></div>

      {/* Soft gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary/50"></span>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              What We Do
            </span>
            <span className="h-px w-8 bg-primary/50"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
            These are the Services we provide by engineering efficiently and effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="glass-card p-8 rounded-3xl hover:-translate-y-2 group relative overflow-hidden transition-all duration-500"
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${service.color} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 bg-background border border-border shadow-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:border-primary/50 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Our Expertise */}
        <div data-aos="fade-up" className="text-center glass-panel p-10 md:p-16 rounded-[3rem] border-primary/10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Our <span className="gradient-text">Expertise</span>
          </h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Our team is well-skilled with following areas to innovate the best solution for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill, index) => (
              <span
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 30}
                className="bg-background/50 backdrop-blur-md text-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 border border-border hover:border-primary shadow-sm hover:shadow-lg hover:shadow-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <GradientDivider position="top" />
      <GradientDivider position="bottom" />
    </section>
  )
}
