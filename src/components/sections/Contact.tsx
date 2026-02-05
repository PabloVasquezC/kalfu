'use client';

import { motion } from 'framer-motion';
import { Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[var(--kalfu-calypso)]/5 to-[var(--kalfu-blue)]/5 rounded-full blur-3xl opacity-60" />

            <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--kalfu-blue)] mb-8 font-[var(--font-handwriting)]">
                        ¿Listo para iniciar tu sanación?
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        Reserva tu hora o consúltanos cualquier duda.<br className="hidden sm:inline" /> Estamos aquí para acompañarte en tu proceso de bienestar.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto gap-3 text-lg px-8 py-6 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-1 bg-[var(--kalfu-calypso)]"
                            onClick={() => window.open('https://wa.me/56912345678', '_blank')}
                        >
                            <Send size={20} />
                            Escríbenos al WhatsApp
                        </Button>

                        <div className="flex gap-4">
                            <Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-slate-200 text-slate-500 hover:text-[var(--kalfu-blue)] hover:border-[var(--kalfu-blue)]" onClick={() => window.open('#', '_blank')}>
                                <Instagram size={24} />
                            </Button>
                            <Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-slate-200 text-slate-500 hover:text-[var(--kalfu-blue)] hover:border-[var(--kalfu-blue)]" onClick={() => window.open('#', '_blank')}>
                                <Facebook size={24} />
                            </Button>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-slate-400">
                        Atendemos en Curicó, Región del Maule.
                    </p>
                </motion.div>
            </div>
        </section >
    );
};
