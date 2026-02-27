import { Users, Award, Calendar, Target, TrendingUp } from "lucide-react"
import { ShineBorder } from "./ui/shine-border"
import { GradientDivider } from "./ui/section-divider"

export default function AboutSection() {
  const metrics = [
    {
      icon: Users,
      title: "Happy Clients",
      description: "We provide our R&D services to cutting edge level with the latest technological designs.",
      count: "50+",
      color: "from-primary/20 to-accent/20",
    },
    {
      icon: Target,
      title: "Projects",
      description:
        "We work with various clients to develop their products & solutions. We have developed cutting edge technology robotics machines and equipment.",
      count: "100+",
      color: "from-accent/20 to-primary/20",
    },
    {
      icon: Award,
      title: "Awards",
      description:
        "We have received several National & International awards for our R&D works in the area of IoT & Digitization solutions from Global Climate Launch Pad competition etc.",
      count: "15+",
      color: "from-primary/20 to-indigo-500/20",
    },
    {
      icon: TrendingUp,
      title: "Team Members",
      description:
        "We have engineers from Electronics & IoT Design, Electrical & Power Engineering, Mechanical Design & Software Design professions",
      count: "25+",
      color: "from-indigo-500/20 to-accent/20",
    },
  ]

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      <GradientDivider position="top" />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s' }} />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary/50"></span>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Who We Are
            </span>
            <span className="h-px w-8 bg-primary/50"></span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-8">
            <span className="gradient-text">About</span> Us
          </h2>

          {/* Enhanced content grid */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Main description */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="group relative glass-card p-8 rounded-3xl h-full flex items-center">
                  <p className="text-xl leading-relaxed text-foreground/80 font-medium">
                    Our team of experienced consultants and engineers across wide disciplines get together to built our
                    reputation on giving our customers straightforward, practical, technical advice and recommend products &
                    Solutions that work together to meet their needs.
                  </p>
                </div>

                <div className="group relative glass-card p-8 rounded-3xl h-full flex items-center">
                  <p className="text-xl leading-relaxed text-foreground/80 font-medium">
                    Innovative Products and management tools for the Retail industry, RMG industry & poultry industry based on
                    scientific self-learning algorithms, using your enterprise data to further improve and optimize your
                    production and business process.
                  </p>
                </div>
              </div>

              {/* Side highlight card */}
              <div className="lg:col-span-1 relative glass-panel rounded-3xl p-8 flex flex-col justify-center items-center text-center group overflow-hidden border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  Emmanuel's Lanka is an industrial equipment design & development R&D firm established in 2009,
                  delivering innovative IoT, Digitization and Industrial automation solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative p-8 rounded-3xl glass-card group overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${metric.color} rounded-bl-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-700`} />

              <div className="w-16 h-16 bg-background rounded-2xl shadow-sm border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                <metric.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl font-extrabold text-foreground mb-3 tracking-tight">
                {metric.count}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                {metric.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Established Section */}
        <div data-aos="fade-up" className="mt-24 text-center">
          <div className="inline-flex items-center space-x-4 glass-card px-8 py-4 rounded-full border-primary/20 group hover:border-primary/50 transition-all duration-300">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold gradient-text tracking-wide">
              Established in 2009
            </span>
            <TrendingUp className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </div>

          <div className="mt-10 max-w-3xl mx-auto glass-card p-10 rounded-3xl">
            <p className="text-foreground/80 text-xl leading-relaxed font-medium">
              With over <span className="font-bold text-primary">15 years of excellence</span>,
              we have been at the forefront of innovation, providing cutting-edge R&D services to prestigious clients worldwide.
              Our journey since 2009 has been marked by continuous growth and technological advancement.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center justify-center space-x-2 text-sm font-bold text-foreground/80 uppercase tracking-wider">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm font-bold text-foreground/80 uppercase tracking-wider">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                <span>Global Client Base</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm font-bold text-foreground/80 uppercase tracking-wider">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
                <span>Continuous Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GradientDivider position="bottom" />
    </section>
  )
}