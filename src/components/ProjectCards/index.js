import {Button} from "antd";
import {useRouter} from "next/router";
import Image from "next/image";
import {useEffect, useState} from "react";

const ProjectCard = ({title, description, onExplore, onInvest, projectDetails, image, bg}) => {
    const router = useRouter();
    const [users,setUser] = useState()
    console.log("here is projectDetails :", projectDetails)
useEffect(()=>{
    if(typeof window !== "undefined"){
        const user = localStorage.getItem("user")
        if(user!==""&& user!=null){
            setUser(user)
        }
    }
})
    return (
        <div className={`${image?"project-card":"project-card2 "} drop-shadow-lg ${bg?`bg-white/60`:"bg-[#FAFAFA]"}  px-10 py-5`}>
           {/* <div className="title-section testClass py-5"  onClick={() => {
                localStorage.setItem("projectDetails", JSON.stringify(projectDetails))
                router.push("/ProjectDetails")
            }}>
            */}
            <div className="title-section testClass py-5">
                <h1 className="text-black text-5xl font-extrabold"><span className={"title"}>Alpha project</span> - Lomé/Kovié
                </h1>
            </div>
            <p className="description text-justify">{description}</p>
            <div className="icon-section">
                {/* Replace these with actual icons and their labels */}
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                       src={"/Images/ProjectFeature01.svg"} alt={""} width={60} height={60}/>
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                       src={"/Images/ProjectFeature02.svg"} alt={""} width={60} height={60}/>
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                       src={"/Images/ProductFeature03.svg"} alt={""} width={60} height={60}/>
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"}
                       src={"/Images/ProjectFeature04.svg"} alt={""} width={60} height={60}/>
                {/*<div className="icon">5</div>*/}
                {/*<div className="icon">10</div>*/}
                {/*<div className="icon">15</div>*/}
            </div>
            <div className="button-section">
                {/*
                <Button className="text-white hover:border-textOrange rounded-full gradiented" size="large"
                        onClick={onInvest}>
                    {users? "Invest In this Project":"Connect to invest"}
                </Button>
                */}

                <Button className="text-black rounded-full gradientText border-textOrange" size="large"
                        href="https://tally.so/r/w8x8BO"
                        target="_blank">
                    Be a early investor 
                </Button>
            </div>
        </div>
    );
};

export default ProjectCard;
