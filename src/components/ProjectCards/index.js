import {Button} from "antd";

const ProjectCards = () => {
    return (<div
        className={"flex flex-col text-white items-center gap-7 justify-center p-10 w-full h-full bg-secondary rounded-md"}>
        <div className={"font-bold text-2xl"}>
            Project title 1
        </div>
        <p className={"w-1/2 text-center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla arcu, suscipit eget sem quis,
            volutpat lobortis massa. Fusce vestibulum enim imperdiet, convallis lorem non.
        </p>
        <div className={"flex flex-row gap-4 items-center justify-center"}>
            <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center"}>
                <span className={"text-black"}>Hello</span>
            </div>
            <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center"}>
                <span className={"text-black"}>Hello</span>
            </div>
            <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center"}>
                <span className={"text-black"}>Hello</span>
            </div>
            <div className={"bg-white rounded-full w-16 h-16 flex items-center justify-center"}>
                <span className={"text-black"}>Hello</span>
            </div>
        </div>
        <Button className={"bg-button_border w-fit text-white border-button_border"} size={"large"}>{"Connect To Invest"}</Button>
        <p className={"text-button_border text-sm"}>Discover the project</p>


    </div>)
}
export default ProjectCards;