'use client';

import { motion } from 'framer-motion';
import { Flower2, Music, Sparkles, Hand } from 'lucide-react';

const services = [
    {
        title: "Reiki Usui",
        description: "Canalización de energía vital universal para armonizar tus chakras, reducir el estrés y promover la autosanación física y emocional.",
        icon: Sparkles,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Flores de Bach",
        description: "Terapia vibracional personalizada para gestionar emociones profundas como ansiedad, miedos y penas, devolviendo la paz interior.",
        icon: Flower2,
        color: "bg-pink-50 text-pink-600"
    },
    {
        title: "Sonoterapia",
        description: "Inmersión en sonidos sagrados de cuencos tibetanos y gongs que inducen estados profundos de relajación y regeneración celular.",
        icon: Music,
        color: "bg-amber-50 text-amber-600"
    },
    {
        title: "Masajes Terapéuticos",
        description: "Técnicas manuales enfocadas en liberar tensiones musculares acumuladas y contracturas, renovando tu vitalidad corporal.",
        icon: Hand,
        color: "bg-teal-50 text-teal-600"
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-[var(--kalfu-light)]">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--kalfu-blue)] mb-6 font-[var(--font-handwriting)]">
                        Nuestras Terapias
                    </h2>
                    <p className="text-slate-600">
                        Cada sesión es única y adaptada a tus necesidades. Exploramos diferentes caminos para guiarte hacia tu bienestar integral.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-[var(--kalfu-calypso)]/20"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[var(--kalfu-blue)] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
