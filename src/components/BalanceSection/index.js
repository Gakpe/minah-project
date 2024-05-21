import React, { useEffect, useState } from "react";
import { Button } from "antd";

const BalanceSection = () => {
	const [userInfo, setUserInfo] = useState();
	const [user, setUser] = useState();
	const [amountInvested, setAmountInvested] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("user")) {
				const userInfo = JSON.parse(localStorage.getItem("userInfo"));
				const userMetaData = JSON.parse(
					localStorage.getItem("userMetaData")
				);
				setUser(userInfo);
				setUserInfo(userMetaData);
				if (userMetaData.userData.amountInvested.length > 0) {
					let array = [
						...Object.values(
							userMetaData.userData.amountInvested[0]
						),
					];
					array = array.slice(0, array.length - 1).join("");
					setAmountInvested(array);
				}
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
				"bg-[#FAFAFA] shadow-xl  drop-shadow-xl flex flex-col items-center justify-between w-full   h-full  rounded-lg px-7 py-2  "
			}
		>
			<div
				className={
					"flex flex-col items-center gap-10  justify-between w-full h-full py-5"
				}
			>
				<div
					className={
						"bg-[#FBF4F2]  w-full h-full  text-textOrange font-bold rounded-lg p-6"
					}
				>
					<span className={"text-black font-bold text-lg"}>
						Balance:
					</span>
					<h1>{userInfo?.totalAmountInvested} MNH</h1>
					{amountInvested && (
						<h1>($ {formatNumber(amountInvested)})</h1>
					)}
				</div>
				<div
					className={
						"bg-[#FBF4F2]  w-full h-fit text-textOrange font-light text-sm rounded-lg p-6"
					}
				>
					<span className={"text-black font-bold text-lg"}>
						Next Claims:
					</span>
					<h1>xx/xx/xxxx</h1>
					<h1>xx/xx/xxxx</h1>
					<h1>xx/xx/xxxx</h1>
				</div>
				<Button
					className={
						"w-fit text-white backgroundGradient rounded-full hover:border-textOrange"
					}
				>
					Claim MNH
				</Button>
			</div>
		</div>
	);
};
export default BalanceSection;
