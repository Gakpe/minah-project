import {useEffect, useState} from 'react';
import {UserContext} from '@/lib/UserContext';
import Router from 'next/router';
import {magic} from '@/lib/magic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css'

function MyApp({Component, pageProps}) {
    const [user, setUser] = useState();
    useEffect(() => {
        const handleBeforeUnload = () => {
            // Clear localStorage when the window is about to unload
            localStorage.clear();
        };

        // Attach the event listener when the component mounts
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    // If isLoggedIn is true, set the UserContext with user data
    // Otherwise, redirect to /login and set UserContext to { user: null }
    useEffect(() => {
        setUser({loading: true});
        magic.user.isLoggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                magic.user.getMetadata().then((userData) => setUser(userData));
            } else {
                setUser({user: null});
            }
        });
    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Component {...pageProps} />
        </UserContext.Provider>
    );
}

export default MyApp;
