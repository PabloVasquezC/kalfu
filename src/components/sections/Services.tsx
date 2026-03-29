'use client';

import { motion } from 'framer-motion';
import { Flower2, Music, Sparkles, Hand, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServicesProps {
    data?: any[];
}

const defaultServices = [
    {
        title: "Reiki Usui",
        description: "Canalizacion de energia vital universal para armonizar tus chakras, reducir el estres y promover la autosanacion fisica y emocional.",
        icon: 'Sparkles',
        color: "bg-cyan-50 text-[var(--kalfu-blue)]"
    },
    {
        title: "Flores de Bach",
        description: "Terapia vibracional personalizada para gestionar emociones profundas como ansiedad, miedos y penas, devolviendo la paz interior.",
        icon: 'Flower2',
        color: "bg-pink-50 text-pink-600"
    },
    {
        title: "Sonoterapia",
        description: "Inmersion en sonidos sagrados de cuencos tibetanos y gongs que inducen estados profundos de relajacion y regeneracion celular.",
        icon: 'Music',
        color: "bg-amber-50 text-amber-600"
    },
    {
        title: "Masajes Terapeuticos",
        description: "Tecnicas manuales enfocadas en liberar tensiones musculares acumuladas y contracturas, renovando tu vitalidad corporal.",
        icon: 'Hand',
        color: "bg-teal-50 text-teal-600"
    }
];

export const Services = ({ data }: ServicesProps) => {
    const servicesList = data && data.length > 0 ? data : defaultServices;

    // Helper to get Lucide icon component by name
    const getIcon = (name: string) => {
        switch (name) {
            case 'Sparkles': return Sparkles;
            case 'Flower2': return Flower2;
            case 'Music': return Music;
            case 'Hand': return Hand;
            default: return Sparkles;
        }
    };

    return (
        <section id="services" className="section-padding bg-slate-50 relative">
            <div className="container-custom">
                {/* Section Header - Viveactivo style */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--kalfu-calypso)]/10 text-[var(--kalfu-dark)] text-sm font-semibold mb-4">
                        Nuestros servicios
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Nuestras <span className="text-[var(--kalfu-blue)]">Terapias</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Cada sesion es unica y adaptada a tus necesidades. Exploramos diferentes caminos para guiarte hacia tu bienestar integral.
                    </p>
                </div>

                {/* Services Grid - Viveactivo card style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => {
                        const IconComp = getIcon(service.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComp size={26} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">
                                    {service.description}
                                </p>

                                {/* CTA Link - Viveactivo style */}
                                <Link 
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-[var(--kalfu-blue)] font-semibold text-sm group-hover:gap-3 transition-all"
                                >
                                    Conoce mas
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
