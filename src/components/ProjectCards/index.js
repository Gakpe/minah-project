import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "@/pages/Login";

const ProjectCard = ({ title, description, projectDetails, image, bg }) => {
	const router = useRouter();
	const [users, setUser] = useState();
	const [isLogin, setIsLogin] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);

	console.log("here is projectDetails :", projectDetails);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const user = localStorage.getItem("user");
			if (user !== "" && user != null) {
				setUser(user);
				setIsLogin(true);
			}
		}
	}, []);
	return (
		<div
			className={`${
				image ? "project-card" : "project-card2 "
			} drop-shadow-lg ${
				bg ? `bg-white/60` : "bg-[#FAFAFA]"
			}  px-10 py-5`}
		>
			<div
				className="title-section testClass py-5"
				onClick={() => {
					router.push({
						pathname: "/ProjectDetails",
						query: { data: JSON.stringify(projectDetails) },
					});
				}}
			>
				<h1 className="text-black text-5xl font-extrabold">
					<span className={"title"}>Project</span> {title}
				</h1>
			</div>
			<p className="description text-justify">{description}</p>
			<div className="icon-section">
				{/* Replace these with actual icons and their labels */}
				<Image
					className={
						"hover:scale-105 hover:duration-300 cursor-pointer"
					}
					src={"/Images/ProjectFeature01.svg"}
					alt={""}
					width={60}
					height={60}
				/>
				<Image
					className={
						"hover:scale-105 hover:duration-300 cursor-pointer"
					}
					src={"/Images/ProjectFeature02.svg"}
					alt={""}
					width={60}
					height={60}
				/>
				<Image
					className={
						"hover:scale-105 hover:duration-300 cursor-pointer"
					}
					src={"/Images/ProductFeature03.svg"}
					alt={""}
					width={60}
					height={60}
				/>
				<Image
					className={
						"hover:scale-105 hover:duration-300 cursor-pointer"
					}
					src={"/Images/ProjectFeature04.svg"}
					alt={""}
					width={60}
					height={60}
				/>
			</div>
			<div className="button-section">
				{isLogin ? (
					<Button
						className="text-white hover:border-textOrange rounded-full gradiented"
						size="large"
						onClick={() => {
							localStorage.setItem(
								"projectDetails",
								JSON.stringify(projectDetails)
							);
							router.push({
								pathname: "/ProjectDetails",
								query: { data: JSON.stringify(projectDetails) },
							});
						}}
					>
						Discover the project
					</Button>
				) : (
					<Button
						className="text-black rounded-full gradientText border-textOrange"
						size="large"
						onClick={() => {
							setOpenLogin(true);
						}}
					>
						Login to discover the project
					</Button>
				)}
			</div>
			<Modal
				className=" h-fit flex"
				open={openLogin}
				footer={null}
				onCancel={() => {
					setOpenLogin(false);
				}}
			>
				<Login />
			</Modal>
		</div>
	);
};

export default ProjectCard;
