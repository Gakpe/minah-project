import React from "react";
import {Button} from "antd";

const BalanceSection = () => {
    return (
        <div
            className={"bg-primary flex flex-col items-center justify-between w-full max-h-profileSection h-profileSection min-h-fit  rounded-md p-7  "}>
            <div className={"flex flex-col items-center  justify-between w-full h-full py-5"}>
                <div className={"bg-secondary  w-full h-fit text-white rounded-lg p-3"}>
                    Balance: $ 0.00
                </div>
                <div>
                    <Button className={"bg-button_border  text-white"} size={"large"}>Projects / Discover the
                        universe</Button>

                </div>
            </div>
        </div>
    )
}
export default BalanceSection;