import MainLayout, {getLayout} from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import FeatureSections from "@/components/FeatureSection";
import AboutUs from "@/components/AboutUs";
import AboutMinah from "@/components/AboutUs/AboutMinah";
import ContactUs from "@/components/ContactUs";

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
        <div className={"flex flex-col items-center justify-center p-20 gap-10 w-full h-full "}>
            <div className={"flex flex-row w-full h-full px-5 items-center justify-center gap-4"}>
                <HeroSection/>

            </div>
            <div className={"flex flex-col justify-start items-start w-full h-full px-5  gap-3"}>
                <h1>Minah project</h1>
                <p className={"w-1/3"}>We aim to facilitate investment in sub-Saharan real estate and land using
                    blockchain and in-depth local know-how.</p>
                <div className={"flex flex-row items-center justify-center w-full h-full gap-4"}>
                    <FeatureSections title={"Minah Project"}
                                     description={"Invest in high potential real estate projects located in Togo and West Africa"}/>
                    <FeatureSections title={"Minah Project"}
                                     description={"Invest in high potential real estate projects located in Togo and West Africa"}/>
                    <FeatureSections title={"Minah Project"}
                                     description={"Invest in high potential real estate projects located in Togo and West Africa"}/>

                </div>

            </div>
            <div className={"flex flex-col justify-start items-start w-full h-full px-5  gap-3"}>
                <h1>About Us</h1>
                <p className={"w-1/3"}>We aim to facilitate investment in sub-Saharan real estate and land using
                    blockchain and in-depth local know-how.</p>
                <div className={"flex flex-row items-center justify-center w-full h-full gap-4"}>
                    <AboutUs/>
                    <AboutUs/>
                    <AboutUs/>
                    <AboutUs/>
                </div>

            </div>
            <div className={"w-full h-full"}>
            <AboutMinah/>
            </div>
            <div className={"flex flex-row w-full h-full gap-4"}>
                <ContactUs title={"You are located in west Africa and you need financing for your project?"} button={"Contact Us"}/>
                <ContactUs title={"You are located in west Africa and you need financing for your project?"} button={"Contact Us"}/>
            </div>
        </div>
    </MainLayout>);
};

Home.getLayout = getLayout;
export default Home;
