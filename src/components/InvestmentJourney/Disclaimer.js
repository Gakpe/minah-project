import Image from "next/image";
import {Button, Modal} from "antd";
import {useState} from "react";
import {postInvestment} from "../../../util";
import Success from "@/components/Popups/Success";
import Error from "@/components/Popups/Error";

const Disclaimer = () => {
    const [clicked, setClicked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    return (<div className={"flex flex-col gap-5 items-center justify-center py-10 w-full h-full"}>
        <div className={"flex text-center flex-col items-center justify-center w-full h-full gap-5"}>
            <Image className={"w-20 h-20"} src={"/Images/Logo.svg"} alt={""} width={50} height={50}/>
            <h1 className={"text-3xl font-bold"}>
                <span className={"text-textOrange "}>Lorem</span> Ipsum
            </h1>
            <div className={"w-1/2"}>
                You will be redirected to our Partenr Mt Pelerin to realise your KYC & transaction and get your NFT
                “MNH” representating your participation to the [Projet sélectionné]
            </div>
            <h1 className={"text-3xl font-bold text-textOrange"}>[Projet sélectionné]</h1>
        </div>
        <div className={"w-full h-full flex flex-col items-center justify-center gap-5 mt-10"}>
            <Button onClick={() => {
                postInvestment(4500, "6570695c42762db7a1798270").then((res) => {
                    console.log(res)
                    if (res.responseCode === 200) {
                        setSuccess(true)
                    } else {
                        setError(true)
                    }
                })
                setClicked(true)
            }} className={"gradiented rounded-full hover:border-textOrange mt-5 w-1/3 text-white "}
                    size={"large"}>
                {"Continue"}
            </Button><Button  className={"  mt-5 w-1/3 gradientText border-none "} size={"large"}>
            {"Close"}
        </Button>
        </div>
        <Modal open={success} onCancel={() => {
            setSuccess(false)
            router.push("/Profile")

        }} footer={null}>
            <Success/>
        </Modal>
        <Modal open={error} onCancel={() => {
            setError(false)
            router.push("/Profile")

        }} footer={null}>
            <Error/>
        </Modal>
    </div>)
}
export default Disclaimer;