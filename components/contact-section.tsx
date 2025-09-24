"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send, MessageSquare, Clock, Globe } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Dark Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-cyan-400/10 rounded-full blur-3xl" />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-tech-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1"/>
                <circle cx="25" cy="25" r="1.5" fill="rgb(34, 211, 238)" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-tech-pattern)"/>
          </svg>
        </div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-400/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full mb-6">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge IoT and automation solutions? 
            Let's discuss your project requirements and explore innovative possibilities together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Information - Enhanced */}
          <div data-aos="fade-right" className="lg:col-span-1">
            <div className="space-y-8">
              {/* Company Overview Card */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Emmanuel's Lanka</h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  Since 2009, we've been pioneering IoT hardware and software solutions across Sri Lanka and Asia, 
                  specializing in low-power autonomous devices and cloud platforms.
                </p>

                {/* Business Hours */}
                <div className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Business Hours</p>
                    <p className="text-xs text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Our Office",
                    content: "No 339, Galle Rd, Colombo 3, Sri Lanka",
                    action: "Get Directions"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "automation@emmanuelslanka.com",
                    action: "Send Email"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+94 11 2 232 815",
                    action: "Call Now"
                  }
                ].map((contact, index) => (
                  <div key={index} className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-700/50 group hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/30 group-hover:border-cyan-400/50 transition-colors">
                        <contact.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                        <p className="text-slate-300 text-sm mb-2">{contact.content}</p>
                        <button className="text-cyan-400 text-xs font-medium hover:text-cyan-300 transition-colors">
                          {contact.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div data-aos="fade-left">
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-xl bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-xl bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Interactive Map */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Find Us</h4>
                </div>
                
                {/* Google Maps Embed */}
                <div className="relative w-full h-80 rounded-xl overflow-hidden border border-slate-600">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8977714562406!2d79.84593931477398!3d6.902030995037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2012a9c8b7c5b55a!2s339%20Galle%20Rd%2C%20Colombo%2000300%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1640000000000!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl filter contrast-125 saturate-110"
                  />
                  
                  {/* Dark Mode Map Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/10 to-transparent rounded-xl" />
                </div>

                {/* Location Info */}
                <div className="mt-4 p-4 bg-slate-700/50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Emmanuel's Lanka Office</p>
                      <p className="text-xs text-slate-400">Colombo 3, Galle Road</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=339+Galle+Road,+Colombo+3,+Sri+Lanka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-xs font-medium rounded-lg transition-colors"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}