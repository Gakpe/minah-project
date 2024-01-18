import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {usePathname} from 'next/navigation';
import Login from '@/pages/Login';
import {Avatar, Modal} from "antd";
import Image from "next/image";
import Link from "next/link";
import {magic} from "@/lib/magic";

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [userInfo, setUserInfo] = useState(null);
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
            if(localStorage.getItem("userMetaData")){
                console.log(JSON.parse(localStorage.getItem("userMetaData")))
                const userData = JSON.parse(localStorage.getItem("userMetaData"))
                setUserInfo(userData.user)
            }
        }, []
    )
    const handleLogin = async () => {
        // setAccount(true);
        magic.wallet.connectWithUI().on('id-token-created', (params) => {

            const { idToken } = params

            console.log("HELLO  " +idToken)

            // send to your resource server for validation

            // ...

        });
    };

    const closeLoginPopup = () => {
        setAccount(false);
    };

    return (
        <div
            className=" w-full NavbarMobile  h-fit px-20 py-5 flex flex-row bg-[#FAFAFA] rounded-b-xl border-b  justify-between items-center">

            <div onClick={()=>{router.push("/")}} className=" cursor-pointer items-center flex">
                {/* Logo on the left */}
                <motion.div className="NavbarBrand" whileHover={{scale: 1.1}}>
                    <Image src={"/Images/minah_logo.svg"} alt={"logo"} width={100} height={50}/>
                </motion.div>
            </div>
            <div className="NavbarMenu  cursor-pointer justify-end items-center gap-10 flex">
                {/* Menu items on the right */}

                <motion.div className="NavbarLink hover:underline hover:scale-105 hover:duration-300 hover:font-bold">
                    <Link  href={"https://minah-io.gitbook.io/minah-litepaper-collection/minah-litepaper/welcome-to-minah.io"} target={"_blank"} className="Litepaper text-black text-sm   leading-tight">
                        Litepaper
                    </Link>
                </motion.div>
                <motion.div className="NavbarLink hover:underline hover:scale-105 hover:duration-300 hover:font-bold">
                    <div className="AboutUs text-black text-sm   leading-tight">
                        About us
                    </div>
                </motion.div>
                <motion.div className="NavbarLink hover:underline hover:scale-105 hover:duration-300 hover:font-bold ">
                    <Link href={"https://tally.so/r/nGK8Lo"} target={"_blank"} className="JoinTheCommunity text-black text-sm   leading-tight">
                        Join the community
                    </Link>
                </motion.div>
                {isLogin ?
                    <div className={"flex flex-row items-center hover:underline hover:scale-105 hover:duration-300 hover:font-bold justify-center gap-3"}>
                        <Avatar className={"bordered"} onClick={() => {
                            router.push("/Profile")
                        }} src={userInfo?.picture?.data
                            ? `data:image/svg+xml;base64,${userInfo.picture.data}`
                            : userInfo?.picture
                        } size={40}/>
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
                <motion.div className="NavbarLink hover:scale-105 hover:duration-300 font-bold  ">
                    <div
                        onClick={() => {
                            router.push('/Projects');
                        }}
                        className={`ProjectsMobile text-black text-sm p-3 font-normal ${
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
