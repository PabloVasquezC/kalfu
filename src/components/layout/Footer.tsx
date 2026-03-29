import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="footer-padding bg-slate-900 text-slate-300 py-24 font-sans relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--kalfu-blue)] via-[var(--kalfu-calypso)] to-[var(--kalfu-blue)] opacity-50" />
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-16">
                {/* Brand */}
                <div className="space-y-8">
                    <Link href="/" className="inline-block transform hover:scale-105 transition-transform">
                        <img src="/logo-text.png" alt="Kalfú" className="h-12 invert brightness-0" />
                    </Link>
                    <p className="text-base leading-relaxed text-slate-400 font-medium">
                        Espacio de sanación y bienestar integral en Curicó. Reconectando con lo sagrado y el equilibrio emocional desde nuestras raíces.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Enlaces Rápidos</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-[var(--kalfu-calypso)] transition-colors">Inicio</Link></li>
                        <li><Link href="#about" className="hover:text-[var(--kalfu-calypso)] transition-colors">Nosotros</Link></li>
                        <li><Link href="#services" className="hover:text-[var(--kalfu-calypso)] transition-colors">Servicios</Link></li>
                        <li><Link href="#contact" className="hover:text-[var(--kalfu-calypso)] transition-colors">Contacto</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Terapias</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="text-slate-400">Reiki Usui</li>
                        <li className="text-slate-400">Flores de Bach</li>
                        <li className="text-slate-400">Sonoterapia</li>
                        <li className="text-slate-400">Masajes Terapéuticos</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Contacto</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-[var(--kalfu-calypso)] shrink-0 mt-0.5" />
                            <span>Curicó, Región del Maule</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-[var(--kalfu-calypso)] shrink-0" />
                            <span>+56 9 1234 5678</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-[var(--kalfu-calypso)] shrink-0" />
                            <span>contacto@kalfu.cl</span>
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-10">
                        <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[var(--kalfu-blue)] hover:text-white transition-all flex items-center justify-center border border-white/10 hover:border-transparent group">
                            <Instagram size={22} className="group-hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[var(--kalfu-blue)] hover:text-white transition-all flex items-center justify-center border border-white/10 hover:border-transparent group">
                            <Facebook size={22} className="group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-custom mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Kalfú Terapias Holísticas. Todos los derechos reservados.</p>
                <p>
                    Sitio web construido por <a href="https://fluxia.cl" target="_blank" rel="noopener noreferrer" className="text-[var(--kalfu-calypso)] hover:underline font-medium">Fluxia</a>
                </p>
            </div>
        </footer>
    );
};
