import React from "react";
import {Button} from "antd";

const ContactUs = () => {

    return (
        <div className={"flex flex-col items-end justify-end w-full rounded-md max-h-contactSection bg-primary"}>
            <div>You have a project?</div>
            <Button className={"bg-button_border text-white"} size={"large"}>Contact Us</Button>

        </div>
    )

}
export default ContactUs;