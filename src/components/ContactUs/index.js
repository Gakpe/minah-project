import React from "react";
import {Button} from "antd";

const ContactUs = ({title, button}) => {

    return (
        <div
            className={"flex flex-col items-start gap-3 justify-end w-full rounded-md h-contactSection min-h-fit pb-10 px-10 max-h-contactSection bg-primary"}>
            <div className={"font-medium text-lg"}>{title ? title : ""}</div>
            <Button className={"bg-button_border text-white"} size={"large"}>{button ? button : ""}</Button>

        </div>
    )

}
export default ContactUs;