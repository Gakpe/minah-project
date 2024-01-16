import {Button, Modal} from "antd";
import {useEffect, useState} from "react";
import InvestmentJourney from "@/components/InvestmentJourney";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    const [user, setUser] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(true)
        }
    }, [])
    const [clicked, setClicked] = useState(false);
    return (

        <div
            className={"w-full HeroSection h-full flex flex-row  backgroundImagess  gap-10 items-center justify-center p-32 "}>
            <div className={"flex flex-col w-full h-full gap-5 items-center justify-center"}>
                <h1 className={"text-5xl break-all w-full HeroHeading font-semibold text-black "}>
                    <span className={"font-extrabold text-[#E27B30] HeroHeading text-5xl"}>Investing </span> in local <br/> African
                    real estate has <br/> never been easier
                </h1>

                <div className={"flex flex-row items-center  justify-start gap-5 w-full h-full"}>
                    {user ? <Link href={"https://tally.so/r/nGK8Lo"} target={"_blank"} className={"gradientedBackground text-lg px-3 py-2 h-fit w-fit hover:border-textOrange rounded-full text- text-white"}>Join the Community</Link> : <Button onClick={() => {

                        setClicked(true)
                    }} className={"gradiented hover:border-textOrange rounded-full ButtonMobile px-3 py-2 h-fit w-fit text-white "}
                                                              size={"large"}>
                        {user ? "Join the Community" : "Connect to Invest"}
                    </Button>}
                    <Button onClick={() => {
                        setClicked(true)
                    }} className={" bg-white border-textOrange ButtonMobile rounded-full px-3 py-2 h-fit w-fit gradientText "}
                            size={"large"}>
                        {user ? "Discover the universe" : "Connect to Invest"}
                    </Button>
                </div>
                <Modal open={clicked} footer={null} onCancel={() => {
                    setClicked(false)
                }}>
                    <InvestmentJourney/>
                </Modal>
            </div>
            <Image src={"/Images/MinahHero.svg"} className={"w-fit h-fit hover:scale-105 duration-300 transition-all ImageSection "}
                   height={50} width={50} alt={""}/>

        </div>

    )
}
export default HeroSection;