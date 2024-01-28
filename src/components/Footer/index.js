import {motion} from "framer-motion";
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={"flex flex-col items-center justify-center w-full h-fit px-6 py-10  "}>
            <div
                className="Footer w-full h-fit  py-10 px-5  flex-row justify-evenly items-center gap-5 inline-flex ">
                <div className="LogoWrapper   py-1 flex justify-start items-start">
                    <div className="Logo grow self-stretch justify-center items-center flex">
                        <div className="Copyright  flex flex-col justify-center items-center gap-8">
                            <motion.div
                                className="NavbarBrand hover:underline justify-start items-start flex"
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
                            <div className="text-xs hover:underline cursor-pointer">© 2023 minah.io</div>
                        </div>
                    </div>
                </div>
                <div className="Column  h-full flex-col justify-start items-start gap-6">
                    <div className="flex flex-col gap-3 h-full w-full ">
                        <div className="font-bold">Platform</div>
                        <div className=" flex flex-col h-full  gap-2">
                            <Link
                                href={"https://minah-io.gitbook.io/minah-litepaper-collection/more-details.../comment-ca-marche-en-bref"}
                                target={"_blank"}
                                className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight">
                                How does it work?
                            </Link>
                            <Link href={"https://tally.so/r/meRYNQ"} target={"_blank"}
                                  className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight">You
                                have a
                                project
                            </Link>
                            <Link href={"https://tally.so/r/w8x8BO"} target={"_blank"}
                                  className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight">You
                                want to
                                invest
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Column h-full flex-col justify-start items-start gap-6">
                    <div className="flex flex-col gap-3 h-full w-full ">
                        <div className="font-bold">COMPANY</div>
                        <div className=" flex flex-col h-full  gap-2">
                            <Link
                                className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight"
                                href={"https://minah.io"}
                                target={"_blank"}>    
                                Minah.io
                            </Link>
                            <div
                                className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight">
                                Terms and Conditions
                            </div>
                            <div
                                className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight">
                                About us
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Column h-full flex-col justify-start items-start gap-6">
                    <div className="flex flex-col gap-3 h-full w-full ">
                        <div className="font-bold">Ressources</div>
                        <div className=" flex flex-col h-full  gap-2">
                            <Link
                                className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight"
                                href="https://minah-io.gitbook.io/minah-litepaper-collection/minah-litepaper/welcome-to-minah.io"
                                target="_blank">
                                Litepaper
                            </Link>
                            <div
                                className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight"
                                href="https://tally.so/r/w8x8BO"
                                target="_blanck">
                                Community
                            </div>
                            {/*<div className="Link  text-black text-sm font-normal font-inter leading-tight">You want to invest</div>*/}
                        </div>
                    </div>
                </div>
                <div className="Column h-full flex-col justify-start items-start gap-6">
                    <div className="flex flex-col gap-3 h-full w-full ">
                        <div className="font-bold">Help</div>
                        <div className=" flex flex-col h-full  gap-2">
                            <div
                                className="Link  text-black text-sm font-normal font-inter hover:underline cursor-pointer leading-tight">
                                    Support
                            </div>
                       

                            {/*<div className="Link  text-black text-sm font-normal font-inter leading-tight">You want to invest</div>*/}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Footer;