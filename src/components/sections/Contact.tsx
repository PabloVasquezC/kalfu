'use client';

import { motion } from 'framer-motion';
import { Send, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactProps {
    data?: any;
}

export const Contact = ({ data }: ContactProps) => {
    const title = data?.title || "Listo para iniciar tu sanacion?";
    const description = data?.description || "Reserva tu hora o consultanos cualquier duda. Estamos aqui para acompañarte en tu proceso de bienestar.";
    const whatsapp = data?.whatsappNumber || "56912345678";
    const instagram = data?.instagramUrl || "#";
    const facebook = data?.facebookUrl || "#";
    const address = data?.address || "Curico, Region del Maule";

    return (
        <section id="contact" className="section-padding bg-slate-50 relative">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--kalfu-calypso)]/10 text-[var(--kalfu-dark)] text-sm font-semibold mb-4">
                            Contacto
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {description}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center flex-shrink-0">
                                    <MapPin size={20} className="text-[var(--kalfu-blue)]" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Ubicacion</p>
                                    <p className="font-semibold text-slate-800">{address}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center flex-shrink-0">
                                    <Phone size={20} className="text-[var(--kalfu-blue)]" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Telefono</p>
                                    <p className="font-semibold text-slate-800">+56 9 1234 5678</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <button 
                                onClick={() => window.open(instagram, '_blank')}
                                className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center text-slate-500 hover:text-[var(--kalfu-blue)] hover:shadow-card-hover transition-all"
                            >
                                <Instagram size={22} />
                            </button>
                            <button 
                                onClick={() => window.open(facebook, '_blank')}
                                className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center text-slate-500 hover:text-[var(--kalfu-blue)] hover:shadow-card-hover transition-all"
                            >
                                <Facebook size={22} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right - CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 border border-slate-100">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--kalfu-calypso)]/10 flex items-center justify-center mx-auto mb-4">
                                    <Send size={28} className="text-[var(--kalfu-blue)]" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    Escribenos por WhatsApp
                                </h3>
                                <p className="text-slate-600">
                                    Respuesta rapida y personalizada para agendar tu sesion
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="w-full gap-3 py-6 rounded-xl bg-[var(--kalfu-blue)] hover:bg-[var(--kalfu-dark)] text-white font-semibold text-base shadow-lg shadow-[var(--kalfu-blue)]/20"
                                onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank')}
                            >
                                <Send size={20} />
                                Iniciar conversacion
                            </Button>

                            <p className="text-center text-sm text-slate-500 mt-4">
                                Disponible de Lunes a Sabado, 9:00 - 20:00
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
