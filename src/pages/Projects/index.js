import MainLayout from "@/layouts/MainLayout";
import ProjectCards from "@/components/ProjectCards";
import ContactUs from "@/components/ContactUs";
import {useRouter} from "next/router";

const Projects = () => {
    const router = useRouter()
    return (
        <MainLayout>
            <title>Minah | Projects</title>
            <div className={"flex flex-col py-8 sm:py-12 lg:py-20 gap-5 lg:px-4 sm:px-8 md:px-12 px-40 w-full"}>
                <ProjectCards/>
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
