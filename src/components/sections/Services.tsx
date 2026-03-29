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
        <section id="services" className="py-24 bg-[var(--kalfu-light)] font-sans">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--kalfu-blue)] mb-6 tracking-tight">
                        Nuestras Terapias
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Cada sesión es única y adaptada a tus necesidades. Exploramos diferentes caminos para guiarte hacia tu bienestar integral.
                    </p>
                </div>
 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {servicesList.map((service, index) => {
                        const IconComp = getIcon(service.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] p-10 shadow-soft hover:shadow-strong transition-all duration-300 group border border-transparent hover:border-[var(--kalfu-calypso)]/10 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${service.color}`}>
                                    <IconComp size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[var(--kalfu-blue)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
