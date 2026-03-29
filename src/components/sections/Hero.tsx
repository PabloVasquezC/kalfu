'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';

interface HeroProps {
    data?: any;
}

export const Hero = ({ data }: HeroProps) => {
    const titleLine1 = data?.titleLine1 || "Encuentra tu centro";
    const titleLine2 = data?.titleLine2 || "y conecta con tu energía.";
    const description = data?.description || "Un espacio de sanación en Curicó. Reiki, Flores de Bach y Sonoterapia diseñados para restaurar tu equilibrio emocional y físico.";
    const welcomeTag = data?.welcomeTag || "Bienvenido a Kalfú Terapias Holísticas";
    const primaryButtonText = data?.primaryButtonText || "Agendar ahora";
    const primaryButtonLink = data?.primaryButtonLink || "#contact";
    const secondaryButtonText = data?.secondaryButtonText || "Conocer más";
    const secondaryButtonLink = data?.secondaryButtonLink || "#about";
    const imageUrl = data?.image ? urlFor(data.image).url() : "/logo-emblem.png";

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Decorative Circles - Viveactivo style */}
            <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-[var(--kalfu-calypso)]/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-[var(--kalfu-blue)]/10 rounded-full blur-[120px] -z-10" />

            {/* Main Rounded Hero Container */}
            <div className="absolute inset-4 md:inset-10 bg-white/40 backdrop-blur-sm rounded-[3rem] md:rounded-[5rem] overflow-hidden -z-20 border border-white/30 shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[var(--kalfu-light)]/30 to-white" />
            </div>

            <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-12 mt-12 md:mt-0">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex justify-center md:justify-start">
                            <span className="inline-block px-6 py-2 rounded-full bg-white text-[var(--kalfu-blue)] text-sm md:text-base font-bold shadow-soft mb-8 border border-white/50 uppercase tracking-widest animate-bounce-slow">
                                {welcomeTag}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 leading-[1] mb-8 tracking-tighter text-balance">
                            {titleLine1} <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--kalfu-blue)] to-[var(--kalfu-calypso)]">{titleLine2}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium text-balance">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <Link
                                href={primaryButtonLink}
                                className="group px-12 py-5 rounded-full bg-gradient-to-r from-[var(--kalfu-blue)] to-[var(--kalfu-calypso)] text-white font-black shadow-glow hover:shadow-strong hover:-translate-y-1.5 transition-all flex items-center gap-4 uppercase tracking-widest text-sm"
                            >
                                {primaryButtonText}
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link
                                href={secondaryButtonLink}
                                className="px-12 py-5 rounded-full bg-white text-slate-700 font-bold shadow-soft border border-white hover:bg-slate-50 hover:-translate-y-1.5 transition-all uppercase tracking-widest text-sm"
                            >
                                {secondaryButtonText}
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Graphic */}
                <div className="flex-1 w-full relative group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        transition={{ duration: 1, ease: "backOut", delay: 0.2 }}
                        className="relative aspect-square md:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-strong bg-white p-4 transition-transform duration-700 hover:rotate-0"
                    >
                        {/* Placeholder for an actual image */}
                        <div className="w-full h-full rounded-[3rem] bg-slate-50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--kalfu-blue)]/10 to-[var(--kalfu-calypso)]/20" />

                            {/* Main Emblem Image */}
                            <div className="relative w-4/5 h-4/5 z-10 transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src={imageUrl}
                                    alt="Hero Content"
                                    className="object-contain w-full h-full drop-shadow-2xl"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-10 right-10 w-24 h-24 bg-[var(--kalfu-calypso)] rounded-full blur-3xl opacity-30 animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--kalfu-blue)] rounded-full blur-3xl opacity-20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
