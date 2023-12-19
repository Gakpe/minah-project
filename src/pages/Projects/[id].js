import React from "react";
import MainLayout from "@/layouts/MainLayout";

const ProjectDetails = () => {
    return (
        <MainLayout>
            <div className={"flex flex-col items-center justify-center gap-10 w-full h-full p-10"}>
                <p>Back to Projects</p>
                <ProjectDetails/>

            </div>
        </MainLayout>
    )
}
export default ProjectDetails;