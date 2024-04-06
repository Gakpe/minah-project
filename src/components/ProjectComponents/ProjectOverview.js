import React, {useEffect, useState} from "react";
import {Button, Modal} from "antd";
import Login from "@/pages/Login";
import InvestmentJourney from "@/components/InvestmentJourney";

const ProjectOverview = ({projectDetails}) => {
    const [account, setAccount] = useState(false);
    const [idToken, setIdToken] = useState();

    const [isLogin, setIsLogin] = React.useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
   
            if (localStorage.getItem("didToken")) {
                setIsLogin(true)
            }
        }
    }, [account]);
    return (
        <div
            className={"flex flex-row  justify-between items-center  w-full h-full px-10 py-32  bg-[#FAFAFA] drop-shadow-lg project-card-detail"}>
            <div className={"flex flex-col gap-3 w-1/2 h-full  "}>

                <div className={" w-full  text-start text-5xl font-extrabold"}><span
                    className={"text-textOrange font-extrabold"}>Project</span> {projectDetails.name}
                </div>
                <p className={"text-start"}>Target: 100’000 MNH + Progress bar</p>
                <p className={"text-justify"}>{projectDetails.description}
                </p>
                <Button onClick={() => {
                    setAccount(true)
                }}
                        className={"bg-button_border text-sm hover:border-textOrange w-fit gradiented rounded-full text-white"}
                        size={"large"}>{isLogin ? "Invest in this Project" : "Connect To Invest"}</Button>

            </div>


            <Modal className={"w-3/6 h-full "} rootClassName={"bg-[#FAFAFA]"} open={account} footer={null} onCancel={() => {
                setAccount(false)
            }}>
                <InvestmentJourney/>
            </Modal>

        </div>
    )
}
export default ProjectOverview;