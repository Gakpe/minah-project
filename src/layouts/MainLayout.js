import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({children}) => {

    return (

        <div className={"flex flex-col w-full  h-screen mainSetting overflow-hidden font-sans"}>
            <Navbar/>
            <div className={"flex flex-row w-full h-full mainSetting overflow-auto"}>


                <div className={"flex flex-col w-full h-full justify-start mainSetting  overflow-y-auto"}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default MainLayout;
