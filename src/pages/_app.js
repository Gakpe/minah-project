import {useEffect, useState} from 'react';
import {UserContext} from '@/lib/UserContext';
import Router from 'next/router';
import {magic} from '@/lib/magic';
import '@/styles/globals.css'

function MyApp({Component, pageProps}) {
    const [user, setUser] = useState();

    // If isLoggedIn is true, set the UserContext with user data
    // Otherwise, redirect to /login and set UserContext to { user: null }
    useEffect(() => {
        setUser({loading: true});
        magic.user.isLoggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                magic.user.getMetadata().then((userData) => setUser(userData));
            } else {
                Router.push('/');
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
