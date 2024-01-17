import MainLayout from "@/layouts/MainLayout";
import ProjectCards from "@/components/ProjectCards";
import ContactUs from "@/components/ContactUs";
import {useRouter} from "next/router";
import {Breadcrumb} from "antd";
import {useEffect, useState} from "react";
import {getProjects} from "../../../util";
import {RightOutlined} from "@ant-design/icons";
import Link from "next/link";

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
                className={"flex flex-col backgroundColored py-8 sm:py-12 lg:py-20 gap-5 lg:px-4 sm:px-8 md:px-12 px-40 w-full"}>
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
                            <ProjectCards
                                projectDetails={project}
                                key={project._id}
                                title={project.name}
                                description={project.description ? project.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                imageUrl={project.image}
                                id={project.id}
                            />
                        )
                    }
                )}
                {/*<ProjectCards title={"Project Title 01 "}*/}
                {/*              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit "}/>*/}
                {/*<ProjectCards/>*/}
                {/*<ProjectCards/>*/}
                <div
                    className={"flex flex-col w-full h-full rounded-xl  border-dashed border-4 border-textOrange  py-14 border-spacing-x-44 gap-10 items-center justify-between"}>
                    <div className={"text-textOrange text-5xl font-extrabold ProjectMobileText"}>And Many More
                        Projects <span className={"text-black text-5xl font-bold"}>To Come</span></div>
                    <div className={"text-xl font-semibold text-textOrange"}>Comming Soon</div>
                </div>
                <div className={"flex flex-row sm:flex-row items-center gap-4 justify-center"}>
                    <ContactUs
                        button={"Contact Us"}
                        title={"You are located in west Africa and you need financing for your project?"}
                    />
                    <ContactUs
                        button={"Contact Us"}
                        title={"You are located in west Africa and you need financing for your project?"}
                    />
                </div>
                <div className={"h-20 text-transparent"}>.</div>
            </div>
        </MainLayout>
    );
};

export default Projects;
