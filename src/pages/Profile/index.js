import ProfileSection from "@/components/ProfileSection";
import ProjectSection from "@/components/ProjectSection";
import BalanceSection from "@/components/BalanceSection";
import ContactUs from "@/components/ContactUs";
import MainLayout, { getLayout } from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { getUser } from "../../../util";

const Home = () => {
	const [userInfo, setUserInfo] = useState(null);
	const [userData, setUserData] = useState(null);
	
	useEffect(() => {
		if (localStorage.getItem("userMetaData")) {
			const userInfos = JSON.parse(localStorage.getItem("userInfo"));
			setUserInfo(userInfos);
		}
		const userMetaInfo = localStorage.getItem('userInfo');

		let didToken = localStorage.getItem('didToken');

		getUser(didToken).then(res => {
			setUserData(res.result.userData);
		}).catch(err => {
			console.error(err);
		})
		
		// updateProfile({}, userMetaInfo?.user.issuer).then(res => {
		// 	console.log("resSSSSSSSSSS = ", res);
		// })
	}, []);
	// const projectData = [
	// 	{
	// 		id: 1,
	// 		imageUrl: "/Images/facebook.png",
	// 		title: "Project title 1",
	// 		amountInvested: "$1,000.00",
	// 		investments: ["$500.00 on xx/xx/xxxx", "$500.00 on xx/xx/xxxx"],
	// 		viewDetailsText: "View project details",
	// 	},
	// 	{
	// 		id: 2,
	// 		imageUrl: "/Images/apple.png",
	// 		title: "Project title 2",
	// 		amountInvested: "$2,000.00",
	// 		investments: ["$1,000.00 on xx/xx/xxxx", "$1,000.00 on xx/xx/xxxx"],
	// 		viewDetailsText: "View project details",
	// 	},
	// ];

	return (
		<MainLayout>
			<title>Minah | Profile</title>
			<link rel="icon" href="/Images/favicon.png" />

			<div
				className={
					"flex flex-col items-center backgroundColored justify-center py-20 gap-8 w-full h-full "
				}
			>
				<div
					className={
						"flex flex-row w-full px-20 justify-center gap-10"
					}
				>
					<div className="w-1/6 sm:w-full flex flex-col">
					<ProfileSection
                            userInfo={userInfo ? userInfo : null}
                            verified={true}
                        />
					</div>
					<div className="w-1/2 sm:w-fullflex flex-col">
					<ProjectSection userData={userData} />
					</div>
					<div className="w-1/6 sm:w-full flex flex-col">
						<BalanceSection userData={userData} />
					</div>
				</div>
				<div className={"flex flex-row mobileContact gap-3"}>
					<ContactUs
						button={"Contact Us"}
						title={"You have a project?"}
					/>
					<ContactUs
						button={"Join the community"}
						title={"You want to invest?"}
					/>
				</div>
			</div>
		</MainLayout>
	);
};

Home.getLayout = getLayout;
export default Home;
