import {Button, Modal} from "antd";
import {useEffect, useState} from "react";
import Image from "next/image";
import ProjectSelection from "@/components/InvestmentJourney/ProjectSelection";

const InvestmentJourney = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('user') !== null) {
                setUser(localStorage.getItem('user'))
            }
        }
    }, [],)
    const [clicked, setClicked] = useState(false);
    return (
        <div className={"flex flex-col items-center justify-center w-full h-full"}>
        <div className={"flex text-center flex-col items-center justify-center w-full h-full gap-5"}>
            <Image className={"w-20 h-20"} src={"/Images/Logo.svg"} alt={""} width={50} height={50}/>
            <div>
                Hello <span className={""}>{user ? user.toString().substring(0, 10) : "Investor"}</span>,
            </div>
            <div>
                Welcome to the Investment
                Page
            </div>
            <div>
                For KYC purposes, you will be redirected to our partners' pages to proceed
            </div>
            <Button onClick={()=>{setClicked(true)}} className={"bg-button_border rounded-2xl  w-1/2 text-white border-button_border"}
                    size={"large"}>
                {"Start"}
            </Button>
            <Modal open={clicked} footer={null} onCancel={() => {
                setClicked(false)
            }
            }>
                <ProjectSelection/>
            </Modal>
            <Button className={"  w-1/2  text-button_border border-button_border rounded-2xl"} size={"large"}>
                {"Back To Projects"}
            </Button>

        </div>
    </div>)

}
export default InvestmentJourney;