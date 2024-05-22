import React, { useEffect, useState, useCallback } from "react";
import { Button, Modal } from "antd";
import Login from "@/pages/Login";
import InvestmentJourney from "@/components/InvestmentJourney";
import { getUser } from "../../../util";

const ProjectOverview = ({ projectDetails }) => {
	const [account, setAccount] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [userData, setUserData] = useState(null);
	const [percentage, setPercentage] = useState(0);

	const [isLogin, setIsLogin] = React.useState(false);


	const handleRefetch = useCallback(() => {
		let didToken = localStorage.getItem("didToken");
		console.log("HANDLE REFETCHHHH");
		getUser(didToken).then(res => {
			setUserData(res.result.userData);
		})
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("didToken")) {
				setIsLogin(true);
			}
			if (localStorage.getItem("projectDetails")) {
				setUserInfo(JSON.parse(localStorage.getItem("projectDetails")));
			}

			let didToken = localStorage.getItem('didToken');
			handleRefetch(didToken);
			// if (userData?.amountInvested?.length > 0) {
			// 	const totalAmount = userData.amountInvested.reduce(
			// 		(total, investment) => total + +investment.amount,
			// 		0
			// 	);
			// }
		}
	}, [account, handleRefetch]);

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
					{projectDetails?.name || "name default"}
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
				<p className={"text-justify"}>
					{projectDetails?.description || "description default"}
				</p>
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
				<InvestmentJourney refetch={handleRefetch} />
			</Modal>
		</div>
	);
};
export default ProjectOverview;
