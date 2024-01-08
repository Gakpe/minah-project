import React from "react";
import Image from "next/image";
import {Button} from "antd";

const ProjectSection = ({project}) => {


    return (
        <div
            className={"bg-[#FAFAFA] shadow-xl  drop-shadow-xl flex flex-col gap-4 w-full   overflow-y-scroll rounded-md p-7 "}>
            <div className={"text-2xl font-bold "}><span className={"text-textOrange font-bold"}>My</span> Projects</div>
            <div className={"flex flex-col items-center gap-3 rounded-md justify-center w-full h-full"}>
                {project ? project.map((project, index) => (
                    <div key={index}
                         className={"flex flex-row py-7 px-5 items-center rounded-lg justify-start w-full h-full bg-[#FBF4F2] gap-7"}>
                        {/*<Image src={project.imageUrl} alt={""} width={100} height={100} className={" rounded-md"}/>*/}
                        <div className={"flex flex-col text-black items-start gap-2 justify-center"}>
                            <div className={"font-bold text-black text-lg"}>
                                {project.title}
                            </div>
                            <p className={"font-medium text-sm"}>Amount invested: {project.amountInvested}</p>
                            <div className="flex flex-row gap-2">
                                {/* Replace these with actual icons and their labels */}
                                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                                       src={"/Images/ProjectFeature01.svg"} alt={""} width={20} height={20}/>
                                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                                       src={"/Images/ProjectFeature02.svg"} alt={""} width={20} height={20}/>
                                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                                       src={"/Images/ProductFeature03.svg"} alt={""} width={20} height={20}/>
                                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                                       src={"/Images/ProjectFeature04.svg"} alt={""} width={20} height={20}/>
                                {/*<div className="icon">5</div>*/}
                                {/*<div className="icon">10</div>*/}
                                {/*<div className="icon">15</div>*/}
                            </div>
                            <div className={"flex flex-col items-center justify-center gap-1"}>
                                {project.investments.map((investment, index) => (
                                    <p key={index} className={"text-xs font-normal"}>{investment}</p>
                                ))}
                            </div>
                            <p className={"text-xs text-button_border underline"}>{project.viewDetailsText}</p>
                        </div>
                    </div>

                )) : <div className={"flex flex-col w-full h-full py-20 items-center justify-center gap-5"}>
                    <h1>You didn’t invest in any projects </h1>
                    <Button className={"bg-button_border  text-white"} size={"large"}>Projects / Discover the
                        universe</Button>
                </div>}
            </div>
        </div>
    );
};

export default ProjectSection;
