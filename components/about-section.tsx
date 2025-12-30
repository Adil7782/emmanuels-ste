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
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Projects",
      description:
        "We work with various clients to develop their products & solutions. We have developed cutting edge technology robotics machines and equipment.",
      count: "100+",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Awards",
      description:
        "We have received several National & International awards for our R&D works in the area of IoT & Digitization solutions from Global Climate Launch Pad competition etc.",
      count: "15+",
      color: "from-blue-600 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Team Members",
      description:
        "We have engineers from Electronics & IoT Design, Electrical & Power Engineering, Mechanical Design & Software Design professions",
      count: "25+",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-indigo-900/40 relative overflow-hidden"
    >
      <GradientDivider position="top" />
      {/* Light theme background elements */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse dark:bg-blue-500/20" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-300/30 rounded-full blur-xl animate-pulse dark:bg-cyan-400/20"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl animate-pulse dark:bg-blue-400/10"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Dark theme specific background elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-40">
        <div className="absolute top-10 right-20 w-24 h-24 bg-indigo-600/10 rounded-full blur-lg animate-pulse" />
        <div
          className="absolute bottom-32 left-20 w-36 h-36 bg-purple-600/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-28 h-28 bg-blue-600/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div data-aos="fade-up" className="text-center mb-16">
            {/* Modern Header with Gradient Text */}
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6">
              About Us
            </h2>

            {/* Modern divider */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>

            {/* Enhanced content grid */}
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 items-start">

                {/* Main description */}
                <div className="lg:col-span-2 space-y-6 ">
                  <div className="group relative rounded-2xl">
                    <ShineBorder shineColor={["#00d2f3", "#1b2d59", "#0b90b7"]} className="absolute inset-0" />

                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-pretty bg-white/50 dark:bg-gray-800/50 p-6  rounded-2xl  shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700">
                      Our team of experienced consultants and engineers across wide disciplines get together to built our
                      reputation on giving our customers straightforward, practical, technical advice and recommend products &
                      Solutions that work together to meet their needs.
                    </p>
                  </div>

                  <div className="group relative rounded-2xl">
                    <ShineBorder shineColor={["#00d2f3", "#1b2d59", "#0b90b7"]} className="absolute inset-0" />

                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-pretty bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-cyan-200 dark:hover:border-cyan-700">
                      Innovative Products and management tools for the Retail industry, RMG industry & poultry industry based on
                      scientific self-learning algorithms, using your enterprise data to further improve and optimize your
                      production and business process.
                    </p>
                  </div>
                </div>

                {/* Side highlight card */}
                <div className="lg:col-span-1 relative rounded-2xl">
                  <ShineBorder shineColor={["#00d2f3", "#1b2d59", "#0b90b7"]} className="absolute inset-0" />

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Our Mission</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Emmanuel's Lanka is an industrial equipment design & development R&D firm established in 2009,
                        delivering innovative IoT, Digitization and Industrial automation solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center relative p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm interactive-card border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300/70 dark:hover:border-blue-500/70 group relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ShineBorder shineColor={["#00d2f3", "#1b2d59", "#0b90b7"]} className="absolute inset-0" />

              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100/80 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/40 transition-all duration-300 group-hover:scale-110 pulse-glow">
                  <metric.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.count}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {metric.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-pretty">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Established Section */}
        <div data-aos="fade-up" className="mt-16 text-center">
          {/* Modern Established Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 px-8 py-4 rounded-2xl border border-blue-200/60 dark:border-blue-700/60 hover:border-blue-300/80 dark:hover:border-blue-500/60 transition-all duration-300 hover:scale-105 group cursor-pointer backdrop-blur-sm">
            {/* Animated Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping group-hover:animate-none"></div>
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-lg text-foreground/90 whitespace-nowrap font-bold bg-gradient-to-r from-blue-600 to-cyan-
     dark:from-blue-400 dark:to-cyan-400 bg-clip-text ">
              Established in 2009
            </span>
            {/* Subtle arrow on hover */}
            <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
          </div>

          {/* Enhanced Description */}
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-pretty bg-white/50 dark:bg-gray-800/30 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
              With over <span className="font-semibold text-blue-600 dark:text-blue-400">15 years of excellence</span>,
              we have been at the forefront of innovation, providing cutting-edge R&D services to prestigious clients worldwide.
              Our journey since 2009 has been marked by continuous growth and technological advancement.
            </p>

            {/* Additional Achievement Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center justify-center space-x-2 text-sm  font-semibold text-foreground/90 whitespace-nowrap">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm  font-semibold text-foreground/90 whitespace-nowrap">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Global Client Base</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm  font-semibold text-foreground/90 whitespace-nowrap">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Continuous Innovation</span>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-2 mt-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: `${item * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <GradientDivider position="bottom" />
    </section>
  )
}