import {Button} from "antd";

const AboutMinah = () => {
    return (
        <div className={"flex flex-col items-start gap-8 w-full h-full text-white justify-center p-10 rounded-md bg-secondary"}>
            <h1 className={"text-xl font-medium"}>
                Minah Labs
            </h1>
            <p className={"text-md font-normal"}>
                Minah Labs is be the backbone of the Minah platform. It brings together all necessary assets and players
                to create an ecosystem enabling reliable and easy real estate investment in Africa
                Infrastructure platforms (Polygon, Fireblocks etc.)

            </p>
            <span className={"text-sm"}>- Community of builders</span>
            <span className={"text-sm"}>- Individual investors</span>
            <span className={"text-sm"}>- Land owners with local network</span>
            <Button className={"bg-button_border  w-fit text-white border-button_border"} size={"large"}>
                {"Join The Community"}
            </Button>

        </div>
    )
}
export default AboutMinah;