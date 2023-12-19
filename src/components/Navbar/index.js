import React from 'react';
import {motion} from 'framer-motion';
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const router = useRouter()
    const pathName = usePathname()
    const isProjectActive = pathName.startsWith("/Projects") || pathName.startsWith("/ProjectDetails")
    // const isLitepaperActive = pathName.startsWith("/LitePaper")
    // const isAboutUsActive = pathName.startsWith("/AboutUs")
    // const isJoinTheCommunityActive = pathName.startsWith("/JoinTheCommunity")
    // const isLoginSignupActive = pathName.startsWith("/Login  ")
    return (<div
        className=" w-full  h-fit px-6 py-5 flex flex-row bg-white rounded-b-xl border-b  justify-between items-center">
        <div className=" cursor-pointer items-center flex">
            {/* Logo on the left */}
            <motion.div className="NavbarBrand" whileHover={{scale: 1.1}}>
                logo
            </motion.div>
        </div>
        <div className="NavbarMenu cursor-pointer justify-end items-center gap-8 flex">
            {/* Menu items on the right */}
            <motion.div className="NavbarLink">
                <div onClick={() => {
                    router.push("/Projects")
                }}
                     className={`Projects text-black text-sm font-normal ${isProjectActive ? "bg-button_border rounded-lg py-3 text-white px-4 duration-150 transition-all " : ""} leading-tight `}>
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
