import MainLayout, {getLayout} from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import {Button, Progress} from "antd";
import {useEffect, useState} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        if (typeof window !== undefined) {
            const test = localStorage.getItem("userMetaData")
            if (test) {
                console.log(JSON.parse(test))
            }
        }
    }, [])
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        // centerMode:true,
        arrows: false,
        slidesToShow: 3,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        appendDots: dots => (
            <div>
                <ul style={{margin: "0px"}}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div>
                <Progress
                    percent={i === activeSlide ? 100 : 0}
                    showInfo={false}
                />
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
    };
    const settings2 = {
        dots: true,
        autoplay: true,
        infinite: true,
        // centerMode:true,
        arrows: false,
        slidesToShow: 5,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        appendDots: dots => (
            <div>
                <ul style={{margin: "0px"}}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div>
                <Progress
                    percent={i === activeSlide ? 100 : 0}
                    showInfo={false}
                />
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
    };
    return (<MainLayout>
        <div className={"flex flex-col items-center justify-center gap-6 backgroundColored"}>
            <title>Minah | Home</title>
            <link rel="icon" href="/Images/favicon.png"/>

            <div className={"flex flex-col backgroundImages items-center justify-center  gap-10 w-full h-full "}>
                <div className={"flex flex-row w-full h-full  items-center justify-center gap-4"}>
                    <HeroSection/>

                </div>
                <div className={"flex flex-col justify-center  items-center w-full h-full px-5  gap-3"}>
                    <h1 className={"text-5xl text-black font-extrabold"}><span
                        className={"text-textOrange text-5xl"}>Minah</span> project</h1>
                    <p className={"w-full text-center"}>We aim to facilitate investment in sub-Saharan real estate and
                        land
                        using
                        blockchain and in-depth local know-how.</p>
                    <Slider className="w-4/5 h-full center flex flex-row gap-10" {...settings}>
                        <div className="flex flex-col w-full h-full items-center justify-center gap-7">
                            <Image src="/Images/featureImage001.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <h1 className="font-bold text-xl">
                                    Land and real estate
                                </h1>
                                <p className="text-center">
                                    Invest in high potential real estate projects located in Togo and West Africa
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full items-center justify-center">
                            <Image src="/Images/featureImage002.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <h1 className="font-bold text-xl">
                                    Blockchain transparency
                                </h1>
                                <p className="text-center">
                                    We use Blockchain to make the whole process transparent and keep you updated with
                                    any
                                    major events on the assets you invested in
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full items-center justify-center gap-4">
                            <Image src="/Images/featureImage003.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <h1 className="font-bold text-xl">
                                    Impact investment
                                </h1>
                                <p className="text-center">
                                    Join a positive impact investors community dedicated to empowering African projects
                                    step
                                    by step
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-full items-center justify-center gap-7">
                            <Image src="/Images/featureImage001.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <h1 className="font-bold text-xl">
                                    Land and real estate
                                </h1>
                                <p className="text-center">
                                    Invest in high potential real estate projects located in Togo and West Africa
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full items-center justify-center">
                            <Image src="/Images/featureImage002.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <h1 className="font-bold text-xl">
                                    Blockchain transparency
                                </h1>
                                <p className="text-center">
                                    We use Blockchain to make the whole process transparent and keep you updated with
                                    any
                                    major events on the assets you invested in
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full items-center justify-center gap-4">
                            <Image src="/Images/featureImage003.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <h1 className="font-bold text-xl">
                                    Impact investment
                                </h1>
                                <p className="text-center">
                                    Join a positive impact investors community dedicated to empowering African projects
                                    step
                                    by step
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div>
                    <div
                        className={"flex flex-col gap-10 About  bgGradient items-center justify-center w-full h-full "}>
                        <div
                            className={"flex flex-col items-center  gap-10 justify-center w-full h-full p-32 AboutMinah  bgVectored"}>
                            <h1 className={"text-5xl text-white AboutHeading font-extrabold"}>
                                <span className={"text-black text-5xl"}>The</span> Concept
                            </h1>
                            <div className={"flex flex-row items-center AboutSection w-4/5 justify-evenly  "}>
                                <Image src={"/Images/dummyImage.svg"}
                                       className={"w-1/3 h-1/3 DummyImage flex justify-end items-end drop-shadow-lg hover:scale-105 hover:duration-300 hover:transition-all"}
                                       alt={""}
                                       width={50} height={50}/>
                                <div className={"flex w-1/2 flex-col gap-5"}>
                                    <p className={"text-justify text-white"}>
                                        <p>
                                            Minah est un projet pionnier. Fondé par Hervé et Julien, deux frères
                                            franco-togolais,
                                            l`&apos;`objectif de Minah est de facilier l`&apos;`investissement en
                                            Afrique
                                            grâce à la
                                            technologie
                                            blockchain.
                                        </p>
                                        <br/>
                                        <p>
                                            Notre mission : financer des projets innovants qui stimulent le
                                            développement
                                            socio-économique en Afrique de l`&apos;`Ouest , de
                                            l`&apos;`immobilierl`&apos;`énergie
                                            renouvelable à
                                            l`&apos;`agriculture durable. Chez Minah.io, chaque transaction est
                                            sécurisée,
                                            transparente et
                                            efficace, réduisant les coûts et ouvrant des portes à de nouvelles
                                            possibilités
                                            d`&apos;`investissement. Nous sommes plus qu`&apos;`une plateforme ; nous
                                            sommes
                                            un
                                            mouvement vers un
                                            avenir où le progrès économique se conjugue avec le bien-être des
                                            communautés.
                                            Rejoignez-nous pour faire partie de cette révolution, où chaque
                                            investissement
                                            crée un
                                            impact positif durable, bâtissant pas à pas un avenir prospère pour
                                            l`&apos;`Afrique de
                                            l`&apos;`Ouest.
                                        </p>
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={"flex flex-col items-center gap-5 rounded-lg shadow-2xl bg-[#FAFAFA] w-4/5 h-full justify-center"}>
                    <div className={"p-10 gap-5 flex flex-col items-center justify-center w-4/5"}>
                        <h1 className={"text-black text-5xl font-extrabold"}>
                            <span className={"text-textOrange text-5xl"}>Minah</span> Labs
                        </h1>
                        <p className={"text-center"}>Minah Labs is be the backbone of the Minah platform. It brings
                            together
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

                    <Slider {...settings2} className={"w-4/5 h-full "}>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                        <div className={"flex flex-row items-center justify-evenly w-full h-full gap-10"}>
                            <AboutUs/>
                        </div>
                    </Slider>


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
        </div>
    </MainLayout>);
};

Home.getLayout = getLayout;
export default Home;
