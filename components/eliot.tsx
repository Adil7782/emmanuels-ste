import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Zap, Activity, Shield, Smartphone } from 'lucide-react'
import { Button } from './ui/button'
import { NeonGradientCard } from './ui/neon-gradient-card'
import Image from 'next/image'

const EliotSite = () => {
    return (
        <section
            id="eliot"
            className="relative py-24 overflow-hidden bg-background"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-background to-cyan-50/50 dark:from-blue-950/20 dark:via-background dark:to-cyan-950/20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                    Experience the Future
                                </span>
                                <br />
                                <span className="text-foreground">with ELIoT</span>
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground w-full max-w-lg leading-relaxed">
                                Connect your world with our advanced IoT platform. Real-time monitoring, smart analytics, and seamless control at your fingertips.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://www.eliot.global/" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="group text-base relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Visit ELIoT Web
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </Button>
                            </a>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                { icon: Zap, label: "Real-time Data" },
                                { icon: Activity, label: "Smart Analytics" },
                                { icon: Shield, label: "Secure Cloud" },
                                { icon: Smartphone, label: "Mobile Access" },
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <feature.icon className="w-4 h-4" />
                                    </div>
                                    {feature.label}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <NeonGradientCard className="items-center justify-center text-center">
                                <div className="relative w-full aspect-square bg-white dark:bg-slate-950 rounded-xl overflow-hidden p-6 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
                                    <Image
                                        src="/eliot.png"
                                        alt="ELIoT Platform Interface"
                                        width={600}
                                        height={600}
                                        className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </NeonGradientCard>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default EliotSite