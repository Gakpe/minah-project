import React from 'react';
import {motion} from 'framer-motion';
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter()
    return (<div
        className=" w-full h-fit px-6 py-5 flex flex-row bg-white rounded-b-2xl drop-shadow-lg justify-between items-center">
        <div className=" items-center flex">
            {/* Logo on the left */}
            <motion.div className="NavbarBrand" whileHover={{scale: 1.1}}>
                logo
            </motion.div>
        </div>
        <div className="NavbarMenu justify-end items-center gap-8 flex">
            {/* Menu items on the right */}
            <motion.div className="NavbarLink">
                <div onClick={() => {
                    router.push("/Projects")
                }} className="Projects text-black text-sm font-normal  leading-tight">
                    Projects / Discover the universe
                </div>
            </motion.div>
            <motion.div className="NavbarLink">
                <div className="Litepaper text-black text-sm font-normal  leading-tight">
                    Litepaper
                </div>
            </motion.div>
            <motion.div className="NavbarLink">
                <div className="AboutUs text-black text-sm font-normal  leading-tight">
                    About us
                </div>
            </motion.div>
            <motion.div className="NavbarLink">
                <div className="JoinTheCommunity text-black text-sm font-normal  leading-tight">
                    Join the community
                </div>
            </motion.div>
            <motion.div className="NavbarLink">
                <div className="LoginSignup text-black text-sm font-normal  leading-tight">
                    Login/Signup
                </div>
            </motion.div>
        </div>
    </div>);
};

export default Navbar;
