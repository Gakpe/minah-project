import { Button } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

const ProjectCard = ({ title, description, onExplore, onInvest }) => {
    const router = useRouter();

    return (
        <div className="project-card drop-shadow-lg  bg-[#FAFAFA] px-10 py-5">
            <div className="title-section testClass py-5" onClick={() => router.push("/ProjectDetails")}>
                <h1 className="text-black text-5xl font-extrabold"><span className={"title"}>Project</span> Title 01</h1>
            </div>
            <p className="description">{description}</p>
            <div className="icon-section">
                {/* Replace these with actual icons and their labels */}
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"} src={"/Images/ProjectFeature01.svg"} alt={""} width={60} height={60}/>
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"} src={"/Images/ProjectFeature02.svg"} alt={""} width={60} height={60}/>
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"} src={"/Images/ProductFeature03.svg"} alt={""} width={60} height={60}/>
                <Image className={"hover:scale-105 hover:duration-300 cursor-pointer"} src={"/Images/ProjectFeature04.svg"} alt={""} width={60} height={60}/>
                {/*<div className="icon">5</div>*/}
                {/*<div className="icon">10</div>*/}
                {/*<div className="icon">15</div>*/}
            </div>
            <div className="button-section">
                <Button className="text-white hover:border-textOrange rounded-full gradiented" size="large" onClick={onInvest}>
                    Connect to invest
                </Button>

                <Button className="text-black rounded-full gradientText border-textOrange" size="large" onClick={onExplore}>
                    Discover the project
                </Button>
            </div>
        </div>
    );
};

export default ProjectCard;
