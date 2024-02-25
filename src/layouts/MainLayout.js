// MainLayout.js

import React from "react";
import { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from '@/components/LoadingPage';


const MainLayout = ({ children }) => {
    return (
        <div className={"flex flex-col backgroundColored w-full min-h-screen mainSetting font-sans"}>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <div className={"flex-grow flex backgroundImages flex-col w-full overflow-y-auto"}>
                    {children}
                    <Footer />
                </div>
            </Suspense>

        </div>
    );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default MainLayout;
