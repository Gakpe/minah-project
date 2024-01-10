import React, {useEffect, useState} from "react";
import {Button} from "antd";
import {getProjects} from "../../../util";

const BalanceSection = () => {
    const [userInfo, setUserInfo] = useState()
    useEffect(() => {

        if (typeof window !== "undefined") {
            const beforeParsing = JSON.parse(localStorage.getItem("userMetaData"))
            setUserInfo(beforeParsing.user)

        }
    }, []);
    return (<div
        className={"bg-[#FAFAFA] shadow-xl  drop-shadow-xl flex flex-col items-center justify-between w-full   h-full  rounded-lg px-7 py-12  "}>
        <div className={"flex flex-col items-center gap-10  justify-between w-full h-full py-5"}>
            <div className={"bg-[#FBF4F2]  w-full h-full  text-textOrange font-bold rounded-lg p-6"}>
                <span className={"text-black font-bold text-lg"}>Balance:</span>
                <h1>
                    {userInfo?.totalAmountInvested} MNH
                </h1><h1>
                    ($ 40’000.00)
                </h1>
            </div>
            <div className={"bg-[#FBF4F2]  w-full h-fit text-textOrange font-light text-sm rounded-lg p-6"}>
                <span className={"text-black font-bold text-lg"}>Next Claims:</span>
                <h1>
                    xx/xx/xxxx

                </h1><h1>
                xx/xx/xxxx

            </h1><h1>
                xx/xx/xxxx

            </h1>
            </div>
            <Button className={"w-1/2 h-full text-white backgroundGradient rounded-full hover:border-textOrange"}>Claim MNH</Button>

        </div>
    </div>)
}
export default BalanceSection;