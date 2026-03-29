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
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-20 px-4">
            {/* Main Rounded Hero Container */}
            <div className="absolute inset-4 md:inset-8 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd]/40 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden -z-10 shadow-soft">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--kalfu-calypso)]/20 via-transparent to-transparent blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--kalfu-blue)]/10 via-transparent to-transparent blur-3xl opacity-50" />
            </div>

            <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-12 mt-12 md:mt-0">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[var(--kalfu-blue)] text-lg md:text-xl font-[var(--font-handwriting)] font-bold shadow-sm mb-6 border border-blue-50">
                            {welcomeTag}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--kalfu-blue)] leading-[1.1] mb-6 tracking-tight">
                            {titleLine1} <br className="hidden md:block" />
                            <span className="text-[var(--kalfu-calypso)]">{titleLine2}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                            <Link
                                href={primaryButtonLink}
                                className="group px-10 py-4 rounded-full bg-[var(--kalfu-blue)] text-white font-bold shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all flex items-center gap-3 uppercase tracking-wider text-sm"
                            >
                                {primaryButtonText}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={secondaryButtonLink}
                                className="px-10 py-4 rounded-full bg-white text-[var(--kalfu-blue)] font-bold shadow-soft border border-slate-100 hover:bg-slate-50 hover:-translate-y-1 transition-all uppercase tracking-wider text-sm"
                            >
                                {secondaryButtonText}
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Graphic */}
                <div className="flex-1 w-full relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-strong bg-white p-6 rotate-1 transform hover:rotate-0 transition-transform duration-700"
                    >
                        {/* Placeholder for an actual image */}
                        <div className="w-full h-full rounded-[1.5rem] bg-slate-50 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--kalfu-blue)]/5 to-[var(--kalfu-calypso)]/10 transition-opacity opacity-100" />

                            {/* Main Emblem Image */}
                            <div className="relative w-3/4 h-3/4">
                                <img
                                    src={imageUrl}
                                    alt="Hero Content"
                                    className="object-contain w-full h-full drop-shadow-xl"
                                />
                            </div>

                            {/* Decorative Circle */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--kalfu-calypso)] rounded-full blur-2xl opacity-20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
