import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { magic } from '@/lib/magic';
import Login from '@/pages/Login';
import {Modal} from "antd";

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

    const handleLogin = async () => {
        setAccount(true);
    };

    const closeLoginPopup = () => {
        setAccount(false);
    };

    return (
        <div className=" w-full  h-fit px-6 py-5 flex flex-row bg-white rounded-b-xl border-b  justify-between items-center">
            <div className=" cursor-pointer items-center flex">
                {/* Logo on the left */}
                <motion.div className="NavbarBrand" whileHover={{ scale: 1.1 }}>
                    logo
                </motion.div>
            </div>
            <div className="NavbarMenu cursor-pointer justify-end items-center gap-8 flex">
                {/* Menu items on the right */}
                <motion.div className="NavbarLink">
                    <div
                        onClick={() => {
                            router.push('/Projects');
                        }}
                        className={`Projects text-black text-sm font-normal ${
                            isProjectActive
                                ? 'bg-button_border rounded-lg py-3 text-white px-4 duration-150 transition-all '
                                : ''
                        } leading-tight `}
                    >
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
                    <div onClick={handleLogin} className="LoginSignup text-black text-sm font-normal  leading-tight">
                        Login/Signup
                    </div>
                </motion.div>

            </div>
            {account && (
                <Modal
                    visible={account}
                    className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center bg-black bg-opacity-50"
                    footer={[]}
                >
                    <Login />
                </Modal>
            )}
        </div>
    );
};

export default Navbar;
