'use client';

import { motion } from 'framer-motion';
import { Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactProps {
    data?: any;
}

export const Contact = ({ data }: ContactProps) => {
    const title = data?.title || "¿Listo para iniciar tu sanación?";
    const description = data?.description || "Reserva tu hora o consúltanos cualquier duda. Estamos aquí para acompañarte en tu proceso de bienestar.";
    const whatsapp = data?.whatsappNumber || "56912345678";
    const instagram = data?.instagramUrl || "#";
    const facebook = data?.facebookUrl || "#";
    const address = data?.address || "Atendemos en Curicó, Región del Maule.";

    return (
        <section id="contact" className="section-padding bg-[var(--kalfu-light)] relative overflow-hidden px-4">
            {/* Main Rounded Contact Container */}
            <div className="absolute inset-4 md:inset-10 bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden -z-10 shadow-strong border border-white/50" />

            <div className="container-custom relative z-10 text-center max-w-4xl mx-auto py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-black text-slate-800 mb-8 tracking-tighter">
                        {title}
                        <div className="h-2 w-24 bg-[var(--kalfu-calypso)] mx-auto mt-6 rounded-full" />
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium text-balance">
                        {description}
                    </p>
 
                     <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto gap-4 text-sm px-12 py-8 rounded-full bg-gradient-to-r from-[var(--kalfu-blue)] to-[var(--kalfu-calypso)] hover:shadow-glow text-white font-black shadow-soft hover:shadow-strong transition-all uppercase tracking-widest border-none"
                            onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank')}
                        >
                            <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Escríbenos al WhatsApp
                        </Button>
 
                         <div className="flex gap-5">
                            <Button variant="outline" size="icon" className="w-16 h-16 rounded-full border-slate-200 bg-white text-slate-500 hover:text-[var(--kalfu-blue)] shadow-soft hover:shadow-strong transition-all border-none" onClick={() => window.open(instagram, '_blank')}>
                                <Instagram size={28} />
                            </Button>
                            <Button variant="outline" size="icon" className="w-16 h-16 rounded-full border-slate-200 bg-white text-slate-500 hover:text-[var(--kalfu-blue)] shadow-soft hover:shadow-strong transition-all border-none" onClick={() => window.open(facebook, '_blank')}>
                                <Facebook size={28} />
                            </Button>
                        </div>
                    </div>
 
                     <p className="mt-12 text-slate-400 font-bold uppercase tracking-widest text-xs">
                        {address}
                    </p>
                </motion.div>
            </div>
        </section >
    );
};
