import React from "react";
import {Button} from "antd";
import Image from "next/image";
import {magic, web3Magic} from "@/lib/magic";

const ProjectOverview = () => {
    console.log(magic)
    const handleLogin = async (provider) => {
        web3Magic.wallet.connectWithUI();
    }
    return (
        <div
            className={"flex flex-row justify-between items-center max-w-overviewSection w-overviewSection min-w-fit h-full p-7 rounded-md bg-primary"}>
            <div className={"flex flex-col gap-3 w-1/2 h-full  "}>

                <div className={"font-bold text-xl"}>Project 1 + Location</div>
                <p>Target: 100’000 MNH + Progress bar</p>
                <p className={"text-justify"}>Description text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi nulla arcu,
                    suscipit
                    eget sem quis, volutpat lobortis massa. Fusce vestibulum enim imperdiet, convallis lorem non,
                    sodales
                    neque. Cras faucibus est vitae odio facilisis posuere. Vestibulum id tortor ut arcu euismod
                    ullamcorper
                    non ut orci. Integer ornare nulla in nisi mattis iaculis. Praesent quis nisi orci. Nullam nulla
                    lacus,
                    bibendum nec euismod at, molestie sit amet ligula.
                </p>
                <Button onClick={handleLogin} className={"bg-button_border text-xs h-11 w-fit  text-white"}
                        size={"large"}>{"Connect To Invest"}</Button>

            </div>
            <div className={"w-1/2  h-full flex items-end justify-center"}>
                <Image src={"/Images/overview.svg"} alt={"project overview"} width={100} height={100}
                       className={" w-fit h-fitrounded-md"}/>
            </div>
        </div>
    )
}
export default ProjectOverview;