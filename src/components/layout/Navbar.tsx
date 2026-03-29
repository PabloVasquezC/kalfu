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
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-0'
                }`}
        >
            <div className={`container-custom transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3 rounded-full' : 'bg-transparent py-4'
                } flex items-center justify-between`}>
                <Link href="/" className="relative h-12 w-32 md:w-40">
                    <img
                        src="/logo-text.png"
                        alt="Kalfú Terapias Holísticas"
                        className="object-contain h-full w-full"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-[var(--kalfu-blue)] hover:text-[var(--kalfu-calypso)] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--kalfu-calypso)] hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/56912345678"
                        target="_blank"
                        className="px-6 py-2 rounded-full bg-[var(--kalfu-blue)] text-white text-sm font-bold hover:bg-[var(--kalfu-calypso)] transition-all shadow-soft hover:shadow-strong uppercase tracking-wider"
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
