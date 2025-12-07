"use client"

import { Linkedin, Mail, Award, Users } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "CANISIUS COSTA",
      position: "Chairman",
      credentials: "BSc Pub Admin, Justice of Peace",
      image: "/business-executive-portrait.jpg",
      specialty: "Leadership & Strategy"
    },
    {
      name: "SUDEERA COSTA",
      position: "Chief Technology Officer",
      credentials: "B.Eng Hons UK, PMP USA, Hons NIIT InD",
      image: "/technology-executive-professional-portrait.jpg",
      specialty: "Technology Leadership"
    },
    {
      name: "NISANSALA COSTA",
      position: "Business Consultant",
      credentials: "MSc, B.Sc Hons UK, LLB Hons UOL",
      image: "/business-consultant-professional-portrait.jpg",
      specialty: "Business Strategy"
    },
    {
      name: "YOHAN GUNAWARDENA",
      position: "Senior Electronics Engineer",
      credentials: "MSc,BSc Hons University of Kelaniya",
      image: "/electronics-engineer-professional-portrait.jpg",
      specialty: "Circuit Design"
    },
    {
      name: "DINUKA THELIS",
      position: "Senior Electronics Engineer",
      credentials: "BSc Hons ICBT",
      image: "/senior-engineer-professional-portrait.jpg",
      specialty: "Hardware Development"
    },
    {
      name: "KASUN D. RATHNAYAKE",
      position: "Senior Software Engineer",
      credentials: "BSc (hons) Software Engineering, Plymouth University, UK",
      image: "/software-engineer-professional-portrait.jpg",
      specialty: "Full-Stack Development"
    },
    {
      name: "WARUNA SRINATH",
      position: "Data Science Engineer",
      credentials: "BSc Hons NSBM",
      image: "/data-scientist-professional-portrait.jpg",
      specialty: "AI & Machine Learning"
    },
    {
      name: "DHANUSHKA MENDIS",
      position: "Electronics Engineer",
      credentials: "BSc Hons IET",
      image: "/ELECTRONICS-ENGINEER-BSc-Hons-IET.jpg",
      specialty: "Embedded Systems"
    },
    {
      name: "ADISHA MENDIS",
      position: "Electronics Design Engineer",
      credentials: "BSc Eng Hons SLIIT",
      image: "/ELECTRONICS-DESIGN-ENGINEER-BSc-Eng-Hons-SLIIT.jpg",
      specialty: "PCB Design"
    },
    {
      name: "MALINDU BATHEEGAMA",
      position: "Electronics Design Engineer",
      credentials: "BSc Eng Hons SLIIT",
      image: "/ELECTRONICS-DESIGN-ENGINEER-BSc-Eng-Hons SLIIT.jpg",
      specialty: "IoT Systems"
    },
    {
      name: "ARUNA BANDARA",
      position: "Mechatronic Engineer",
      credentials: "BEng Hons",
      image: "/MECHATRONIC-ENGINEER-BEng Hons DUMMY.jpg",
      specialty: "Robotics & Automation"
    },
  ]

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/5 to-primary/5 rounded-full blur-3xl" />
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="team-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="1.5" fill="currentColor" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#team-grid)" className="text-primary"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full mb-6">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Meet Our Experts</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-primary to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary team of engineers, consultants, and innovators dedicated to 
            delivering cutting-edge R&D solutions across various technological domains.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 75}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-xl shadow-xl dark:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:-translate-y-2">
                
                {/* Image Container with Modern Overlay */}
                <div className="relative overflow-hidden aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                  
                  {/* Specialty Badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full border border-primary/20">
                      {member.specialty}
                    </span>
                  </div>

                  {/* Social Links - Appears on Hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button className="w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-2">
                      {member.position}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-slate-400 dark:text-slate-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      {member.credentials}
                    </p>
                  </div>
                </div>

                {/* Subtle Border Animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats Section */}
        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "11+", label: "Expert Engineers", icon: Users },
            { number: "5+", label: "Disciplines", icon: Award },
            { number: "15+", label: "Years Experience", icon: Award },
            { number: "200+", label: "Projects Delivered", icon: Award }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}