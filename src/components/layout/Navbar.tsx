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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
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
                        href="https://wa.me/56912345678" // Placeholder, should be updated
                        target="_blank"
                        className="px-5 py-2.5 rounded-full bg-[var(--kalfu-calypso)] text-white text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-[var(--kalfu-calypso)]/20"
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
                        className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden p-6 border-t"
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
