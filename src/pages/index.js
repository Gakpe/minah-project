// pages/index.js
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";

const Home = () => {
    return (
        <MainLayout>

            <HeroSection />
        </MainLayout>
    );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
