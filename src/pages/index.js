import MainLayout, {getLayout} from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import {Button, Modal, Progress} from "antd";
import {useEffect, useState} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Login from "@/pages/Login";

const Home = () => {
    const [clicked, SetClicked] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0);
    const [user, setUser] = useState(false)
    useEffect(() => {
        if (typeof window !== undefined) {

            const user = localStorage.getItem("user")
            console.log("USER", user)
            if (user !== null && user !== "") {
                console.log("I WAS HERE")
                setUser(true)
            }
        }
    }, [])
    const settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        // centerMode:true,
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        arrows: false,
        slidesToShow: 3,
        // autoplaySpeed: 3000,
        // slidesToScroll: 1,

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
        centerMode: true,
        className: "center",
        // centerMode: true,
        centerPadding: "60px",
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
    const CustomDots = ({active, onClick, slides}) => {
        return (
            <div>
                <ul className={"flex flex-row gap-5 w-full"} style={{margin: "0px"}}>
                    {slides?.map((slide, index) => (
                        <li key={index} onClick={() => onClick(index)}>
                            <Progress
                                className={`${index === active ? "w-32 duration-200 transition all ease-in-out delay-75" : "w-11 duration-200 transition all ease-in-out delay-75"}`}
                                percent={index === active ? 100 : 0}
                                showInfo={false}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    return (<MainLayout>
        <div className={"flex flex-col items-center justify-center gap-6 backgroundColored"}>
            <title>Minah | Home</title>
            <link rel="icon" href="/Images/favicon.png"/>

            <div className={"flex flex-col backgroundImages items-center justify-center  gap-10 w-full h-full "}>
                <div className={"flex flex-row w-full h-full  items-center justify-center gap-4"}>
                    <HeroSection/>

                </div>
                <div className={"flex flex-col justify-center  items-center w-full h-[100vh] px-5  gap-10"}>
                    <div className={"w-full flex flex-col gap-6 items-center justify-center"}>
                        <h1 className={"text-5xl text-black font-extrabold"}><span
                            className={"text-textOrange text-5xl"}>Minah</span> project</h1>
                        <p className={"w-full text-center"}>We aim to facilitate investment in sub-Saharan real estate
                            and
                            land
                            using
                            blockchain and in-depth local know-how.</p>
                    </div>
                    <Slider
                        className="w-4/5 mt-6 items-center justify-center center flex flex-row gap-10" {...settings}>
                        <div className={"flex  flex-col w-full h-full items-center justify-center gap-6"}>
                            <Image src="/Images/featureImage001.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h1 className="font-bold text-xl">
                                    Land and real estate
                                </h1>
                                <p className="text-center">
                                    Invest in high potential real estate projects located in Togo and West Africa
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full items-center justify-center gap-6">
                            <Image src="/Images/featureImage002.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-4">
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

                        <div className="flex flex-col w-full h-full items-center justify-center gap-6">
                            <Image src="/Images/featureImage003.svg" className="w-1/2 h-1/2" alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-4">
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
                    <CustomDots active={activeSlide} slides={[

                        <div key={1} className={"duration-300 transition all ease-in-out"}>Slide 1</div>,
                        <div key={2}>Slide 2</div>,
                        <div key={3}>Slide 3</div>,
                        // Add more elements for additional slides
                    ]} onClick={(index) => setActiveSlide(index)}/>
                </div>
                <div className={"h-[100vh]"}>
                    <div
                        className={"flex flex-col gap-10 About  bgGradient items-center justify-center w-full h-full "}>
                        <div
                            className={"flex flex-col items-center  p-32 justify-center w-full h-full  AboutMinah  bgVectored"}>
                            <h1 className={"text-5xl text-white AboutHeading font-extrabold"}>
                                <span className={"text-black text-5xl"}>The</span> Concept
                            </h1>
                            <div className={"flex flex-row items-center AboutSection w-4/5 justify-evenly  "}>
                                <Image src={"/Images/dummyImage.svg"}
                                       className={"w-2/3 h-2/3 DummyImage flex justify-end items-end drop-shadow-lg hover:scale-105 hover:duration-300 hover:transition-all"}
                                       alt={""}
                                       width={150} height={150}/>
                                <div className={"flex w-1/2 flex-col gap-5"}>
                                    <p className={"text-justify text-md text-white"}>
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
                <div className={"flex flex-col w-full justify-center items-center h-[100vh]"}>
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
                                SetClicked(true)
                            }}
                                    className={"gradiented hover:underline hover:scale-105 hover:duration-300 hover:font-bold text-sm hover:border-textOrange rounded-full px-3 py-2 h-fit w-44 text-white "}
                                    size={"large"}>
                                {user === true ? "Join the Community" : "Connect to Invest"}
                            </Button>
                        </div>
                        <Modal className=" h-fit flex  " open={user === false && clicked} footer={null}
                               onCancel={() => {
                                   SetClicked(false)
                               }}>
                            <Login/>
                        </Modal>
                    </div>
                    <div className={"flex flex-col justify-center  items-center w-full h-full px-5  gap-10"}>
                        <div className={"w-full flex flex-col gap-6 items-center justify-center"}>

                            <h1 className={"text-black text-5xl text-center font-extrabold"}>
                                <span className={"text-textOrange text-5xl"}>Our</span> Partners
                            </h1>
                            <p className={"w-full text-center"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                        </div>
                        <Slider {...settings2} className={"w-4/5  "}>
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
                <div className={"flex flex-row mb-10 items-center gap-10  w-4/5 h-[50vh] justify-between"}>
                    <ContactUs
                        button={"Contact Us"}
                        title={"You have a project?"}
                    />
                    <ContactUs
                        button={"Join the community"}
                        title={"You want to invest?"}
                    />
                </div>
            </div>
        </div>
    </MainLayout>);
};

Home.getLayout = getLayout;
export default Home;
