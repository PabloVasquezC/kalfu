import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-slate-300 py-16">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-bold text-white tracking-tight">Kalfú<span className="text-[var(--kalfu-calypso)]">.</span></Link>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Espacio de sanación y bienestar integral. Reconectando con lo sagrado y el equilibrio emocional desde nuestras raíces.
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
                    <div className="flex gap-4 mt-8">
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--kalfu-calypso)] hover:text-white transition-all">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--kalfu-calypso)] hover:text-white transition-all">
                            <Facebook size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-custom mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Kalfú Terapias Holísticas. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
