import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = () => {
    const controls = useAnimation();

    const animate = () => {
        controls.start({
            x: '100%',
            transition: { duration: 10, ease: 'linear' },

        });
        setTimeout(() => {
            controls.set({ x: '-100%' });
            animate(); // Restart the animation after completion
        }, 10000); // Adjust the timeout to match the animation duration
    };

    useEffect(() => {
        animate(); // Start the animation initially
    }, [controls]);

    return (
        <div className="hero-section bg-gray-800 text-white h-full flex items-center justify-center overflow-hidden ">
            <motion.div
                className="scrolling-text text-9xl font-bold whitespace-nowrap"
                animate={controls}
                initial={{ x: '-100%' }}
            >
                Scroll Me! Scroll Me!
                Scroll Me! Scroll Me!
                Scroll Me! Scroll Me!
                Scroll Me! Scroll Me!
            </motion.div>
        </div>
    );
};

export default HeroSection;
