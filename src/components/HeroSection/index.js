import {Button, Modal} from "antd";
import {useEffect, useState} from "react";
import InvestmentJourney from "@/components/InvestmentJourney";

const HeroSection = () => {
    const [user, setUser] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(true)
        }
    }, [])
    const [clicked, setClicked] = useState(false);
    return (

        <div className={"w-full h-full flex flex-col bg-secondary rounded-lg gap-10 items-center justify-center p-32 "}>
            <h1 className={"text-4xl break-all w-1/2 text-center font-bold text-white "}>
                Investing in local African real estate has never been easier
            </h1>
            <p className={"text-white text-sm"}>
                Lorem ipsum
            </p>
            <Button onClick={() => {
                setClicked(true)
            }} className={"bg-button_border  w-fit text-white border-button_border"} size={"large"}>
                {user ? "Start Investing" : "Connect to Invest"}
            </Button>
            <Modal open={clicked} footer={null} onCancel={() => {
                setClicked(false)
            }}>
                <InvestmentJourney/>
            </Modal>
        </div>

    )
}
export default HeroSection;