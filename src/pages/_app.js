import {useEffect, useState} from 'react';
import {UserContext} from '@/lib/UserContext';
import {useRouter} from 'next/router';
import {magic} from '@/lib/magic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css'
import {usePathname} from "next/navigation";

function MyApp({Component, pageProps}) {
    const [user, setUser] = useState();
    const router = useRouter()
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            // Check if the event is due to a page refresh or route change
            const isPageRefresh = !event.currentTarget.performance.navigation.type;
            if (!isPageRefresh) {
                // Clear localStorage when the window is about to unload
                localStorage.clear();
            }
        };

        // Attach the event listener when the component mounts
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    const pathName = usePathname()
    useEffect(() => {
        const checkUserAndRedirect = async () => {
            if (typeof window !== 'undefined') {
                if (!localStorage.getItem('user')) {
                    const pathName = router.asPath;

                    if (pathName.startsWith('/Projects') || pathName.startsWith('/ProjectDetails') || pathName.startsWith('/Profile')) {
                        await router.push('/');
                    }
                }
            }

            const isLoggedIn = await magic.user.isLoggedIn();
            if (!isLoggedIn) {
                // If not logged in, redirect to the '/' route
                await router.push('/');
            } else {
                const userData = await magic.user.getMetadata();
                setUser(userData);
            }
        };

        checkUserAndRedirect();
    }, [router]);

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Component {...pageProps} />
        </UserContext.Provider>
    );
}

export default MyApp;
