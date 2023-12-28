import Image from "next/image";
import {Button, Modal, Radio} from "antd";
import { useState } from "react";
import Disclaimer from "@/components/InvestmentJourney/Disclaimer";

const ProjectSelection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleRadioChange = (e) => {
        setSelectedProject(e.target.value);
    };
const [clicked, setClicked] = useState(false);
    return (
        <div className={"flex flex-col gap-5 items-center justify-center w-full h-full"}>
            <div className={"flex text-center flex-col items-center justify-center w-full h-full gap-5"}>
                <Image className={"w-20 h-20"} src={"/Images/Logo.svg"} alt={""} width={50} height={50} />
                <div>Select the project to invest in</div>

                <div className="flex flex-col items-center w-full h-full">
                    <Radio.Group className={"flex-col w-4/5 gap-3 flex justify-center items-center"} onChange={handleRadioChange} value={selectedProject}>
                        <Radio className={"w-full h-full flex items-center"} value="project1" style={{ fontWeight: selectedProject === 'project1' ? 'bold' : 'normal' }}>
                            <div className={"flex flex-row items-center justify-center w-full h-full gap-2"}>
                                <Image className={"w-20 p-4 h-20 bg-primary"} src="/Images/Logo.svg" alt="Project 1" width={50} height={50} />
                                <div>Project 1</div>
                            </div>
                        </Radio>

                        <Radio className={"w-full h-full flex items-center"} value="project2" style={{ fontWeight: selectedProject === 'project2' ? 'bold' : 'normal' }}>
                            <div className={"flex flex-row items-center justify-center w-full h-full gap-2"}>
                                <Image className={"w-20 p-4 h-20 bg-primary"} src="/Images/Logo.svg" alt="Project 2" width={50} height={50} />
                                <div>Project 2</div>
                            </div>
                        </Radio>
                    </Radio.Group>
                </div>

                <Button onClick={()=>{
                    setClicked(true)
                }} className={"bg-button_border rounded-2xl mt-5 w-1/2 text-white border-button_border"} size={"large"}>
                    {"Continue"}
                </Button>
                <Modal open={clicked} footer={null} onCancel={() => {
                    setClicked(false)
                }
                }>
                    <Disclaimer/>
                </Modal>
            </div>
        </div>
    );
};

export default ProjectSelection;
