import ProfileSection from "@/components/ProfileSection";
import ProjectSection from "@/components/ProjectSection";
import BalanceSection from "@/components/BalanceSection";
import ContactUs from "@/components/ContactUs";
import MainLayout, {getLayout} from "@/layouts/MainLayout";

const Home = () => {
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
        <div className={"flex flex-col items-center justify-center py-20 gap-8 w-full h-full "}>
            <div className={"flex flex-row w-full px-20 items-center justify-center gap-4"}>
                <div className={"w-1/4 h-full"}>
                    <ProfileSection/>
                </div>
                <div className={"w-1/2 h-full"}>
                    <ProjectSection/>

                </div>
                <div className={"w-1/4 h-full"}>
                    <BalanceSection/>
                </div>

            </div>
            <div className={"flex flex-row gap-3"}>
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
