import React, {useEffect, useState} from "react";
import MainLayout from "@/layouts/MainLayout";
import ProjectOverview from "@/components/ProjectComponents/ProjectOverview";
import ProjectTabsSection from "@/components/ProjectComponents/ProjectTabsSection";
import {Avatar, Breadcrumb, Button, Modal, Progress} from "antd";
import {magic} from "@/lib/magic";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {RightOutlined} from "@ant-design/icons";
import InvestmentJourney from "@/components/InvestmentJourney";

const ProjectDetails = () => {
    const [account, setAccount] = React.useState(null);
    const router = useRouter();
    const [clicked, setClicked] = React.useState(false);
    const [projectDetails, setProjectDetails] = React.useState();
    const [isLogin, setIsLogin] = React.useState(false);
    const [userInfo, setUserInfo] = useState(null);

    // const handleLogout = async () => {
    //     await magic.user.logout();
    //     setAccount(null);
    // };
    const maxInvested = userInfo?.totalAmountInvested === 40000 || userInfo.totalAmountInvested>40000;

    const handleLogout = async () => {

        setClicked(true);
    };
    useEffect(() => {
        if (typeof window !== "undefined") {

            if (localStorage.getItem("didToken")) {
                setIsLogin(true)
            }
            if(localStorage.getItem("userMetaData")){
                const data = JSON.parse(localStorage.getItem("userMetaData"))
                setUserInfo(data.user)
            }
            if(localStorage.getItem("projectDetails")){
                setProjectDetails(JSON.parse(localStorage.getItem("projectDetails")))
            }
        }
    },[])
    const percent = userInfo?.totalAmountInvested >= 40000 ? 100 : ((userInfo?.totalAmountInvested / 40000) * 100).toFixed(2);
    return (

        <MainLayout>
            <Modal className={"w-3/6 "} rootClassName={"bg-[#FAFAFA]"} open={clicked} footer={null} onCancel={() => {
                setClicked(false)
            }}>
                <InvestmentJourney/>
            </Modal>
            <title>Minah | Project Details</title>
            <link rel="icon" href="/Images/favicon.png"/>

            <div className={"flex  flex-col items-center justify-center gap-7 w-full h-full p-10"}>
                <Breadcrumb separator={<RightOutlined/>} className={"w-full"}>
                    <Breadcrumb.Item className={"text-black"}>
                        <Link className={"text-black font-extrabold"} href={"/"}>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className={"text-black"}>
                        <Link className={"text-black font-extrabold"} href={"/Projects"}>Projects</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className={"text-textOrange"}>
                        <Link className={"text-textOrange font-extrabold"} href={"/Projects/ProjectDetails"}>Project
                            Title 01</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <ProjectOverview/>
                <div className={"flex flex-row w-full gap-8"}>
                    <ProjectTabsSection/>
                    <div className={"flex gap-8 flex-col items-center justify-center w-1/4 h-full"}>
                        {isLogin ?
                            <div className={"flex w-full  flex-col p-5 gap-4 bg-[#FAFAFA] drop-shadow-lg rounded-md "}>
                                <div className={"flex w-full flex-row gap-4 items-center"}>
                                    <Avatar className={"bordered"} onClick={() => {
                                        router.push("/Profile")
                                    }} src={userInfo?.picture?.data
                                        ? `data:image/svg+xml;base64,${userInfo.picture.data}`
                                        : userInfo?.picture
                                    } size={40}/>
                                    <p className={"w-3/5"}>You already invested {userInfo?.totalAmountInvested}$
                                        in this project</p>

                                </div>
                                <div className={"text-textOrange text-xl font-extrabold"}><span
                                    className={"text-black"}>Target:</span> 100’000 MNH
                                    ($ 40’000.00)
                                </div>
                                <p className={"text-sm text-gray-600 tracking-widest"}>Min/Max amount</p>
                                <Progress percent={percent}/>

                                <Button disabled={maxInvested} onClick={handleLogout}
                                        className={" h-11 w-4/5 text-white backgroundGradient rounded-full"}>Invest in
                                    this
                                    Project</Button>
                            </div> :
                            <div className={"flex w-full  flex-col p-5 gap-4 bg-[#FAFAFA] drop-shadow-lg rounded-md "}>
                                <div className={"text-textOrange text-xl font-extrabold"}><span
                                    className={"text-black"}>Target:</span> 100’000 MNH
                                    ($ 40’000.00)
                                </div>

                                <div className={" items-center text-center"}>
                                    <Button onClick={handleLogout}
                                            className={"bg-button_border backgroundGradient w-4/5 h-11 text-md text-white rounded-full"}>Invest</Button>
                                </div>
                            </div>
                        }

                        <div
                            className={"flex w-full h-full flex-col py-5 px-5 gap-4 bg-[#FAFAFA] rounded-lg drop-shadow-lg "}>
                            <div className={"font-bold text-black text-xl"}>
                                <span className={"text-textOrange font-bold"}> SDG </span> Objectives
                            </div>
                            <ol className={"flex flex-col gap-3 text-black font-bold"}>
                                <li>
                                    Objective 1
                                </li>
                                <li>
                                    Objective 2
                                </li>
                                <li>
                                    Objective 2
                                </li>

                            </ol>
                        </div>

                    </div>
                </div>


            </div>

        </MainLayout>)
}
export default ProjectDetails;