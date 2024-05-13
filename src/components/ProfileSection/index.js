import React, { useEffect } from "react";
import { Avatar, Modal } from "antd";
import { useRouter } from "next/router";
import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons";
import FormSection from "@/components/FormSection";
import moment from "moment";
const ProfileSection = ({ verified, userInfo }) => {
	const router = useRouter();
	const [editClicked, setEditClicked] = React.useState(false);

	const handleLogout = async () => {
		if (typeof window !== "undefined") {
			localStorage.clear();
			router.push("/");
		}
	};
	const getFirstNameLastName = () => {
		let first_Name = "";
		let last_Name = "";
		if (userInfo) {
			if (userInfo.name) {
				first_Name = userInfo?.name;
			} else if (userInfo.last_name) {
				last_Name = userInfo?.last_name;
			}
			return first_Name + " " + last_Name;
		}
	};

	const [user, setUser] = React.useState(null);
	const [date, setDate] = React.useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("user")) {
				setUser(localStorage.getItem("user"));
				const userMetaData = JSON.parse(localStorage.getItem("userMetaData")); 
				setDate(userMetaData.userData.createdAt);
				console.log("date = ", date);
			}
		}
	}, [date]);
	return (
		<div className={"w-full  min-h-fit"}>
			<div className="flex flex-col  items-center justify-between pt-5 px-5  gap-14 bg-[#FAFAFA] shadow-xl rounded-lg drop-shadow-xl w-full max-h-profileSection">
				<div className="flex flex-col px-4 items-center w-full justify-center gap-3">
					<Avatar
						className={"bordered"}
						onClick={() => {
							router.push("/Profile");
						}}
						src={userInfo?.picture}
						size={130}
					/>
					<div className="font-bold text-center w-full">
						{getFirstNameLastName()}
					</div>
					<div className="text-sm text-center w-full">
						{" "}
						{user?.substring(0, 10)}
					</div>

					<div className="text-sm italic text-center w-full">
						Joined on{" "}
						{moment(date).format("DD/MM/YY")}
					</div>
					{verified ? (
						<div className="font-medium text-center text-sm w-full">
							<CheckCircleOutlined className={"text-green-800"} />{" "}
							Verified profile
						</div>
					) : (
						<div className="text-transparent text-sm w-full">
							Hidden Bro
						</div>
					)}
				</div>
				<div className="flex flex-col py-5 items-center justify-center gap-5 w-full">
					<button
						onClick={() => {
							setEditClicked(true);
						}}
						className=" w-1/2 rounded-full text-white h-full py-2 backgroundGradient"
					>
						Edit Profile
					</button>
					<button
						onClick={handleLogout}
						className="gradientText border-textOrange rounded-full border w-1/2 h-full py-2 cursor-pointer mb-3"
					>
						Logout
					</button>
				</div>
				<Modal
					open={editClicked}
					onCancel={() => {
						setEditClicked(false);
					}}
					footer={null}
				>
					{" "}
					<FormSection
						handleCancel={() => {
							setEditClicked(false);
						}}
					/>
				</Modal>
			</div>
		</div>
	);
};

export default ProfileSection;
