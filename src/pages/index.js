import ProfileSection from "@/components/ProfileSection";
import ProjectSection from "@/components/ProjectSection";
import BalanceSection from "@/components/BalanceSection";
import ContactUs from "@/components/ContactUs";
import FormSection from "@/components/FormSection";
import ProjectOverview from "@/components/ProjectComponents/ProjectOverview";
import ProjectTabsSection from "@/components/ProjectComponents/ProjectTabsSection";


export default function Home() {
    const projectData = [
        // Project 1 data
        {
            imageUrl: "/images/facebook.png",
            title: "Project title 1",
            amountInvested: "$ 1’000.00",
            investments: ["$ 500.00 on xx/xx/xxxx", "$ 500.00 on xx/xx/xxxx"],
            viewDetailsText: "View project details",
        },
        // Project 2 data
        {
            imageUrl: "/images/apple.png",
            title: "Project title 2",
            amountInvested: "$ 2’000.00",
            investments: ["$ 1,000.00 on xx/xx/xxxx", "$ 1,000.00 on xx/xx/xxxx"],
            viewDetailsText: "View project details",
        },
        // Add more project data as needed
    ];

    return (
        <main className={`flex h-full flex-col gap-4 items-center justify-between p-24 `}>
            <div className={"flex flex-row items-stretch h-full w-full justify-center gap-4"}>
                <div className={"w-1/5 flex-shrink h-full"}>
                    <ProfileSection/>
                </div>
                <div className={"w-1/2 flex-grow h-full"}>
                    <ProjectSection project={projectData}/>
                </div>
                <div className={"w-1/5 flex-shrink h-full"}>
                    <BalanceSection/>
                </div>
            </div>
            <div className={"flex flex-col items-center w-1/2 h-full justify-center gap-4"}>
                <ProjectSection/>
            </div>
            <div className={"flex flex-row items-center w-1/2 h-full justify-center gap-4"}>
                <BalanceSection/>
                <BalanceSection/>
                <BalanceSection/>
            </div>
            <div className={"flex flex-row items-center w-full h-full justify-center gap-4"}>
                <ContactUs title={"You have a Project?"} button={"Contact Us"}/>
                <ContactUs title={"You want to invest?"} button={"Join the community"}/>
            </div>
            <div className={"flex flex-row items-center w-1/2 h-full justify-center gap-4"}>
                <FormSection/>
            </div>

            <div className={"flex flex-row items-center  h-full justify-center gap-4"}>
                <ProjectOverview/>
            </div>
            <div className={"flex flex-row items-center w-full h-full justify-center gap-4"}>
                <ProjectTabsSection/>
                <div className={"w-1/4"}>
                <BalanceSection/>
                </div>
            </div>

        </main>
    );
}
