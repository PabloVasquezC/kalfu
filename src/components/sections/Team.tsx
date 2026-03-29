'use client';

import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';

interface TeamProps {
    data?: any;
}

const defaultImages = [
    '/images/team/20241124_163619.jpg.jpeg',
    '/images/team/20241124_163727.jpg.jpeg',
    '/images/team/20241124_163728.jpg.jpeg',
    '/images/team/20251022_190304.jpg.jpeg',
    '/images/team/20251217_154242.jpg.jpeg',
    '/images/team/20251217_154247.jpg.jpeg',
    '/images/team/20260105_193442.jpg.jpeg',
    '/images/team/20260111_184804.jpg.jpeg',
    '/images/team/20260115_183851.jpg.jpeg',
    '/images/team/20260117_192132.jpg.jpeg',
    '/images/team/20260117_192138.jpg.jpeg',
    '/images/team/IMG-20250903-WA0052.jpg.jpeg',
    '/images/team/IMG-20250903-WA0058.jpg.jpeg',
];

export const Team = ({ data }: TeamProps) => {
    const title = data?.title || "Nuestro Equipo";
    const description = data?.description || "Conoce a las personas que hacen posible la magia en Kalfu. Un equipo dedicado a tu bienestar.";
    
    // Convert Sanity images to URLs or use defaults
    const sanityImages = data?.images?.map((img: any) => urlFor(img).url()) || [];
    const displayImages = sanityImages.length > 0 ? sanityImages : defaultImages;

    // Duplicate images for seamless infinite scroll
    const baseImages = [...displayImages, ...displayImages, ...displayImages];

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // Control parameters
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * 0.5 * (delta / 1000);

        if (velocityFactor.get() !== 0) {
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
        }

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <section id="team" className="section-padding bg-white overflow-hidden">
            {/* Section Header */}
            <div className="container-custom mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--kalfu-calypso)]/10 text-[var(--kalfu-dark)] text-sm font-semibold mb-4">
                        Nuestro equipo
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Conoce a <span className="text-[var(--kalfu-blue)]">Kalfu</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>

            {/* Image Carousel */}
            <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing py-4">
                <motion.div
                    className="flex gap-4 w-max"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDrag={(event, info) => {
                        if (info.delta.x > 0) {
                            directionFactor.current = 1;
                        } else if (info.delta.x < 0) {
                            directionFactor.current = -1;
                        }
                        const dragVelocity = info.delta.x * 0.05;
                        baseX.set(baseX.get() + dragVelocity);
                    }}
                >
                    {baseImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="w-[260px] h-[340px] relative rounded-2xl overflow-hidden shadow-card flex-shrink-0 group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src={image}
                                alt={`Equipo Kalfu ${index + 1}`}
                                fill
                                className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
