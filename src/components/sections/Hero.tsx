'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e0f2fe] to-[#bae6fd]/30">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--kalfu-calypso)]/10 via-transparent to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--kalfu-blue)]/5 via-transparent to-transparent blur-3xl" />

            <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-12 py-20 mt-20 md:mt-0">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[var(--kalfu-blue)] text-lg md:text-xl font-[var(--font-handwriting)] font-bold shadow-sm mb-6 border border-blue-50">
                            Bienvenido a Kalfú Terapias Holísticas
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--kalfu-blue)] leading-[1.1] mb-6 tracking-tight">
                            Encuentra tu centro <br className="hidden md:block" />
                            <span className="text-[var(--kalfu-calypso)]">y conecta con tu energía.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Un espacio de sanación en Curicó. Reiki, Flores de Bach y Sonoterapia diseñados para restaurar tu equilibrio emocional y físico.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link
                                href="#contact"
                                className="group px-8 py-3.5 rounded-full bg-[var(--kalfu-blue)] text-white font-semibold shadow-lg shadow-blue-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
                            >
                                Agendar ahora
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#about"
                                className="px-8 py-3.5 rounded-full bg-white text-[var(--kalfu-blue)] font-semibold shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                                Conocer más
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
                        className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-white p-4 rotate-2 transform hover:rotate-1 transition-transform duration-500"
                    >
                        {/* Placeholder for an actual image */}
                        <div className="w-full h-full rounded-[1.5rem] bg-slate-50 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--kalfu-blue)]/5 to-[var(--kalfu-calypso)]/10 transition-opacity opacity-100" />

                            {/* Main Emblem Image */}
                            <div className="relative w-3/4 h-3/4">
                                <img
                                    src="/logo-emblem.png"
                                    alt="Kalfú Terapias Holísticas Emblem"
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
