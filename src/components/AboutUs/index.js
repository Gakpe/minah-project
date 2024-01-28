import Image from "next/image";

const AboutUs = () => {
    return(
        <div className={"flex flex-col gap-2 items-center justify-center w-full h-full"}>
            <Image src={"/Images/Parte.files/Polygon.svg"} alt={""} className={"w-1/2 rounded-lg  h-1/2"} width={50} height={50}/>
            {/*<h1 className={"text-lg"}>Lorem Ipsum</h1>*/}
            <h1 className={"text-sm"}>Lorem Ipsum</h1>
        </div>
    )
}
export default AboutUs;