import { Cpu, Lightbulb, Cog, Zap, Bot, Sun, Database, Search } from "lucide-react"
import { ParticlesBackground } from "./ui/meshBackground"
import { GradientDivider } from "./ui/section-divider"

export default function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: "Technology",
      description: "For every service we provide, we use cutting edge high end technologies for the development.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovations",
      description: "With the support of technology we engineer and innovate best solutions for the organizations.",
      color: "from-blue-600 to-indigo-500",
    },
    {
      icon: Cog,
      title: "Automation",
      description: "We provide our automation services for Apparel Garments & FMCG industries.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Energy",
      description:
        "We provide our services for Energy Sector including Solar plant Installation & Energy Management tools.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Bot,
      title: "Industrial Robotics",
      description: "IoT enabled industrial robotics machines are one of the major areas we have been working on.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Sun,
      title: "Solar Plants Installation",
      description: "We make best plans and solution for Solar plant installation.",
      color: "from-yellow-400 to-blue-500",
    },
    {
      icon: Database,
      title: "Digitization",
      description: "We provide modern and well developed digitization support to top apparel industries",
      color: "from-blue-600 to-teal-500",
    },
    {
      icon: Search,
      title: "Research and Development",
      description: "We innovate new and modern ways to develop solutions for your problems by doing a broad survey.",
      color: "from-purple-500 to-blue-500",
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
      className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-blue-900 relative overflow-hidden"
    >
      <div className="absolute inset-0"><ParticlesBackground id="services-particles" /></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6">

            Services</h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            These are the Services we provide by engineering efficiently and effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="bg-card p-6 rounded-xl interactive-card border border-primary/20 hover:border-primary/40 group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm text-pretty">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Expertise */}
        <div data-aos="fade-up" className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="bg-gradient-to-r from-slate-900 via-primary to-blue-600 dark:from-white dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent">

              Our Expertise
            </span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our team is well-skilled with following areas to innovate the best solution for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {expertise.map((skill, index) => (
              <span
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 30}
                className="bg-white/15 backdrop-blur-sm dark:text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white text-gray-700 transition-all duration-300 cursor-default hover:scale-105 border border-white/30 shadow-lg hover:shadow-xl hover:shadow-primary/20"
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
