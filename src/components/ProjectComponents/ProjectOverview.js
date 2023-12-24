import React, {useEffect, useState} from "react";
import {Button} from "antd";
import Image from "next/image";
import {web3Magic} from "@/lib/magic";

const ProjectOverview = () => {
    const [account, setAccount] = useState(null);
    const [idToken, setIdToken] = useState();
    const connectWallet = async () => {
        const accounts = await web3Magic.wallet.connectWithUI().on('id-token-created', (params) => {

            const {idToken} = params;

            console.log(idToken);

            // send to your resource server for validation with the Magic Admin SDK

            // ...

        });
        console.log("here is accounts :", accounts)
    };
    const [isLogin, setIsLogin] = React.useState(false);
    useEffect(() => {

        if (typeof window !== "undefined") {

            if (localStorage.getItem("didToken")) {
                setIsLogin(true)
            }
        }
    }, [account]);

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
                <Button onClick={connectWallet} className={"bg-button_border text-xs h-11 w-fit  text-white"}
                        size={"large"}>{isLogin?"Invest in this Project":"Connect To Invest"}</Button>

            </div>
            <div className={"w-1/2  h-full flex items-end justify-center"}>
                <Image src={"/Images/overview.svg"} alt={"project overview"} width={100} height={100}
                       className={" w-fit h-fitrounded-md"}/>
            </div>
        </div>
    )
}
export default ProjectOverview;