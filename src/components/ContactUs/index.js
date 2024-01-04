import React from "react";
import {Button} from "antd";

const ContactUs = ({title, button}) => {

    return (
        <div
            className={"flex backk flex-col items-center gap-3 justify-end w-full rounded-md h-contactSection min-h-fit pb-10 px-10 max-h-contactSection bg-primary"}>
            <div className={"font-medium text-white text-lg"}>{title ? title : ""}</div>
            <Button onClick={() => {

            }} className={"gradiented  rounded-full px-3 py-2 h-fit w-44 text-white "} size={"large"}>
                Contact Us
            </Button>

        </div>
    )

}
export default ContactUs;