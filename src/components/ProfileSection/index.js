import React from "react";
import {Avatar} from "antd";

const ProfileSection = ({verified}) => {
    return (
        <div className={"w-full max-h-profileSection h-profileSection min-h-fit "}>
            <div
                className="flex flex-col  items-center justify-between pt-5 px-5 bg-primary gap-14 h-profileSection min-h-fit rounded-md w-full max-h-profileSection">
                <div className="flex flex-col items-center justify-center gap-3">
                    <Avatar
                        alt="avatar"
                        width={100}
                        height={100}
                        className="shadow-xl rounded-full"
                        src="/images/facebook.png"
                        size={60}
                    />
                    <div className="font-medium">Name surname</div>
                    <div className="text-sm">0xx9xxxx</div>
                    <div className="text-sm">Joined on xx/xx/xxxx</div>
                    {verified ? (
                        <div className="font-medium mt-3">Verified profile</div>
                    ) : (
                        <div className="text-transparent text-sm">Hidden Bro</div>
                    )}
                </div>
                <div className="flex flex-col py-5 items-center justify-center gap-5 w-full">
                    <button className="border-button_border text-button_border w-full py-3 border rounded-md">
                        Edit Profile
                    </button>
                    <div className="text-red mb-3">Logout</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;