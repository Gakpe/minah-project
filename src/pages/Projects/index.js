import MainLayout from "@/layouts/MainLayout";
import ProjectCards from "@/components/ProjectCards";
import ProjectCards2 from "@/components/ProjectCards2";
import ContactUs from "@/components/ContactUs";
import {useRouter} from "next/router";
import {Breadcrumb} from "antd";
import {useEffect, useState} from "react";
import {getProjects} from "../../../util";
import {RightOutlined} from "@ant-design/icons";
import Link from "next/link";
import * as amplitude from '@amplitude/analytics-browser';


const Projects = () => {
    const router = useRouter()
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getProjects().then(
            (res) => {
                console.log("here is res :", res)
                setProjects(res.result.projects)
            }
        ).catch(
            (err) => {
                console.log("here is err :", err)
            }
        )
    }, []);
    console.log("here is projects :", projects)
    return (
        <MainLayout>
            <title>Minah | Projects</title>
            <link rel="icon" href="/Images/favicon.png"/>

            <div
                className={"flex flex-col backgroundImages h-full  sm:py-12 lg:py-20 gap-5 lg:px-4 sm:px-8 md:px-12 px-40 w-full"}>
                <div className={" h-full w-full"}></div>
                <Breadcrumb separator={<RightOutlined/>} className={"w-full"}>
                    <Breadcrumb.Item className={"text-black"}>
                        <Link className={"text-black font-extrabold"} href={"/"}>Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className={"text-black"}>
                        <Link className={"text-textOrange font-extrabold"} href={"/Projects"}>Projects</Link>
                    </Breadcrumb.Item>
                    {/*<Breadcrumb.Item className={"text-textOrange"}>*/}
                    {/*    <Link className={"text-textOrange font-extrabold"} href={"/Projects/ProjectDetails"}>Project*/}
                    {/*        Title 01</Link>*/}
                    {/*</Breadcrumb.Item>*/}
                </Breadcrumb>
                {projects && projects.map(
                    (project) => {
                        return (
                            <div key={project._id} className={"w-full flex flex-col items-center justify-center gap-6"}>
                            <ProjectCards
                                image={true}
                                projectDetails={project}
                                key={project._id}
                                title={project.name}
                                description=
                                    " Introducing Minah.io flagship Alpha Project, setting the stage for a new era of investment in Africa.
                                    Strategically located in the heart of Lomé, Togo in West Africa this first project is directly managed by
                                    the core Minah Team. It relies on two main assets : One rental building 
                                    that includes a commercial space destined to host a community-benefiting business and a span of agricultural 
                                    land awaiting cultivation on the city's outskirts.
                                    Stay tuned for more info ! "
                                imageUrl={project.image}
                                id={project.id}/>
                                
                                <ProjectCards2
                                    image={false}
                                    bg={"white"}
                                    projectDetails={project}
                                    key={project._id}
                                    title={project.name}
                                    description=
                                    "Once the first project is completed, the Beta project will offer a bigger opportunity to contribute to the Togolese development. 
                                    As the Minah project will grow, liquidity and quality of investment will thrive too. ETA : end 2024"
                                    imageUrl={project.image}
                                    id={project.id}
                                />
                            </div>
                        )
                    }
                )}


                <div
                    className={"flex flex-col w-full h-full rounded-xl py-14  gap-10 items-center justify-between"}>
                    <div className={"text-textOrange text-5xl font-extrabold ProjectMobileText"}>And many more
                        projects <span className={"text-black text-5xl font-bold"}>to come</span></div>
                    <div className={"text-xl font-semibold text-textOrange"}>Comming Soon</div>
                </div>
                <div className={"flex flex-row sm:flex-row items-center gap-4 justify-center"}>
                    <ContactUs
                        button={"Contact Us"}
                        title={"You have a project?"}
                    />
                    <ContactUs
                        button={"Join the community"}
                        title={"You want to invest?"}
                    />
                </div>
                <div className={"h-20 text-transparent"}>.</div>
            </div>
        </MainLayout>
    );
};

export default Projects;
