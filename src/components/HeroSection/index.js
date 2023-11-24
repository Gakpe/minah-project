import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: '100%',
            transition: { duration: 30, repeat: Infinity, repeatType: 'mirror' },
        });
    }, [controls]);

    return (
        <div className="hero-section bg-gray-800 text-white h-screen flex items-center justify-center overflow-hidden relative">
            <motion.div
                className="scrolling-text text-9xl font-bold whitespace-nowrap"
                animate={controls}
                initial={{ x: '-100%' }}
            >
                Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!Scroll Me!
            </motion.div>
        </div>
    );
};

export default HeroSection;
