'use client';

import { motion } from 'framer-motion';
import { Leaf, Heart, Sun } from 'lucide-react';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';

interface AboutProps {
    data?: any;
}

export const About = ({ data }: AboutProps) => {
    const title = data?.title || "Nuestra Esencia";
    const contentLine1 = data?.contentLine1 || "Kalfú significa \"azul\" en Mapudungun. Este color evoca la inmensidad del cielo y la profundidad del agua, elementos sagrados que nos conectan con el origen y la calma.";
    const contentLine2 = data?.contentLine2 || "En el corazón de Curicó, hemos creado un refugio para el alma. Un espacio donde la terapia holística no es solo un tratamiento, sino un camino hacia el reencuentro contigo mismo, respetando los ciclos naturales y la energía vital.";
    const quote = data?.quote || "El bienestar es el estado natural del ser.";
    const imageUrl = data?.image ? urlFor(data.image).url() : "/images/team/20260117_192132.jpg.jpeg";
    
    const features = data?.features || [
        { icon: 'Leaf', text: "Enfoque Natural y Respetuoso" },
        { icon: 'Heart', text: "Atención Personalizada y Cálida" },
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
        <section id="about" className="section-padding bg-[var(--kalfu-light)] relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--kalfu-calypso)]/10 rounded-full blur-[100px] -z-10" />
 
             <div className="container-custom relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                     <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                     >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-8 tracking-tighter">
                            Nuestra <span className="text-[var(--kalfu-blue)]">Esencia</span>
                            <div className="h-2 w-20 bg-[var(--kalfu-calypso)] mt-4 rounded-full" />
                        </h2>
                        <p className="text-2xl text-[var(--kalfu-blue)] leading-tight mb-8 font-bold text-balance italic">
                            {contentLine1}
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-12 font-medium">
                            {contentLine2}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10 md:pb-0">
                            {features.map((item: any, index: number) => {
                                const IconComp = getIcon(item.icon);
                                return (
                                    <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-soft border border-white/50">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--kalfu-calypso)] to-[var(--kalfu-blue)] text-white flex items-center justify-center shadow-soft">
                                            <IconComp size={22} />
                                        </div>
                                        <span className="font-bold text-slate-700 text-sm tracking-tight">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
                        className="relative h-[500px] md:h-[650px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-strong group"
                    >
                        {/* Slideshow of images */}
                        <div className="absolute inset-0">
                            <Image
                                src={imageUrl}
                                alt="About Kalfu"
                                fill
                                className="object-cover transition-opacity duration-1000 animate-fade-in-out"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--kalfu-blue)]/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

                        <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
                            <p className="text-white text-xl font-bold text-center italic drop-shadow-md">
                                {quote}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
