import React, {useEffect, useState} from "react";
import {Button, Modal} from "antd";
import Login from "@/pages/Login";

const ProjectOverview = () => {
    const [account, setAccount] = useState(false);
    const [idToken, setIdToken] = useState();

    const [isLogin, setIsLogin] = React.useState(false);
    useEffect(() => {

        if (typeof window !== "undefined") {

            if (localStorage.getItem("didToken")) {
                setIsLogin(true)
            }
        }
    }, [account]);

    return (
        <div
            className={"flex flex-row  justify-between items-center  w-full h-full p-10 rounded-md bg-[#FAFAFA] drop-shadow-lg project-card"}>
            <div className={"flex flex-col gap-3 w-1/2 h-full  "}>

                <div className={"font-bold w-full  text-start text-5xl font-extrabold"}><span
                    className={"text-textOrange font-extrabold"}>Project</span> title 1
                </div>
                <p className={"text-start"}>Target: 100’000 MNH + Progress bar</p>
                <p className={"text-justify"}>Description text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi nulla arcu,
                    suscipit
                    eget sem quis, volutpat lobortis massa. Fusce vestibulum enim imperdiet, convallis lorem non,
                    sodales
                    neque. Cras faucibus est vitae odio facilisis posuere. Vestibulum id tortor ut arcu euismod
                    ullamcorper
                    non ut orci. Integer ornare nulla in nisi mattis iaculis. Praesent quis nisi orci. Nullam nulla
                    lacus,
                    bibendum nec euismod at, molestie sit amet ligula.
                </p>
                <Button onClick={() => {
                    setAccount(true)
                }}
                        className={"bg-button_border text-sm hover:border-textOrange w-fit gradiented rounded-full text-white"}
                        size={"large"}>{isLogin ? "Invest in this Project" : "Connect To Invest"}</Button>

            </div>


            <Modal
                closable={true}
                open={account}

                maskClosable={true}
                className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center bg-black bg-opacity-50"
                onCancel={() => {
                    setAccount(false)
                }}
            >
                <Login/>
            </Modal>

        </div>
    )
}
export default ProjectOverview;