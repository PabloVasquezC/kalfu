'use client';

import { motion } from 'framer-motion';
import { Leaf, Heart, Sun } from 'lucide-react';
import Image from 'next/image';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--kalfu-light)] rounded-full translate-x-1/3 -translate-y-1/3 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--kalfu-calypso)] blur-[100px] opacity-10" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--kalfu-blue)] mb-6 font-[var(--font-handwriting)]">
                            Nuestra Esencia
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            <span className="font-semibold text-[var(--kalfu-calypso)]">Kalfú</span> significa <span className="italic">"azul"</span> en Mapudungun. Este color evoca la inmensidad del cielo y la profundidad del agua, elementos sagrados que nos conectan con el origen y la calma.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            En el corazón de Curicó, hemos creado un refugio para el alma. Un espacio donde la terapia holística no es solo un tratamiento, sino un camino hacia el reencuentro contigo mismo, respetando los ciclos naturales y la energía vital.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Leaf, text: "Enfoque Natural y Respetuoso" },
                                { icon: Heart, text: "Atención Personalizada y Cálida" },
                                { icon: Sun, text: "Bienestar Integral (Mente, Cuerpo, Alma)" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="p-2 rounded-full bg-[var(--kalfu-light)] text-[var(--kalfu-blue)]">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="font-medium text-slate-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl group"
                    >
                        {/* Slideshow of images */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/team/20260117_192132.jpg.jpeg"
                                alt="Equipo Kalfu"
                                fill
                                className="object-cover transition-opacity duration-1000 animate-fade-in-out"
                            />
                            {/* Note: Ideally we setup a client-side interval to switch images, 
                                but for simplicity/robustness in a "static" like component without state refactor to full slideshow logic, 
                                I'll stick to one good representative image from the team folder for the main slot, 
                                as the Team section will show the rest. 
                                OR I can make this a simple 2-3 image fade. 
                                Let's use one high quality one for now to ensure stability, 
                                as the user said "usalas para agregarlas por aqui y por alla".
                                I will pick a nice one. 
                                '20260117_192132.jpg.jpeg' seems recent.
                             */}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--kalfu-blue)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white text-lg font-medium border-l-4 border-[var(--kalfu-lime)] pl-4">
                                "El bienestar es el estado natural del ser."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
