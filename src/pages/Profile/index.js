import ProfileSection from "@/components/ProfileSection";
import ProjectSection from "@/components/ProjectSection";
import BalanceSection from "@/components/BalanceSection";
import ContactUs from "@/components/ContactUs";
import MainLayout, {getLayout} from "@/layouts/MainLayout";
import {useEffect, useState} from "react";

const Home = () => {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(
        () => {
            if (typeof window !== "undefined") {
                if (localStorage.getItem("userInfo")) {
                    setUserInfo(JSON.parse(localStorage.getItem("userInfo")))
                }
            }
        }, []
    )
    const projectData = [{
        id: 1,
        imageUrl: "/Images/facebook.png",
        title: "Project title 1",
        amountInvested: "$1,000.00",
        investments: ["$500.00 on xx/xx/xxxx", "$500.00 on xx/xx/xxxx"],
        viewDetailsText: "View project details",
    }, {
        id: 2,
        imageUrl: "/Images/apple.png",
        title: "Project title 2",
        amountInvested: "$2,000.00",
        investments: ["$1,000.00 on xx/xx/xxxx", "$1,000.00 on xx/xx/xxxx"],
        viewDetailsText: "View project details",
    }, // Add more project data as needed
    ];

    return (<MainLayout>
        <title>Minah | Profile</title>
        <div className={"flex flex-col items-center backgroundColored justify-center py-20 gap-8 w-full h-full "}>
            <div className={"flex flex-row w-full px-20 items-center justify-center gap-10 h-full"}>
                <div className={"w-1/6 sm:w-full h-full"}>
                    <ProfileSection userInfo={userInfo?userInfo:null} verified={true}/>
                </div>
                <div className={"w-1/2 sm:w-full h-full"}>
                    <ProjectSection project={projectData}/>

                </div>
                <div className={"w-1/6 sm:w-full h-full"}>
                    <BalanceSection/>
                </div>

            </div>
            <div className={"flex flex-row mobileContact gap-3"}>
                <ContactUs title={"You are located in west Africa and you need financing for your project?"}
                           button={"Contact Us"}/>
                <ContactUs
                    title={"You are located in west Africa and you need financing for your project?"}
                    button={"Contact Us"}/>
            </div>
        </div>
    </MainLayout>);
};

Home.getLayout = getLayout;
export default Home;
