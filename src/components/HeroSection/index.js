import {Button} from "antd";

const HeroSection = () => {
    return (

        <div className={"w-full h-full flex flex-col bg-secondary rounded-lg gap-10 items-center justify-center p-32 "}>
            <h1 className={"text-4xl break-all w-1/2 text-center font-bold text-white "}>
                Investing in local African real estate has never been easier
            </h1>
            <p className={"text-white text-sm"}>
                Lorem ipsum
            </p>
            <Button className={"bg-button_border  w-fit text-white border-button_border"} size={"large"}>
                {"Connect To Invest"}
            </Button>
        </div>

    )
}
export default HeroSection;