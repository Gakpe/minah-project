import React from "react";
import {Button} from "antd";

const ContactUs = ({title, button}) => {

    return (
        <div
            className={"flex backk flex-col  items-start gap-3 justify-end w-full rounded-2xl h-contactSection  pb-10 px-10 max-h-contactSection "}>
            <div className={"font-bold text-white text-4xl"}>{title ? title : ""}</div>
            <Button onClick={() => {

            }} className={" hover:underline hover:scale-105 hover:duration-300 hover:font-bold bg-white text-black rounded-full px-3 py-2 h-fit w-44  "} size={"large"}>
                {button}
            </Button>

        </div>
    )

}
export default ContactUs;