import {motion} from "framer-motion";
import React from "react";

const Footer = () => {
    return (
        <div
            className="Footer w-full h-52 bg-pink-100 px-6 py-4  rounded-t-2xl flex-row justify-between items-center gap-5 inline-flex ">
            <div className="LogoWrapper   py-1 flex justify-start items-start">
                <div className="Logo grow self-stretch justify-center items-center flex">
                    <div className="Copyright  flex flex-col justify-center items-center gap-8">
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
                        <div className="text-xs">© 2023 minah.io</div>
                    </div>
                </div>
            </div>
            <div className="Column h-full flex-col justify-start items-start gap-6">
                <div className="flex flex-col gap-3 h-full w-full ">
                    <div className="font-bold">Platform</div>
                    <div className=" flex flex-col h-full  gap-2">
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">How does it
                            work?
                        </div>
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">You have a
                            project
                        </div>
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">You want to
                            invest
                        </div>
                    </div>
                </div>
            </div>
            <div className="Column h-full flex-col justify-start items-start gap-6">
                <div className="flex flex-col gap-3 h-full w-full ">
                    <div className="font-bold">COMPANY</div>
                    <div className=" flex flex-col h-full  gap-2">
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">Minah.io</div>
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">Terms and
                            Conditions
                        </div>
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">About us</div>
                    </div>
                </div>
            </div>
            <div className="Column h-full flex-col justify-start items-start gap-6">
                <div className="flex flex-col gap-3 h-full w-full ">
                    <div className="font-bold">Ressources</div>
                    <div className=" flex flex-col h-full  gap-2">
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">Litepaper</div>
                        <div className="Link  text-black text-sm font-normal font-inter leading-tight">Community</div>
                        {/*<div className="Link  text-black text-sm font-normal font-inter leading-tight">You want to invest</div>*/}
                    </div>
                </div>
            </div>


        </div>

    )
}
export default Footer;