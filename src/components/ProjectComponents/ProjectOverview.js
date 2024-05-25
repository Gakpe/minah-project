import React, { useEffect, useState, useCallback } from "react";
import { Button, Modal } from "antd";
import Login from "@/pages/Login";
import InvestmentJourney from "@/components/InvestmentJourney";
import { getUser } from "../../../util";

const ProjectOverview = ({ projectDetails, refetch }) => {
	const [account, setAccount] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [percentage, setPercentage] = useState(0);

	const [isLogin, setIsLogin] = React.useState(false);

	const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === "true" ? true : false;

	const formatNumber = (num) => {
		const numStr = num.toString();
		const formattedParts = [];

		for (let i = numStr.length - 1; i >= 0; i -= 3) {
			const start = Math.max(0, i - 2);
			const part = numStr.substring(start, i + 1);
			formattedParts.unshift(part);
		}

		return formattedParts.join("'");
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("didToken")) {
				setIsLogin(true);
			}
			if (localStorage.getItem("projectDetails")) {
				setUserInfo(JSON.parse(localStorage.getItem("projectDetails")));
			}
		}
	}, [account]);

	useEffect(() => {
		if (projectDetails?.totalAmountInvested) {
			let percent = (projectDetails?.totalAmountInvested / 40000) * 100;
			percent = percent >= 100 ? 100 : percent;
			setPercentage(percent);
		}
	}, [projectDetails?.totalAmountInvested]);
	return (
		<div
			className={
				"flex flex-row  justify-between items-center  w-full h-full px-10 py-32  bg-[#FAFAFA] drop-shadow-lg project-card-detail"
			}
		>
			<div className={"flex flex-col gap-3 w-1/2 h-full  "}>
				<div className={" w-full  text-start text-5xl font-extrabold"}>
					<span className={"text-textOrange font-extrabold"}>
						Project
					</span>{" "}
					{projectDetails?.name || "Lome Kovie"}
				</div>
				<p className={"text-start font-extrabold"}>
					<span>Target:</span>
					<span className="text-textOrange ml-2">100’000 MNH</span>
				</p>
				<div className={"flex flex-col"} style={{ width: "40%" }}>
					{projectDetails?.totalAmountInvested && <span className="mb-1 text-left">{formatNumber(projectDetails?.totalAmountInvested)}€/ 40’000€</span>}
					<div
						className="p-1"
						style={{
							height: "18px",
							borderRadius: "10px",
							WebkitBoxShadow:
								"0px 1px 19px -2px rgba(0,0,0,0.47)",
							boxShadow: "0px 1px 19px -2px rgba(0,0,0,0.47)",
							position: "relative",
						}}
					>
						<div
							style={{
								height: "100%",
								width: `${percentage}%`,
								borderRadius: "10px",
								background:
									"linear-gradient(to right, #B6473B 0%, #C3685E 36%, #E27B30 62%, #DFC74C 100%)",
							}}
						></div>
					</div>
				</div>
				<p className={"text-justify"}>
					{projectDetails?.description || "Project Alpha - Lomé/Kovie represents a multifaceted approach to real estate and agricultural development in Togo. This project features three main components, each  selected to optimize both investor ROI and socio-economic growth in the region."}
				</p>
				<Button
					href={isDemoMode ? "https://tally.so/r/w8x8BO" : null} 
					onClick={() => {
						if (!isDemoMode) {
							setAccount(true);
						}
					}}
					className={
						"bg-button_border flex justify-center items-center text-center text-sm hover:border-textOrange w-fit gradiented rounded-full text-white"
					}
					size={"large"}
				>
					{isDemoMode ? "Join the waitlist" : (isLogin ? "Invest in this Project" : "Connect To Invest")}
				</Button>
			</div>

			<Modal
				className={"w-3/6 h-full "}
				rootClassName={"bg-[#FAFAFA]"}
				open={account}
				footer={null}
				onCancel={() => {
					setAccount(false);
				}}
			>
				<InvestmentJourney refetch={refetch} />
			</Modal>
		</div>
	);
};
export default ProjectOverview;
