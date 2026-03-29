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
        <section id="about" className="py-32 bg-white relative overflow-hidden font-sans">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--kalfu-light)] rounded-full translate-x-1/3 -translate-y-1/3 opacity-30" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--kalfu-calypso)] blur-[100px] opacity-10" />
 
             <div className="container-custom relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                     <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                     >
                         <h2 className="text-4xl md:text-5xl font-bold text-[var(--kalfu-blue)] mb-8 tracking-tighter">
                             {title}
                         </h2>
                         <p className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                             {contentLine1}
                         </p>
                         <p className="text-lg text-slate-500 leading-relaxed mb-10">
                             {contentLine2}
                         </p>

                        <div className="space-y-6">
                            {features.map((item: any, index: number) => {
                                const IconComp = getIcon(item.icon);
                                return (
                                    <div key={index} className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[var(--kalfu-light)] text-[var(--kalfu-blue)] flex items-center justify-center shadow-soft">
                                            <IconComp size={22} />
                                        </div>
                                        <span className="font-bold text-slate-700 text-lg">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-strong group"
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

                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--kalfu-blue)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white text-lg font-medium border-l-4 border-[var(--kalfu-lime)] pl-4">
                                {quote}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
