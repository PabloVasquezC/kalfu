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

const teamImages = [
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

export const Team = () => {
    // Duplicate images for seamless infinite scroll (we need enough duplicates to fill screen + buffer)
    const baseImages = [...teamImages, ...teamImages, ...teamImages];

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
        let moveBy = directionFactor.current * 0.5 * (delta / 1000); // reduced base speed from 5 to 0.5

        // Add scroll velocity effect if desired, or just keep it steady
        if (velocityFactor.get() !== 0) {
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
        }

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <section id="team" className="py-24 bg-[var(--kalfu-light)] overflow-hidden">
            <div className="container-custom mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--kalfu-blue)] mb-6 font-[var(--font-handwriting)]">
                        Nuestro Equipo
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Conoce a las personas que hacen posible la magia en Kalfu. Un equipo dedicado a tu bienestar.
                    </p>
                </motion.div>
            </div>

            <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                    className="flex gap-6 w-max"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={() => {
                        // Keep the motion going? - handled by animation frame reading direction
                    }}
                    onDrag={(event, info) => {
                        // Change direction based on drag
                        if (info.delta.x > 0) {
                            directionFactor.current = 1;
                        } else if (info.delta.x < 0) {
                            directionFactor.current = -1;
                        }

                        // Add drag velocity to base movement
                        const dragVelocity = info.delta.x * 0.05;
                        baseX.set(baseX.get() + dragVelocity);
                    }}
                >
                    {baseImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="w-[300px] h-[400px] relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src={image}
                                alt={`Equipo Kalfu ${index + 1}`}
                                fill
                                className="object-cover pointer-events-none" // prevent image dragging ghost
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--kalfu-blue)]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
