import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import Login from "@/pages/Login";
import InvestmentJourney from "@/components/InvestmentJourney";

const ProjectOverview = ({ projectDetails }) => {
	const [account, setAccount] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [percentage, setPercentage] = useState(0);
	const [maxInvest, setMaxInvest] = useState(false);

	const [isLogin, setIsLogin] = React.useState(false);
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
		if (userInfo) {
			const maxInvested =
				userInfo?.totalAmountInvested === 40000 ||
				userInfo?.totalAmountInvested > 40000;

			const percent =
				userInfo?.totalAmountInvested >= 40000
					? 100
					: ((userInfo?.totalAmountInvested / 40000) * 100).toFixed(
							2
					  );
			setMaxInvest(maxInvested);
			setPercentage(percent);
		}
	}, [userInfo]);
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
					{projectDetails.name}
				</div>
				<p className={"text-start font-extrabold"}>
					<span>Target:</span>
					<span className="text-textOrange ml-2">100’000 MNH</span>
				</p>
				<div className={"flex flex-col"} style={{ width: "40%" }}>
					<span className="mb-1 text-left">Min/max amount</span>
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
				<p className={"text-justify"}>{projectDetails.description}</p>
				<Button
					onClick={() => {
						setAccount(true);
					}}
					className={
						"bg-button_border text-sm hover:border-textOrange w-fit gradiented rounded-full text-white"
					}
					size={"large"}
				>
					{isLogin ? "Invest in this Project" : "Connect To Invest"}
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
				<InvestmentJourney />
			</Modal>
		</div>
	);
};
export default ProjectOverview;
