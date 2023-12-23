import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { UserContext } from '@/lib/UserContext';
import { magic } from '@/lib/magic';
import EmailForm from '@/components/EmailForm';
import SocialLogins from '@/components/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(false);
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        user?.issuer && Router.push('/Profile');
    }, [user]);

    async function handleLoginWithEmail(email) {
        try {
            setDisabled(true);

            let didToken = await magic.auth.loginWithMagicLink({
                email,
                redirectURI: new URL('/callback', window.location.origin).href,
            });

            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + didToken,
                },
            });

            if (res.status === 200) {
                console.log("here is res :", res)
                let userMetadata = await magic.user.getMetadata();
                await setUser(userMetadata);
                Router.push('/Profile');
            }
        } catch (error) {
            setDisabled(false);
            console.log(error);
        }
    }

    async function handleLoginWithSocial(provider) {
       const response = await magic.oauth.loginWithRedirect({
            provider,
            redirectURI: new URL('/callback', window.location.origin).href,
        });
        console.log("here is response :", response)
    }

    return (
        <div className='flex flex-col items-center justify-center  w-fit h-fit py-3 px-3'>
            <div className='flex flex-col gap-5 items-center justify-center w-full h-full'>
                <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail} />
                <SocialLogins onSubmit={handleLoginWithSocial} />
            </div>
        </div>
    );
};

export default Login;
