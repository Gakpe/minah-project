import React from "react";
import Image from "next/image";
import {Button} from "antd";
import {useRouter} from "next/router";

const Error = ({title, description, retry}) => {
    const router = useRouter();
    return (
        <div className={"flex flex-col items-center justify-center  gap-10 w-full h-full"}>
            <div className={"h-5 w-full gradientedBackground rounded-t-md text-transparent"}>Hello</div>
            <div className={"flex flex-col items-center justify-center  gap-10 w-full h-full py-8"}>
                <Image className={"w-20 h-20"} src={"/Images/Logo.svg"} alt={""} width={50} height={50}/>
                <div className={"flex flex-col items-center gap-3 justify-center w-full"}>
                    <div className={"text-4xl text-textOrange font-bold"}>
                        Error <span className={"text-black"}>Investing</span>

                    </div>
                    <p>Please check your informations and try again</p>
                </div>
                <Image className={"w-20 h-20"} src={"/Images/error.svg"} alt={""} width={50} height={50}/>
                <div className={"flex flex-col gap-4 items-center justify-center"}>
                    <Button className={"gradiented hover:border-textOrange rounded-2xl px-10  text-white "}
                            size={"large"}
                            onClick={retry}
                            >
                        {"Retry"}
                    </Button>
                    <Button className={"    gradientText border-none  rounded-2xl"} size={"large"}>
                        {"Get in Touch"}
                    </Button>

                </div>
            </div>
        </div>
    )
}
export default Error;