import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProjectSelection from "@/components/InvestmentJourney/ProjectSelection";

const InvestmentJourney = ({ refetch }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("userMetaData") !== null) {
				setUser(JSON.parse(localStorage.getItem("userMetaData")));
			}
		}
	}, []);
	const [clicked, setClicked] = useState(false);
	return (
		<div
			className={
				"flex flex-col items-center  justify-center w-full h-full"
			}
		>
			<div
				className={
					"h-6 gradientedBackground rounded-t-lg w-full text-transparent"
				}
			>
				hello
			</div>

			<div
				className={
					"flex text-center py-10 flex-col items-center justify-center w-full h-full gap-5"
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
					Hello{" "}
					<span className={"text-textOrange"}>
						{user
							? user.userData.first_name
									.toString()
									.substring(0, 10)
							: "Investor"}
					</span>
					,
				</div>
				<div className={"font-bold text-3xl"}>
					Welcome to the Investment Page
				</div>
				<div className={"w-1/2"}>
					For KYC purposes, you will be redirected to our partners
					pages to proceed
				</div>
				<Button
					onClick={() => {
						setClicked(true);
					}}
					className={
						"gradiented hover:border-textOrange rounded-2xl  w-1/4 text-white "
					}
					size={"large"}
				>
					{"Start"}
				</Button>
				<Modal
					className={"w-3/6 "}
					rootClassName={"bg-[#FAFAFA]"}
					open={clicked}
					footer={null}
					onCancel={() => {
						setClicked(false);
					}}
				>
					<ProjectSelection refetch={refetch} />
				</Modal>
				<Button
					className={"  w-1/2  gradientText border-none  rounded-2xl"}
					size={"large"}
				>
					{"Back To Projects"}
				</Button>
			</div>
		</div>
	);
};
export default InvestmentJourney;
