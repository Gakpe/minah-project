import React from "react";
import MainLayout from "@/layouts/MainLayout";
import ProjectOverview from "@/components/ProjectComponents/ProjectOverview";
import ProjectTabsSection from "@/components/ProjectComponents/ProjectTabsSection";
import {Button} from "antd";
import {web3Magic} from "@/lib/magic";

const ProjectDetails = () => {
    const [account, setAccount] = React.useState(null);
    const handleLogout = async () => {
        await web3Magic.user.logout();
        setAccount(null);
    };

    return (<MainLayout>
        <div className={"flex  flex-col items-center justify-center gap-7 w-full h-full p-10"}>
            <p className={"w-full text-xs text-button_border"}>Back to Projects</p>
            <ProjectOverview/>
            <div className={"flex flex-row w-full gap-3"}>
                <ProjectTabsSection/>
                <div className={"flex gap-3 flex-col items-center justify-center w-1/4 h-full"}>
                    <div className={"flex w-full  flex-col p-5 gap-4 bg-primary rounded-md "}>
                        <div> Target: 100’000 MNH
                            ($ 40’000.00)
                        </div>
                        <Button onClick={handleLogout}
                                className={"bg-button_border h-11 text-white rounded-md"}>Invest</Button>
                    </div>
                    <div className={"flex w-full h-full flex-col p-5 gap-4 bg-primary rounded-md "}>
                        <div>
                            SDG Objectives
                        </div>
                        <ol className={"flex flex-col gap-5"}>
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