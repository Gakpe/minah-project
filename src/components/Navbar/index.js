import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<div className="Navbar w-full h-16 px-6 bg-white rounded-lg shadow justify-center items-center inline-flex">
        <div className="Navbarcontainer h-16 justify-center items-center flex">
            <div className="NavbarContent flex-row gap-10 w-full h-16 justify-between items-center flex">
                <motion.div
                    className="NavbarBrand justify-start items-start flex"
                    whileHover={{scale: 1.1}}
                >
                    <motion.img
                        className="Logo w-36 h-9"
                        src="/Images/Logo.svg"
                        alt="Logo"
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.3}}
                    />
                </motion.div>
                <div className="NavbarMenu justify-start items-center gap-8 flex">
                    <motion.div
                        className="NavbarLink px-3 py-2 rounded-lg justify-start items-start flex cursor-pointer hover:bg-gradient-to-r from-amber-300 via-amber-500 to-[#F49CB0]"
                        whileHover={{ scale: 1.1 }}
                    >
                    <div className="AboutUs text-black text-sm font-normal font-['Inter'] leading-tight">
                            About us
                        </div>
                    </motion.div>
                    <motion.div
                        className="NavbarLink px-3 py-2 rounded-lg justify-start items-start flex cursor-pointer hover:bg-gradient-to-r from-amber-300 via-amber-500 to-[#F49CB0]"
                        whileHover={{ scale: 1.1 }}
                    >                        <div
                            className="JoinTheComunity text-black text-sm font-normal font-['Inter'] leading-tight">
                            Join the community
                        </div>
                    </motion.div>
                    <motion.div
                        className="NavbarLink px-3 py-2 rounded-lg justify-start items-start flex cursor-pointer hover:bg-gradient-to-r from-amber-300 via-amber-500 to-[#F49CB0]"
                        whileHover={{ scale: 1.1 }}
                    >                        <div className="Litepaper  text-black text-sm font-normal font-['Inter'] leading-tight">
                            Litepaper
                        </div>
                    </motion.div>
                    <motion.div
                        className="NavbarLink px-3 py-2 rounded-lg justify-start items-start flex cursor-pointer hover:bg-gradient-to-r from-amber-300 via-amber-500 to-[#F49CB0]"
                        whileHover={{ scale: 1.1 }}
                    >

                    <div className="Projects text-black text-sm font-normal font-['Inter'] leading-tight">
                            Projects
                        </div>
                    </motion.div>
                    <motion.div
                        className="NavbarButton w-36 h-12 px-5 py-2 bg-neutral-900 rounded-lg justify-center items-center gap-2 flex cursor-pointer"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={handleMenuToggle}
                    >
                        <div className="X999999 text-white text-base font-medium font-['Inter'] leading-snug">
                            0x999999
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        {/* Responsive Menu */}
        <AnimatePresence>
            {isMenuOpen && (<motion.div
                initial={{x: '100%'}}
                animate={{x: 0}}
                exit={{x: '100%'}}
                className="absolute top-16 right-0 w-64 bg-white shadow-lg h-full rounded-l-md border-l border-t border-gray-200 py-4"
            >
                {/* Add your menu items here */}
                <div className="px-4 py-2 cursor-pointer">Menu Item 1</div>
                <div className="px-4 py-2 cursor-pointer">Menu Item 2</div>
                <div className="px-4 py-2 cursor-pointer">Menu Item 3</div>
            </motion.div>)}
        </AnimatePresence>
    </div>);
};

export default Navbar;
