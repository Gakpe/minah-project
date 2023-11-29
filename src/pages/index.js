// pages/index.js
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import { useEffect, useState } from "react";
import Login from "@/pages/Login"; // Update the import to use loginUser function

const Home = () => {
    const [user, setUser] = useState({ isLoggedIn: null, email: '' });
    const [loading, setLoading] = useState(false);
    const [emailInput, setEmailInput] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        // Perform any necessary client-side validation

        try {
            setLoading(true);

            // Authenticate the user and get the session token
            const token = await loginUser(emailInput);

            // You may also want to update the UI to show a success message or redirect the user
            // This example just updates the user state to indicate that a link has been sent
            setUser({ isLoggedIn: true, email: emailInput, token });
        } catch (error) {
            console.error('Error sending magic link:', error);
            // Handle error, e.g., display an error message to the user
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <HeroSection />

           <Login/>
        </MainLayout>
    );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
