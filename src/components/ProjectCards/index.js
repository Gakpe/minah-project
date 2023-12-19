import {Button} from "antd";
import {useRouter} from "next/navigation";

const ProjectCards = ({onClick}) => {
    const router = useRouter()
    return (
        <div
            className={"flex flex-col text-white items-center gap-7 justify-center p-10 w-full h-full bg-secondary rounded-md"}>
            <div onClick={() => {
                router.push("/ProjectDetails")
            }} className={"font-bold h-full cursor-pointer text-center w-full text-2xl"}>
                Project title 1
            </div>
            <p className={"w-full text-center md:w-1/2"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla arcu, suscipit eget sem quis,
                volutpat lobortis massa. Fusce vestibulum enim imperdiet, convallis lorem non.
            </p>
            <div className={"flex flex-row flex-wrap gap-4 items-center w-full justify-center"}>
                <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4"}>
                    <span className={"text-black"}>Hello</span>
                </div>
                <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4"}>
                    <span className={"text-black"}>Hello</span>
                </div>
                <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4"}>
                    <span className={"text-black"}>Hello</span>
                </div>
                <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4"}>
                    <span className={"text-black"}>Hello</span>
                </div>
            </div>
            <Button className={"bg-button_border w-fit text-white border-button_border"} size={"large"}>
                {"Connect To Invest"}
            </Button>
            <p className={"text-button_border text-sm"}>Discover the project</p>
        </div>
    );
};

export default ProjectCards;
