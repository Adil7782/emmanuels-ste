"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, Mail, Phone, Send, MessageSquare, Clock, Globe, CheckCircle2, ArrowRight, Loader2 } from "lucide-react"
import axios from 'axios';
import { GradientDivider } from "./ui/section-divider"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

// Zod validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(50, {
    message: "Name must not exceed 50 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }).max(100, {
    message: "Subject must not exceed 100 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, {
    message: "Message must not exceed 1000 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitSuccess(false)

    try {
      const response = await axios.post("/api/contact", data)

      if (!response) {
        throw new Error("Failed to send message")
      }

      setSubmitSuccess(true)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })

      form.reset()
      setTimeout(() => setSubmitSuccess(false), 5000)

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later or contact us directly via email.",
      })
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      content: "No 10/4, Totewatta Road, Wewala, Ja-Ela, Sri Lanka",
      action: "Get Directions",
      href: "https://maps.google.com/?q=ELIoT+International+Pvt+Ltd+Ja-Ela"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "automation@eliot.global",
      action: "Send Email",
      href: "mailto:automation@eliot.global"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "For sales inquiries: +94 70 305 0300 ",
      action: "Call Now",
      href: "tel:+94703050300"
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full mb-6">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-primary to-blue-600 dark:from-white dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge IoT and automation solutions?
            Let's discuss your project requirements and explore innovative possibilities together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Company Info, Contact Details, WhatsApp */}
          <div className="lg:col-span-1 space-y-8">

            {/* Company Overview Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-400/30 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-cyan-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Emmanuel's Lanka</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Since 2009, we've been pioneering IoT hardware and software solutions across Sri Lanka and Asia,
                specializing in low-power autonomous devices and cloud platforms.
              </p>
              <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-medium text-slate-900 dark:text-white">Business Hours</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.title === "Visit Our Office" ? "_blank" : undefined}
                  rel={item.title === "Visit Our Office" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mb-2 whitespace-pre-line">{item.content}</p>
                    <span className="text-xs font-medium text-primary group-hover:underline inline-flex items-center gap-1">
                      {item.action} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />

              <h3 className="text-xl font-bold text-center mb-2">Live Chat on WhatsApp</h3>

              <a
                href="https://wa.me/+94703050300"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-white text-[#128C7E] rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Make your inquire via whatsapp
              </a>
            </motion.div>
          </div>

          {/* Right Column (Span 2) - Form AND Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-slate-800"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send us a message</h3>
                {/* <p className="text-slate-600 dark:text-slate-400">Fill out the form below and we'll get back to you within 24 hours.</p> */}
              </div>

              {submitSuccess && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-semibold text-green-700 dark:text-green-400">Message Sent!</p>
                    <p className="text-xs text-green-600/80 dark:text-green-400/80">Thank you for contacting us.</p>
                  </div>
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="h-12 bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary transition-all rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">Your Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              {...field}
                              className="h-12 bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary transition-all rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project Inquiry"
                            {...field}
                            className="h-12 bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary transition-all rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project requirements..."
                            {...field}
                            rows={6}
                            className="bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary transition-all rounded-xl resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-semibold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-500/25 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Map (Restored) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl p-2 shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4985.4805114810415!2d79.88073219319291!3d7.066365105581575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f7bed9e53b4f%3A0x393b0fe9adbe6a77!2sEMMANUEL%E2%80%99S%20LANKA%20PVT%20LTD!5e1!3m2!1sen!2slk!4v1766995092409!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-[1.1] grayscale-[0.2]"
                />

                {/* Map overlay strip */}
                <div className="absolute bottom-4 left-4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 flex justify-between items-center gap-4 max-w-[80%]">
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">Emmanuels Lanka (Pvt) Ltd.</p>
                    <p className="text-[10px] text-slate-500 truncate">No 10/4, Totewatta Road, Wewala, Ja-Ela, Sri Lanka</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=ELIoT+International+Pvt+Ltd+Ja-Ela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-[10px] font-bold rounded-lg transition-colors"
                  >
                    Open Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}