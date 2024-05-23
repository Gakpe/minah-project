import React, { useEffect, useState, useCallback } from "react";
import MainLayout from "@/layouts/MainLayout";
import ProjectOverview from "@/components/ProjectComponents/ProjectOverview";
import ProjectTabsSection from "@/components/ProjectComponents/ProjectTabsSection";
import { Avatar, Breadcrumb, Button, Modal, Progress } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import InvestmentJourney from "@/components/InvestmentJourney";
import { getProjects, getUser } from "../../../../util";

const ProjectDetails = () => {
	const router = useRouter();
	const [clicked, setClicked] = React.useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [userInfos, setUserInfos] = useState(null);
	const [project, setProject] = useState(null);
	const [userData, setUserData] = useState(null);

	const [percentage, setPercentage] = useState(0);
	const [maxInvest, setMaxInvest] = useState(false);
	const [amountInvested, setAmountInvested] = useState(0);

	const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === "true" ? true : false;

	const { id } = router.query;

	const handleLogout = async () => {
		if (!isDemoMode) {
			setClicked(true);
		}
	};

	const handleRefetch = useCallback(() => {
		let didToken = localStorage.getItem("didToken");
		getUser(didToken).then((res) => {
			setUserData(res.result.userData);
			if (res?.result?.userData?.amountInvested?.length > 0) {
				const totalAmount = res?.result?.userData?.amountInvested.reduce(
					(total, investment) => total + +investment.amount,
					0
				  );
				  setAmountInvested(totalAmount);
			}
		});
	}, []);

	useEffect(() => {
		getProjects()
			.then((res) => {
				setProject(() => {
					const project = res.result.projects.find((project) => {
						return project._id === id;
					});
					return project;
				});
			})
			.catch((err) => {
				console.log("here is err :", err);
			});
	}, [id]);

	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem("userMetaData")));
		setUserInfos(JSON.parse(localStorage.getItem("userInfo")));

		handleRefetch();
	}, [handleRefetch]);

	useEffect(() => {
		if (amountInvested) {
			let percent = (amountInvested / 40000) * 100;
			percent = percent >= 100 ? 100 : percent;
			setPercentage(percent);
		}
	}, [amountInvested]);

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

	return (
		<MainLayout>
			<Modal
				className={"w-3/6 "}
				rootClassName={"bg-[#FAFAFA]"}
				open={clicked}
				footer={null}
				onCancel={() => {
					setClicked(false);
				}}
			>
				<InvestmentJourney refetch={handleRefetch} />
			</Modal>
			<title>Minah | Project Details</title>
			<link rel="icon" href="/Images/favicon.png" />

			<div
				className={
					"flex  flex-col items-center justify-center gap-7 w-full h-full p-10"
				}
			>
				<Breadcrumb separator={<RightOutlined />} className={"w-full"}>
					<Breadcrumb.Item className={"text-black"}>
						<Link
							className={"text-black font-extrabold"}
							href={"/"}
						>
							Home
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item className={"text-black"}>
						<Link
							className={"text-black font-extrabold"}
							href={"/Projects"}
						>
							Projects
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item className={"text-textOrange"}>
						<Link
							className={"text-textOrange font-extrabold"}
							href={"/Projects/ProjectDetails"}
						>
							Project
							{project?.name}
						</Link>
					</Breadcrumb.Item>
				</Breadcrumb>

				{project && (
					<ProjectOverview
						projectDetails={project}
						refetch={handleRefetch}
					/>
				)}
				<div
					className={
						"flex flex-row w-full sm:flex-col sm:w-fit gap-8"
					}
				>
					<ProjectTabsSection />
					<div
						className={
							"flex gap-8 flex-col items-center justify-center w-1/4 sm:w-full h-full"
						}
					>
						{userData?._id ? (
							<div
								className={
									"flex w-full  flex-col p-5 gap-4 bg-[#FAFAFA] drop-shadow-lg rounded-md "
								}
							>
								<div
									className={
										"text-textOrange text-xl font-extrabold flex flex-col"
									}
								>
									<div className="flex items-center mb-2">
										<Avatar
											className={"bordered flex-shrink-0"}
											src={userInfos?.picture}
											size={40}
										/>

										{amountInvested && <span className="ml-2 text-black text-xs font-bold">
											You already invested{" "}
											{formatNumber(amountInvested) || 0}$ in
											this project
										</span>}
									</div>
									<span>
										<span className={"text-black mr-1"}>
											Target:
										</span>
										100’000 MNH
									</span>
									<span>($ 40’000.00)</span>
								</div>
								<div className={"flex flex-col"}>
									{project?.totalAmountInvested && <span className="mb-1">{formatNumber(project?.totalAmountInvested) || 0}/ 40’000€</span>}
									<div
										className="p-1"
										style={{
											height: "18px",
											borderRadius: "10px",
											WebkitBoxShadow:
												"0px 1px 19px -2px rgba(0,0,0,0.47)",
											boxShadow:
												"0px 1px 19px -2px rgba(0,0,0,0.47)",
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

								<div className={"flex justify-center items-center text-center"}>
									<Button
										href={isDemoMode ? "https://tally.so/r/w8x8BO" : null}
										onClick={handleLogout}
										className={
											"bg-button_border flex justify-center items-center text-center backgroundGradient w-4/5 h-11 text-md text-white rounded-full"
										}
									>
										{isDemoMode ? "Join the waitlist" : "Invest"}
									</Button>
								</div>
							</div>
						) : (
							<div
								className={
									"flex w-full  flex-col p-5 gap-4 bg-[#FAFAFA] drop-shadow-lg rounded-md "
								}
							>
								<div
									className={
										"text-textOrange text-xl font-extrabold flex flex-col"
									}
								>
									<div className="flex items-center mb-2">
										<Avatar
											className={"bordered flex-shrink-0"}
											src={userInfos?.picture}
											size={40}
										/>

										<span className="ml-2 text-black text-xs font-bold">
											You already invested{" "}
											{formatNumber(amountInvested)}$ in
											this project
										</span>
									</div>
									<span>
										<span className={"text-black mr-1"}>
											Target:
										</span>
										100’000 MNH
									</span>
									<span>($ 40’000.00)</span>
								</div>
								<div className={"flex flex-col"}>
									<span className="mb-1">Min/max amount</span>
									<div
										className="p-1"
										style={{
											height: "18px",
											borderRadius: "10px",
											WebkitBoxShadow:
												"0px 1px 19px -2px rgba(0,0,0,0.47)",
											boxShadow:
												"0px 1px 19px -2px rgba(0,0,0,0.47)",
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

								<div className={" items-center text-center"}>
									<Button
										onClick={handleLogout}
										className={
											"bg-button_border backgroundGradient w-4/5 h-11 text-md text-white rounded-full"
										}
									>
										Invest
									</Button>
								</div>
							</div>
						)}

						<div
							className={
								"flex w-full h-full flex-col py-5 px-5 gap-4 bg-[#FAFAFA] rounded-lg drop-shadow-lg "
							}
						>
							<div className={"font-bold text-black text-xl"}>
								<span className={"text-textOrange font-bold"}>
									{" "}
									SDG{" "}
								</span>{" "}
								Objectives
							</div>
							<ol
								className={
									"flex flex-col gap-3 text-black font-bold"
								}
							>
								<li>Objective 1</li>
								<li>Objective 2</li>
								<li>Objective 2</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
export default ProjectDetails;
