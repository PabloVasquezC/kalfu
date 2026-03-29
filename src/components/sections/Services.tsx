'use client';

import { motion } from 'framer-motion';
import { Flower2, Music, Sparkles, Hand } from 'lucide-react';

interface ServicesProps {
    data?: any[];
}

const defaultServices = [
    {
        title: "Reiki Usui",
        description: "Canalización de energía vital universal para armonizar tus chakras, reducir el estrés y promover la autosanación física y emocional.",
        icon: 'Sparkles',
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Flores de Bach",
        description: "Terapia vibracional personalizada para gestionar emociones profundas como ansiedad, miedos y penas, devolviendo la paz interior.",
        icon: 'Flower2',
        color: "bg-pink-50 text-pink-600"
    },
    {
        title: "Sonoterapia",
        description: "Inmersión en sonidos sagrados de cuencos tibetanos y gongs que inducen estados profundos de relajación y regeneración celular.",
        icon: 'Music',
        color: "bg-amber-50 text-amber-600"
    },
    {
        title: "Masajes Terapéuticos",
        description: "Técnicas manuales enfocadas en liberar tensiones musculares acumuladas y contracturas, renovando tu vitalidad corporal.",
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
        <section id="services" className="section-padding bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[var(--kalfu-light)] to-transparent opacity-50" />
            
            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tighter">
                        Nuestras <span className="text-[var(--kalfu-blue)]">Terapias</span>
                        <div className="h-2 w-24 bg-[var(--kalfu-calypso)] mx-auto mt-4 rounded-full" />
                    </h2>
                    <p className="text-slate-600 text-xl font-medium text-balance">
                        Cada sesión es única y adaptada a tus necesidades. Exploramos diferentes caminos para guiarte hacia tu bienestar integral.
                    </p>
                </div>
 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {servicesList.map((service, index) => {
                        const IconComp = getIcon(service.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-gradient-to-br from-[var(--kalfu-blue)] to-[var(--kalfu-calypso)] rounded-[2.5rem] p-10 text-white shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 cursor-default overflow-hidden"
                            >
                                {/* Decorative Arc - Viveactivo style */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                        <IconComp size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-blue-50/90 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
