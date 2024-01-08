import MainLayout, {getLayout} from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import FeatureSections from "@/components/FeatureSection";
import AboutUs from "@/components/AboutUs";
import AboutMinah from "@/components/AboutUs/AboutMinah";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import {Button} from "antd";

const Home = () => {
    const items = [{
        title: "Minah Project",
        description: "Invest in high potential real estate projects located in Togo and West Africa"
    }, {
        title: "Minah Project",
        description: "Invest in high potential real estate projects located in Togo and West Africa"
    }, {
        title: "Minah Project",
        description: "Invest in high potential real estate projects located in Togo and West Africa"
    }];


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
        <title>Minah | Home</title>
        <div className={"flex flex-col items-center justify-center  gap-10 w-full h-full "}>
            <div className={"flex flex-row w-full h-full  items-center justify-center gap-4"}>
                <HeroSection/>

            </div>
            <div className={"flex flex-col justify-center  items-center w-full h-full px-5  gap-3"}>
                <h1 className={"text-5xl text-black font-extrabold"}><span
                    className={"text-textOrange text-5xl"}>Minah</span> project</h1>
                <p className={"w-full text-center"}>We aim to facilitate investment in sub-Saharan real estate and land
                    using
                    blockchain and in-depth local know-how.</p>
                <div className={"flex flex-row items-center justify-center w-4/5 h-full gap-4"}>
                    <FeatureSections title={"Minah Project"}
                                     description={"Invest in high potential real estate projects located in Togo and West Africa"}/>
                    <FeatureSections title={"Minah Project"}
                                     description={"Invest in high potential real estate projects located in Togo and West Africa"}/>
                    <FeatureSections title={"Minah Project"}
                                     description={"Invest in high potential real estate projects located in Togo and West Africa"}/>

                </div>
            </div>
            <div className={"flex flex-col gap-10 items-center justify-center w-full h-full "}>
                <h1 className={"text-5xl text-black font-extrabold"}>
                    <span className={"text-textOrange text-5xl"}>The</span> Concept
                </h1>
                <div className={"flex flex-row items-center w-4/5 justify-evenly  "}>
                    <Image src={"/Images/dummyImage.svg"}
                           className={"w-1/3 h-1/3 flex justify-end items-end drop-shadow-lg hover:scale-105 hover:duration-300 hover:transition-all"}
                           alt={""}
                           width={50} height={50}/>
                    <div className={"flex w-1/2 flex-col gap-5"}>
                        <p className={"text-justify"}>
                            <p>
                                Minah est un projet pionnier. Fondé par Hervé et Julien, deux frères franco-togolais,
                                l`&apos;`objectif de Minah est de facilier l`&apos;`investissement en Afrique grâce à la technologie
                                blockchain.
                            </p>
                            <br/>
                            <p>
                                Notre mission : financer des projets innovants qui stimulent le développement
                                socio-économique en Afrique de l`&apos;`Ouest , de l`&apos;`immobilierl`&apos;`énergie renouvelable à
                                l`&apos;`agriculture durable. Chez Minah.io, chaque transaction est sécurisée, transparente et
                                efficace, réduisant les coûts et ouvrant des portes à de nouvelles possibilités
                                d`&apos;`investissement. Nous sommes plus qu`&apos;`une plateforme ; nous sommes un mouvement vers un
                                avenir où le progrès économique se conjugue avec le bien-être des communautés.
                                Rejoignez-nous pour faire partie de cette révolution, où chaque investissement crée un
                                impact positif durable, bâtissant pas à pas un avenir prospère pour l`&apos;`Afrique de
                                l`&apos;`Ouest.
                            </p>
                        </p>
                        <Button onClick={() => {

                        }} className={"gradiented  rounded-full px-3 py-2 h-fit w-44 text-white "} size={"large"}>
                            About Us
                        </Button>

                    </div>
                </div>

            </div>
            <div
                className={"flex flex-col items-center gap-5 rounded-lg shadow-2xl bg-[#FAFAFA] w-4/5 h-full justify-center"}>
                <div className={"p-10 gap-5 flex flex-col items-center justify-center w-4/5"}>
                    <h1 className={"text-black text-5xl font-extrabold"}>
                        <span className={"text-textOrange text-5xl"}>Minah</span> Labs
                    </h1>
                    <p className={"text-center"}>Minah Labs is be the backbone of the Minah platform. It brings together
                        all necessary assets
                        and players to create an ecosystem enabling reliable and easy real estate investment in
                        Africa</p>
                    <ol className={"flex flex-col items-start justify-center"}>
                        <li>- Infrastructure platforms (Polygon, Fireblocks etc.)</li>
                        <li> - Community of builders</li>
                        <li> - Individual investors</li>
                        <li> - Land owners with local network</li>
                    </ol>
                    <Button onClick={() => {

                    }} className={"gradiented  rounded-full px-3 py-2 h-fit w-44 text-white "} size={"large"}>
                        Join the Community
                    </Button>
                </div>

            </div>
            <div className={"flex flex-col gap-5 items-center justify-center w-4/5"}>
                <h1 className={"text-black text-5xl font-extrabold"}>
                    <span className={"text-textOrange text-5xl"}>Our</span> Partners
                </h1>
                <p className={"w-4/5"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                    <AboutUs/>
                    <AboutUs/>
                    <AboutUs/>
                    <AboutUs/>
                    <AboutUs/>
                </div>

            </div>
            {/*<div className={"flex flex-col justify-center items-center w-full h-full px-5  gap-3"}>*/}
            {/*    <h1>About Us</h1>*/}
            {/*    <p className={"w-1/3"}>We aim to facilitate investment in sub-Saharan real estate and land using*/}
            {/*        blockchain and in-depth local know-how.</p>*/}
            {/*    <div className={"flex flex-row items-center justify-center w-full h-full gap-4"}>*/}
            {/*        <AboutUs/>*/}
            {/*        <AboutUs/>*/}
            {/*        <AboutUs/>*/}
            {/*        <AboutUs/>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div className={"w-full h-full"}>*/}
            {/*    <AboutMinah/>*/}
            {/*</div>*/}
            <div className={"flex flex-row mb-10  px-20 w-full h-full gap-4"}>
                <ContactUs title={"You are located in west Africa and you need financing for your project?"}
                           button={"Contact Us"}/>
                <ContactUs title={"You are located in west Africa and you need financing for your project?"}
                           button={"Contact Us"}/>
            </div>
        </div>
    </MainLayout>);
};

Home.getLayout = getLayout;
export default Home;
