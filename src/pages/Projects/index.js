import MainLayout from "@/layouts/MainLayout";
import ProjectCards from "@/components/ProjectCards";
import ContactUs from "@/components/ContactUs";
import {useRouter} from "next/router";
import {Breadcrumb} from "antd";

const Projects = () => {
    const router = useRouter()
    return (
        <MainLayout>
            <title>Minah | Projects</title>
            <div className={"flex flex-col py-8 sm:py-12 lg:py-20 gap-5 lg:px-4 sm:px-8 md:px-12 px-40 w-full"}>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    {/*<Breadcrumb.Item>Project Title 01</Breadcrumb.Item>*/}
                </Breadcrumb>
                <ProjectCards title={"Project Title 01 "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit "}/>
                <ProjectCards/>
                <ProjectCards/>
                <div className={"text-start font-bold text-black"}>And Many More Projects To Come</div>
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
