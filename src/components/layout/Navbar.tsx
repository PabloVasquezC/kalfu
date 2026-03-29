'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Servicios', href: '#services' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-4 px-4 translate-y-0' : 'pt-0 px-0'
                }`}
        >
            <div className={`container-custom transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-soft py-3 rounded-full border border-white/20 px-6 md:px-10' : 'bg-transparent py-6 overflow-hidden'
                } flex items-center justify-between`}>
                <Link href="/" className="relative h-12 w-32 md:w-40">
                    <img
                        src="/logo-text.png"
                        alt="Kalfú Terapias Holísticas"
                        className="object-contain h-full w-full"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-semibold text-slate-600 hover:text-[var(--kalfu-blue)] transition-all flex flex-col items-center group"
                        >
                            {link.name}
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--kalfu-calypso)] opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2" />
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/56912345678"
                        target="_blank"
                        className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[var(--kalfu-blue)] to-[var(--kalfu-calypso)] text-white text-xs font-bold hover:shadow-glow hover:-translate-y-0.5 transition-all uppercase tracking-widest shadow-soft"
                    >
                        Reservar
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[var(--kalfu-blue)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-4 right-4 mt-2 bg-white shadow-strong md:hidden p-8 rounded-2xl border border-slate-100"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[var(--kalfu-blue)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="https://wa.me/56912345678"
                                target="_blank"
                                className="w-full text-center py-3 rounded-xl bg-[var(--kalfu-calypso)] text-white font-semibold"
                                onClick={() => setIsOpen(false)}
                            >
                                Reservar Hora
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
