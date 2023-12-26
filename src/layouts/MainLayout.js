import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className={"flex flex-col w-full min-h-screen mainSetting font-sans"}>
            <Navbar />
            <div className={"flex-grow flex flex-col w-full overflow-y-auto"}>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default MainLayout;
