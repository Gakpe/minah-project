import MainLayout from "@/layouts/MainLayout";
import ProjectCards from "@/components/ProjectCards";
import ContactUs from "@/components/ContactUs";

const Projects = () => {
    return (<MainLayout>
            <div className={"flex flex-col  py-20  gap-5 px-40 w-full h-full "}>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <div>And Many More Projects To Come</div>
                <div className={"flex flex-row items-center gap-4 justify-center"}>
                    <ContactUs button={"Contact Us"}
                               title={"You are located in west Africa and you need financing for your project?"}/>
                    <ContactUs button={"Contact Us"}
                               title={"You are located in west Africa and you need financing for your project?"}/>
                </div>
                <div className={"h-20 text-transparent"}>.</div>
            </div>
        </MainLayout>)
}
export default Projects;