'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';

interface HeroProps {
    data?: any;
}

export const Hero = ({ data }: HeroProps) => {
    const titleLine1 = data?.titleLine1 || "Encuentra tu centro";
    const titleLine2 = data?.titleLine2 || "y conecta con tu energia";
    const description = data?.description || "Un espacio de sanacion en Curico. Reiki, Flores de Bach y Sonoterapia diseñados para restaurar tu equilibrio emocional y fisico.";
    const welcomeTag = data?.welcomeTag || "Bienvenido a Kalfu Terapias Holisticas";
    const primaryButtonText = data?.primaryButtonText || "Agendar ahora";
    const primaryButtonLink = data?.primaryButtonLink || "#contact";
    const secondaryButtonText = data?.secondaryButtonText || "Mira como funciona";
    const secondaryButtonLink = data?.secondaryButtonLink || "#about";
    const imageUrl = data?.image ? urlFor(data.image).url() : "/logo-emblem.png";

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--kalfu-blue) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Decorative Shapes - Viveactivo style */}
            <div className="absolute top-20 right-[10%] w-72 h-72 bg-[var(--kalfu-calypso)]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[var(--kalfu-blue)]/6 rounded-full blur-3xl" />

            <div className="container-custom relative z-10 py-32 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        {/* Tag */}
                        <span className="inline-block px-4 py-2 rounded-full bg-[var(--kalfu-calypso)]/10 text-[var(--kalfu-dark)] text-sm font-semibold mb-6 border border-[var(--kalfu-calypso)]/20">
                            {welcomeTag}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            {titleLine1}
                            <br />
                            <span className="text-[var(--kalfu-blue)]">{titleLine2}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link
                                href={primaryButtonLink}
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--kalfu-blue)] text-white font-semibold shadow-lg shadow-[var(--kalfu-blue)]/25 hover:shadow-xl hover:shadow-[var(--kalfu-blue)]/30 hover:-translate-y-0.5 transition-all"
                            >
                                {primaryButtonText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={secondaryButtonLink}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:border-[var(--kalfu-calypso)] hover:text-[var(--kalfu-blue)] transition-all"
                            >
                                <Play size={18} className="text-[var(--kalfu-blue)]" />
                                {secondaryButtonText}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Background Card */}
                            <div className="absolute inset-4 bg-gradient-to-br from-[var(--kalfu-calypso)]/20 to-[var(--kalfu-blue)]/10 rounded-3xl" />
                            
                            {/* Main Image Container */}
                            <div className="relative bg-white rounded-3xl shadow-card p-6 overflow-hidden">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={imageUrl}
                                        alt="Kalfu Terapias Holisticas"
                                        className="object-contain w-3/4 h-3/4 drop-shadow-lg"
                                    />
                                </div>

                                {/* Floating Stats Card */}
                                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card-hover p-4 border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--kalfu-calypso)]/10 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-[var(--kalfu-blue)]">+5</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Anos de experiencia</p>
                                            <p className="text-xs text-slate-500">En bienestar integral</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -top-2 -right-2 bg-[var(--kalfu-blue)] text-white rounded-2xl shadow-lg px-4 py-2">
                                    <p className="text-xs font-semibold">Curico, Chile</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
