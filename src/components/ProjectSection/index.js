import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Avatar, Button } from "antd";
import { getProjects } from "../../../util";
import moment from "moment";

const ProjectSection = ({ userData }) => {
	const [projects, setProjects] = useState([]);
	const [userInfo, setUserInfo] = useState();
	const [user, setUser] = useState();
	const [amountInvested, setAmountInvested] = useState(0);

	const router = useRouter();

	useEffect(() => {
		getProjects()
			.then((res) => {
				setProjects(res.result.projects);
				console.log("projects = ", projects);
			})
			.catch((err) => {
				console.log("here is err :", err);
			});
		if (typeof window !== "undefined") {
			if (localStorage.getItem("user")) {
				const userInfo = JSON.parse(localStorage.getItem("userInfo"));
				const userMetaData = JSON.parse(
					localStorage.getItem("userMetaData")
				);

				if (userData?.amountInvested?.length > 0) {
					const totalAmount = userData.amountInvested.reduce(
						(total, investment) => total + +investment.amount,
						0
					  );
					  setAmountInvested(totalAmount);
				}

				setUser(userInfo);
				setUserInfo(userMetaData);
			}
		}
	}, []);

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
		<div
			className={
				"bg-[#FAFAFA] h-full shadow-xl ProjectSection mainSetting drop-shadow-xl flex flex-col gap-4 w-full sm:p-7  overflow-y-scroll rounded-md p-7 "
			}
		>
			<div className={"text-2xl font-bold "}>
				<span className={"text-textOrange font-bold"}>My</span> Projects
			</div>
			<div
				className={
					"flex flex-col  items-center gap-3 rounded-md justify-center w-full h-full"
				}
			>
				{amountInvested !== 0 && projects.length > 0 ? (
					projects.map((project, index) => (
						<div
							key={index}
							className={
								"flex flex-row py-7 px-5 items-center rounded-lg justify-start w-full bg-[#FBF4F2] gap-7 "
							}
						>
							<div
								className={
									"flex w-full flex-col text-black items-start gap-2 justify-center"
								}
							>
								<div className={"font-bold text-black text-lg"}>
									Project title 1
								</div>
								<p className={"font-medium text-sm"}>
									Amount invested: ${" "}
									{formatNumber(amountInvested)}{" "}
								</p>

								<div className="flex w-full flex-row gap-2">
									<Image
										className={
											"hover:scale-105 hover:duration-300 cursor-pointer"
										}
										src={"/Images/ProjectFeature01.svg"}
										alt={""}
										width={20}
										height={20}
									/>
									<Image
										className={
											"hover:scale-105 hover:duration-300 cursor-pointer"
										}
										src={"/Images/ProjectFeature02.svg"}
										alt={""}
										width={20}
										height={20}
									/>
									<Image
										className={
											"hover:scale-105 hover:duration-300 cursor-pointer"
										}
										src={"/Images/ProductFeature03.svg"}
										alt={""}
										width={20}
										height={20}
									/>
									<Image
										className={
											"hover:scale-105 hover:duration-300 cursor-pointer"
										}
										src={"/Images/ProjectFeature04.svg"}
										alt={""}
										width={20}
										height={20}
									/>
								</div>
								<p
									className={
										"text-sm font-bold text-textOrange  text-center  w-full hover:cursor-pointer hover:underline"
									}
									onClick={() => {
										router.push(
											`/ProjectDetails/${project._id}`
										);
									}}
								>
									View Project Details
								</p>
							</div>
						</div>
					))
				) : (
					<div
						className={
							"flex flex-col w-full h-full py-20 items-center justify-center gap-5"
						}
					>
						<h1 className="font-bold">You didn’t invest in any projects </h1>
						<div className="w-40 h-40 bg-gray-300 rounded-full"></div>
						<div
							onClick={() => {
								router.push("/Projects");
							}}
							className={`ProjectsMobile text-black text-sm p-3 font-normal gradiented cursor-pointer rounded-full text-white  duration-150 transition-all"`}
						>
							Projects / Discover the universe
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectSection;
