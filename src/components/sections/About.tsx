'use client';

import { motion } from 'framer-motion';
import { Leaf, Heart, Sun, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';

interface AboutProps {
    data?: any;
}

export const About = ({ data }: AboutProps) => {
    const title = data?.title || "Nuestra Esencia";
    const contentLine1 = data?.contentLine1 || "Kalfu significa \"azul\" en Mapudungun. Este color evoca la inmensidad del cielo y la profundidad del agua, elementos sagrados que nos conectan con el origen y la calma.";
    const contentLine2 = data?.contentLine2 || "En el corazon de Curico, hemos creado un refugio para el alma. Un espacio donde la terapia holistica no es solo un tratamiento, sino un camino hacia el reencuentro contigo mismo, respetando los ciclos naturales y la energia vital.";
    const quote = data?.quote || "El bienestar es el estado natural del ser.";
    const imageUrl = data?.image ? urlFor(data.image).url() : "/images/team/20260117_192132.jpg.jpeg";
    
    const features = data?.features || [
        { icon: 'Leaf', text: "Enfoque Natural y Respetuoso" },
        { icon: 'Heart', text: "Atencion Personalizada y Calida" },
        { icon: 'Sun', text: "Bienestar Integral (Mente, Cuerpo, Alma)" }
    ];

    // Helper to get Lucide icon component by name
    const getIcon = (name: string) => {
        switch (name) {
            case 'Leaf': return Leaf;
            case 'Heart': return Heart;
            case 'Sun': return Sun;
            default: return Leaf;
        }
    };

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--kalfu-calypso)]/10 to-[var(--kalfu-blue)]/5 rounded-3xl -z-10" />
                            
                            {/* Main Image */}
                            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-card">
                                <Image
                                    src={imageUrl}
                                    alt="Kalfu - Nuestra Esencia"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                            </div>

                            {/* Quote Card */}
                            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-xl shadow-card-hover p-5 max-w-xs border border-slate-100">
                                <div className="flex gap-3">
                                    <div className="w-1 bg-[var(--kalfu-blue)] rounded-full flex-shrink-0" />
                                    <p className="text-slate-700 font-medium italic text-sm leading-relaxed">
                                        {quote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        {/* Tag */}
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--kalfu-calypso)]/10 text-[var(--kalfu-dark)] text-sm font-semibold mb-4">
                            Sobre Nosotros
                        </span>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Nos especializamos en{' '}
                            <span className="text-[var(--kalfu-blue)]">bienestar integral</span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-lg text-[var(--kalfu-dark)] font-medium mb-4 leading-relaxed">
                            A traves de soluciones holisticas en salud y equilibrio emocional
                        </p>

                        {/* Description */}
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {contentLine2}
                        </p>

                        {/* Features List */}
                        <div className="space-y-4">
                            {features.map((item: any, index: number) => {
                                const IconComp = getIcon(item.icon);
                                return (
                                    <div 
                                        key={index} 
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[var(--kalfu-calypso)]/30 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[var(--kalfu-calypso)]/10 flex items-center justify-center flex-shrink-0">
                                            <IconComp size={20} className="text-[var(--kalfu-blue)]" />
                                        </div>
                                        <span className="font-semibold text-slate-800">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
