import React from "react";
import {Avatar} from "antd";
import {useRouter} from "next/router";
import {CheckOutlined} from "@ant-design/icons";

const ProfileSection = ({verified, userInfo}) => {
    const router = useRouter();
    const handleLogout = async () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("didToken")
            router.push("/")
        }
    }
    return (
        <div className={"w-full  min-h-fit  "}>
            <div
                className="flex flex-col  items-center justify-between pt-5 px-5  gap-14 bg-[#FAFAFA] shadow-xl rounded-lg drop-shadow-xl w-full max-h-profileSection">
                <div className="flex flex-col px-4 items-center w-full justify-center gap-3">
                    <Avatar className={"bordered"} onClick={() => {
                        router.push("/Profile")
                    }} src={userInfo? userInfo.picture:"/Images/avatar.svg"} size={130}/>
                    <div className="font-bold w-full">{userInfo.name}</div>
                    <div className="text-sm w-full">0xx9xxxx</div>
                    <div className="text-sm italic w-full">Joined on xx/xx/xxxx</div>
                    {verified ? (
                        <div className="font-medium  text-sm w-full"><CheckOutlined className={"text-green-800"}/>  Verified profile</div>
                    ) : (
                        <div className="text-transparent text-sm w-full">Hidden Bro</div>
                    )}
                </div>
                <div className="flex flex-col py-5 items-center justify-center gap-5 w-full">
                    <button onClick={() => {
                        console.log("I am here")
                        router.push("/EditProfile")
                    }} className=" w-1/2 rounded-full text-white h-full py-2 backgroundGradient">
                        Edit Profile
                    </button>
                    <button  onClick={handleLogout} className="gradientText border-textOrange rounded-full border w-1/2 h-full py-2 cursor-pointer mb-3">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
