import Image from "next/image";

const AboutUs = () => {
    return(
        <div className={"flex flex-col gap-2 items-start justify-start w-full h-full"}>
            <Image src={"/Images/bgImages.svg"} alt={""} className={"w-full rounded-lg bg-primary h-full"} width={100} height={100}/>
            <h1 className={"text-lg"}>Lorem Ipsum</h1>
            <h1 className={"text-sm"}>Lorem Ipsum</h1>
        </div>
    )
}
export default AboutUs;