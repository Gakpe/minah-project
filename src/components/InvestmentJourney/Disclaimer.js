import Image from "next/image";
import {Button} from "antd";
import {useState} from "react";

const Disclaimer = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className={"flex flex-col gap-5 items-center justify-center py-10 w-full h-full"}>
            <div className={"flex text-center flex-col items-center justify-center w-full h-full gap-5"}>
                <Image className={"w-20 h-20"} src={"/Images/Logo.svg"} alt={""} width={50} height={50}/>
                <div>
                    You will be redirected to our Partenr Mt Pelerin to realise your KYC & transaction and get your NFT
                    “MNH” representating your participation to the [Projet sélectionné]
                </div>
            </div>
            <div className={"w-full h-full flex flex-col items-center justify-center gap-5 mt-10"}>
                <Button onClick={() => {
                    setClicked(true)
                }} className={"bg-button_border rounded-2xl  w-1/2 text-white border-button_border"}
                        size={"large"}>
                    {"Start"}
                </Button>
                <Button className={"  w-1/2  text-button_border border-button_border rounded-2xl"} size={"large"}>
                    {"Back To Projects"}
                </Button>
            </div>
        </div>
    )
}
export default Disclaimer;