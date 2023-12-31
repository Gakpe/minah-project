import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {usePathname} from 'next/navigation';
import Login from '@/pages/Login';
import {Avatar, Modal} from "antd";
import Image from "next/image";

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const isProjectActive =
        pathName.startsWith('/Projects') || pathName.startsWith('/ProjectDetails');
    // const isLitepaperActive = pathName.startsWith("/LitePaper")
    // const isAboutUsActive = pathName.startsWith("/AboutUs")
    // const isJoinTheCommunityActive = pathName.startsWith("/JoinTheCommunity")
    // const isLoginSignupActive = pathName.startsWith("/Login  ")
    const [account, setAccount] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(
        () => {
            if (localStorage.getItem("didToken")) {
                setIsLogin(true)
            }
        }
    )
    const handleLogin = async () => {
        setAccount(true);
    };

    const closeLoginPopup = () => {
        setAccount(false);
    };

    return (
        <div
            className=" w-full  h-fit px-20 py-5 flex flex-row bg-[#FAFAFA] rounded-b-xl border-b  justify-between items-center">
            {account && (
                <Modal
                    visible={account}
                    className=" h-fit flex  "
                    footer={[]}
                >
                    <Login/>
                </Modal>
            )}
            <div onClick={()=>{router.push("/")}} className=" cursor-pointer items-center flex">
                {/* Logo on the left */}
                <motion.div className="NavbarBrand" whileHover={{scale: 1.1}}>
                    <Image src={"/Images/minah_logo.svg"} alt={"logo"} width={100} height={50}/>
                </motion.div>
            </div>
            <div className="NavbarMenu cursor-pointer justify-end items-center gap-10 flex">
                {/* Menu items on the right */}

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
                <motion.div className="NavbarLink ">
                    <div className="JoinTheCommunity text-black text-sm font-normal  leading-tight">
                        Join the community
                    </div>
                </motion.div>
                {isLogin ?
                    <div className={"flex flex-row items-center hover:underline justify-center gap-3"}>
                        <Avatar className={"bordered"} onClick={() => {
                            router.push("/Profile")
                        }} src={"/Images/facebook.png"} size={40}/>
                        <div className={"text-sm gradientText"}>
                            {localStorage.getItem("user").substring(0, 10)}
                        </div>
                    </div> : <motion.div className="NavbarLink w-fit h-fit ">
                        <div onClick={handleLogin}
                             className="LoginSignup   w-full h-full px-4 py-3 text-black text-sm font-normal  leading-tight">
                            <Image src={"/Images/LoginButton.svg"} alt={""} width={75} height={75}/>
                        </div>
                    </motion.div>
                }
                <motion.div className="NavbarLink  ">
                    <div
                        onClick={() => {
                            router.push('/Projects');
                        }}
                        className={`Projects text-black text-sm p-3 font-normal ${
                            isProjectActive
                                ? 'gradiented rounded-full text-white  duration-150 transition-all '
                                : 'gradiented rounded-full text-white  duration-150 transition-all '
                        } leading-tight `}
                    >
                        Projects / Discover the universe
                    </div>
                </motion.div>


            </div>

        </div>
    );
};

export default Navbar;
