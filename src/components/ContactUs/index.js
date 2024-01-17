import React from "react";
import {Button} from "antd";

const ContactUs = ({title, button}) => {

    return (
        <div
            className={"flex backk flex-col  items-start gap-3 justify-end w-4/5 rounded-md h-contactSection  pb-10 px-10 max-h-contactSection "}>
            <div className={"font-medium text-white text-lg"}>{title ? title : ""}</div>
            <Button onClick={() => {

            }} className={"gradiented hover:underline hover:scale-105 hover:duration-300 hover:font-bold hover:border-textOrange rounded-full px-3 py-2 h-fit w-44 text-white "} size={"large"}>
                Contact Us
            </Button>

        </div>
    )

}
export default ContactUs;