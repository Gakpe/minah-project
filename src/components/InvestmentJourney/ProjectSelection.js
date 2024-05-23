import Image from "next/image";
import { Button, Modal } from "antd";
import { useState } from "react";
import Disclaimer from "@/components/InvestmentJourney/Disclaimer";

const ProjectSelection = ({ refetch }) => {
	const [selectedProject, setSelectedProject] = useState(null);

	const handleRadioChange = (e) => {
		setSelectedProject(e.target.value);
	};
	const [clicked, setClicked] = useState(false);
	const [active, setActive] = useState(false);
	return (
		<div
			className={
				"flex flex-col gap-5 items-center justify-center w-full h-full"
			}
		>
			<div
				className={
					"flex text-center flex-col items-center justify-center w-full h-full gap-5"
				}
			>
				<Image
					className={"w-20 h-20"}
					src={"/Images/Logo.svg"}
					alt={""}
					width={50}
					height={50}
				/>
				<div className={"text-3xl font-bold"}>
					<span className={"text-textOrange font-bold"}>Select</span>{" "}
					the project to invest in:
				</div>

				<div className="flex flex-col items-center gap-3 w-full h-full">
					<Button
						onClick={() => {
							setActive(true);
						}}
						className={`w-1/2 text-textOrange font-bold ${
							active && "border-2  border-textOrange"
						}  rounded-lg hover:border-textOrange border  drop-shadow-2xl `}
						size={"large"}
					>
						{"Project 01"}
					</Button>
					<Button
						disabled={true}
						className={
							"w-1/2 text-textOrange font-bold rounded-lg border hover:border-textOrange drop-shadow-2xl "
						}
						size={"large"}
					>
						{"Project 02"}
					</Button>
				</div>
				<div className={"flex flex-col w-full items-center"}>
					<Button
						onClick={() => {
							setClicked(true);
						}}
						className={
							"gradiented rounded-full hover:border-textOrange mt-5 w-1/3 text-white "
						}
						size={"large"}
					>
						{"Continue"}
					</Button>
					<Button
						onClick={() => {
							setClicked(true);
						}}
						className={"  mt-5 w-1/3 gradientText border-none "}
						size={"large"}
					>
						{"Close"}
					</Button>
				</div>
				<Modal
					className={"w-3/6 "}
					rootClassName={"bg-[#FAFAFA]"}
					open={clicked}
					footer={null}
					onCancel={() => {
						setClicked(false);
					}}
				>
					<Disclaimer refetchRef={refetch} />
				</Modal>
			</div>
		</div>
	);
};

export default ProjectSelection;
