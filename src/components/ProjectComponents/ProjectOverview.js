import React from "react";
import {Button} from "antd";
import Image from "next/image";

const ProjectOverview = () => {
    return (
        <div className={"flex flex-row justify-between items-center max-w-overviewSection w-overviewSection min-w-fit h-full p-10 rounded-md bg-primary"}>
            <div className={"flex flex-col gap-3 w-1/2 h-full "}>

                <div className={"font-bold text-xl"}>Project 1 + Location</div>
                <p>Target: 100’000 MNH + Progress bar</p>
                <desc>Description text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla arcu,
                    suscipit
                    eget sem quis, volutpat lobortis massa. Fusce vestibulum enim imperdiet, convallis lorem non,
                    sodales
                    neque. Cras faucibus est vitae odio facilisis posuere. Vestibulum id tortor ut arcu euismod
                    ullamcorper
                    non ut orci. Integer ornare nulla in nisi mattis iaculis. Praesent quis nisi orci. Nullam nulla
                    lacus,
                    bibendum nec euismod at, molestie sit amet ligula.
                </desc>
                <Button className={"bg-button_border w-fit text-white"} size={"large"}>{"Connect To Invest"}</Button>

            </div>
            <div className={"w-1/2  flex items-end justify-center"}>
            <Image src={"/Images/overview.svg"} alt={"project overview"} width={100} height={100} className={" w-1/3 h-1/3 rounded-md"}/>
            </div>
        </div>
    )
}
export default ProjectOverview;