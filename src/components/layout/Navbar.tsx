'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
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
        { name: 'Equipo', href: '#team' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' 
                    : 'bg-transparent'
            }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="relative h-10 w-28 md:w-32">
                        <img
                            src="/logo-text.png"
                            alt="Kalfu Terapias Holisticas"
                            className="object-contain h-full w-full"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-[var(--kalfu-blue)] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--kalfu-blue)] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="https://wa.me/56912345678"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--kalfu-blue)] text-white text-sm font-semibold hover:bg-[var(--kalfu-dark)] transition-colors shadow-sm"
                        >
                            <Phone size={16} />
                            Reservar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-[var(--kalfu-blue)] transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 shadow-lg"
                    >
                        <div className="container-custom py-4">
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="px-4 py-3 text-slate-700 hover:text-[var(--kalfu-blue)] hover:bg-slate-50 rounded-lg font-medium transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="https://wa.me/56912345678"
                                    target="_blank"
                                    className="mt-2 flex items-center justify-center gap-2 py-3 rounded-lg bg-[var(--kalfu-blue)] text-white font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={18} />
                                    Reservar Hora
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
