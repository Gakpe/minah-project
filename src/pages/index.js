import ProfileSection from "@/components/ProfileSection";
import ProjectSection from "@/components/ProjectSection";
import BalanceSection from "@/components/BalanceSection";
import ContactUs from "@/components/ContactUs";
import FormSection from "@/components/FormSection";
import ProjectOverview from "@/components/ProjectComponents/ProjectOverview";
import ProjectTabsSection from "@/components/ProjectComponents/ProjectTabsSection";
import ProjectCards from "@/components/ProjectCards";
import MainLayout, {getLayout} from "@/layouts/MainLayout";

const Home = () => {
    const projectData = [
        {
            id: 1,
            imageUrl: "/images/facebook.png",
            title: "Project title 1",
            amountInvested: "$1,000.00",
            investments: ["$500.00 on xx/xx/xxxx", "$500.00 on xx/xx/xxxx"],
            viewDetailsText: "View project details",
        },
        {
            id: 2,
            imageUrl: "/images/apple.png",
            title: "Project title 2",
            amountInvested: "$2,000.00",
            investments: ["$1,000.00 on xx/xx/xxxx", "$1,000.00 on xx/xx/xxxx"],
            viewDetailsText: "View project details",
        },
        // Add more project data as needed
    ];

    return (
        <MainLayout>
            <div className={`flex flex-col items-center justify-between p-4 md:p-24 `}>
                <div className={"flex flex-col md:flex-row items-stretch w-full gap-4"}>
                    <div className={"md:w-1/5 flex-shrink"}>
                        <ProfileSection/>
                    </div>
                    <div className={"md:w-1/2 flex-grow"}>
                        <ProjectSection project={projectData}/>
                    </div>
                    <div className={"md:w-1/5 flex-shrink"}>
                        <BalanceSection/>
                    </div>
                </div>

                {/* Other sections and components */}
                <div className={"flex flex-col md:flex-row items-center w-full gap-4"}>
                    <ContactUs title={"You have a Project?"} button={"Contact Us"}/>
                    <ContactUs title={"You want to invest?"} button={"Join the community"}/>
                </div>

                <div className={"flex flex-col md:flex-row items-center w-full gap-4"}>
                    <FormSection/>
                </div>

                <div className={"flex flex-col md:flex-row items-center w-full gap-4"}>
                    <ProjectOverview/>
                </div>

                <div className={"flex flex-col md:flex-row items-center w-full gap-4"}>
                    <ProjectTabsSection/>
                    <div className={"md:w-1/4"}>
                        <BalanceSection/>
                    </div>
                </div>

                <div className={"flex flex-col md:flex-row items-center w-full gap-4"}>
                    <ProjectCards/>
                </div>
            </div>
        </MainLayout>
    );
};

Home.getLayout = getLayout;
export default Home;
