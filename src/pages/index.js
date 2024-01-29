import MainLayout, {getLayout} from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import {Button, Modal, Progress} from "antd";
import {useEffect, useState} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Login from "@/pages/Login";
import * as amplitude from '@amplitude/analytics-browser';


amplitude.init('d1c422fa8d386cacb5fa7919c87e8d1b');

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
        dots: true, autoplay: false, infinite: false,


        arrows: false, slidesToShow: 3, autoplaySpeed: 3000, slidesToScroll: 1,

        cssEase: "linear", appendDots: dots => (<div>
            <ul style={{margin: "0px"}}> {dots} </ul>
        </div>), customPaging: i => (<div>
            <Progress
                percent={i === activeSlide ? 100 : 0}
                showInfo={false}
            />
        </div>), responsive: [{
            breakpoint: 768, settings: {
                slidesToShow: 1,
            },
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1,
            },
        },], beforeChange: (current, next) => {
            setActiveSlide(next);
        },
    };
    const settings2 = {
        dots: true,
        autoplay: true,
        infinite: true,


        arrows: false,
        slidesToShow: 5,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        appendDots: dots => (<div>
            <ul style={{margin: "0px"}}> {dots} </ul>
        </div>),
        customPaging: i => (<div>
            <Progress
                percent={i === activeSlide ? 100 : 0}
                showInfo={false}
            />
        </div>),
        responsive: [{
            breakpoint: 768, settings: {
                slidesToShow: 1,
            },
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1,
            },
        },],
        beforeChange: (current, next) => {
            setActiveSlide(next);
        },
    };
    const CustomDots = ({active, onClick, slides}) => {
        return (<div>
            <ul className={"flex flex-row gap-5 w-full"} style={{margin: "0px"}}>
                {slides?.map((slide, index) => (<li key={index} onClick={() => onClick(index)}>
                    <Progress
                        className={`${index === active ? "w-32 duration-200 transition all ease-in-out delay-75" : "w-11 duration-200 transition all ease-in-out delay-75"}`}
                        percent={index === active ? 100 : 0}
                        showInfo={false}
                    />
                </li>))}
            </ul>
        </div>);
    };

    const images = [
        { src: "/Images/Parte.files/Alchemy.svg", alt: "" },
        { src: "/Images/Parte.files/Fireblocks.svg", alt: "" },
        { src: "/Images/Parte.files/LabsNS.svg", alt: "" },
        { src: "/Images/Parte.files/mt-pelerin.svg", alt: "" },
        { src: "/Images/Parte.files/Polygon.svg", alt: "" },
        { src: "/Images/Parte.files/Yellowcard.svg", alt: "" },
    ];

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
                        <p className={"w-full text-center"}>
                            Where Blockchain Meets African real estate and sustainable development
                        </p>
                    </div>
                    <Slider
                        className="w-4/5 mt-6 items-center justify-center center flex flex-row gap-10" {...settings}>
                        <div className={"flex  flex-col w-full h-full items-center justify-center gap-6"}>
                            <Image loading={"lazy"} quality={20} src="/Images/Fichier1.svg" className="w-1/2 h-1/2"
                                   alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h1 className="font-bold text-xl">
                                    Land and real estate
                                </h1>
                                <p className="text-center">
                                    Your portal to the most promising real estate projects in West Africa </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full items-center justify-center gap-6">
                            <Image loading={"lazy"} quality={20} src="/Images/Fichier2.svg" className="w-1/2 h-1/2"
                                   alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h1 className="font-bold text-xl">
                                    Blockchain transparency
                                </h1>
                                <p className="text-center">
                                    Experience unmatched transparency thanks to our blockchain based technology
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full items-center justify-center gap-6">
                            <Image loading={"lazy"} quality={20} src="/Images/Fichier3.svg" className="w-1/2 h-1/2"
                                   alt="" width={100}
                                   height={100}/>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h1 className="font-bold text-xl">
                                    Impact investment
                                </h1>
                                <p className="text-center">
                                    Join a positive impact investors community dedicated to empowering African project
                                </p>
                            </div>
                        </div>

                    </Slider>

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
                                <Image src={"/Images/Fichier4.svg"}
                                       className={"w-2/3 h-2/3 DummyImage flex justify-end items-end drop-shadow-lg hover:scale-105 hover:duration-300 hover:transition-all"}
                                       alt={""}
                                       width={150} height={150}/>
                                <div className={"flex w-1/2 flex-col gap-5"}>
                                    <p className={"text-justify text-md text-white"}>
                                        <p>
                                            At the core of Minah lies a vision inspired by heritage and driven
                                            innovation.
                                            Founded by Julien and Hervé, two Franco-Togolese brothers, the Minah
                                            initiative is marked by strong ambition : a quest to harness the
                                            transformative power of blockchain to pave the way for a bright and
                                            sustainable future for Africa.
                                            Minah transcends mere transactions.
                                            <br/> <br/>
                                            Our mission is to ignite socio-economic progress through strategic funding
                                            of groundbreaking projects — catalyzing a new era for local communities.
                                            We foster a movement where economic growth meets the greater good, where
                                            each step is one more towards inclusivity and shared prosperity.
                                            From real estate, renewable energy, and sustainable farming we provided
                                            access to secured and meaningful opportunities, unlocking the potential of
                                            promising sectors and impactful projects.
                                            <br/>
                                            Join us and be part of a collective journey to shape and redefine the
                                            building blocks of West Africa`&apos;`s economic renaissance.
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
                            <p className={"text-justify"}>
                                Minah Labs stands as the cornerstone of the Minah ecosystem, dedicated to developing and
                                maintaining the technological infrastructure of the Minah platform.
                                <br/> <br/>
                                As a non-profit entity, Minah Labs mission is to ensure the stability and reliability of
                                the platform while fostering a thriving ecosystem united by a shared goal: to accelerate
                                Africa`&apos;`s development.
                                Minah Lab is also the architect of a multidisciplinary network a vibrant community of
                                builders, forward-thinking individuals, landowners with deep local roots and blockchain
                                infrastructure actors like Polygon and Fireblocks.
                                <br/> <br/>

                                Together, we are crafting an environment that simplifies and secures real estate
                                investment in Africa, making it an accessible and impactful experience for all.
                            </p>

                            <Button
                                className={"gradiented hover:underline hover:scale-105 hover:duration-300 hover:font-bold text-sm hover:border-textOrange rounded-full px-3 py-2 h-fit w-44 text-white "}
                                size={"large"}
                                href="https://tally.so/r/nGK8Lo"
                                target="_blank">
                                Join the Community
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
                            </p>
                        </div>
                        <Slider {...settings2} className={"w-4/5"}>
                            {images.map((image, index) => (
                                <div key={index} className={"slider-item aspect-ratio-1:1"}>
                                    <div className="image-container">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className={"rounded-lg equal-image"}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className={"flex flex-row mb-10 items-center gap-10  w-4/5 h-[50vh] justify-between"}>

                    <ContactUs
                        button={"Contact Us"}
                        title={"You have a project?"}
                        link={"https://tally.so/r/meRYNQ"}
                    />

                    <ContactUs
                        button={"Join the community"}
                        title={"You want to invest?"}
                        link={"https://tally.so/r/w8x8BO"}
                    />
                </div>
            </div>
        </div>
    </MainLayout>);
};

Home.getLayout = getLayout;
export default Home;
