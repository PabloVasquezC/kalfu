import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-5">
                            <img src="/logo-text.png" alt="Kalfu" className="h-10 brightness-0 invert" />
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 mb-6">
                            Espacio de sanacion y bienestar integral en Curico. Reconectando con lo sagrado y el equilibrio emocional.
                        </p>
                        <div className="flex gap-3">
                            <Link 
                                href="#" 
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--kalfu-blue)] transition-colors flex items-center justify-center group"
                            >
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </Link>
                            <Link 
                                href="#" 
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--kalfu-blue)] transition-colors flex items-center justify-center group"
                            >
                                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Enlaces</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-slate-400 hover:text-[var(--kalfu-calypso)] transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-sm text-slate-400 hover:text-[var(--kalfu-calypso)] transition-colors">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm text-slate-400 hover:text-[var(--kalfu-calypso)] transition-colors">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-sm text-slate-400 hover:text-[var(--kalfu-calypso)] transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Terapias</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-slate-400">Reiki Usui</li>
                            <li className="text-sm text-slate-400">Flores de Bach</li>
                            <li className="text-sm text-slate-400">Sonoterapia</li>
                            <li className="text-sm text-slate-400">Masajes Terapeuticos</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin size={16} className="text-[var(--kalfu-calypso)] mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400">Curico, Region del Maule</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-[var(--kalfu-calypso)] flex-shrink-0" />
                                <span className="text-slate-400">+56 9 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail size={16} className="text-[var(--kalfu-calypso)] flex-shrink-0" />
                                <span className="text-slate-400">contacto@kalfu.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        {new Date().getFullYear()} Kalfu Terapias Holisticas. Todos los derechos reservados.
                    </p>
                    <p className="text-xs text-slate-500">
                        Sitio web por{' '}
                        <a 
                            href="https://fluxia.cl" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[var(--kalfu-calypso)] hover:underline"
                        >
                            Fluxia
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
