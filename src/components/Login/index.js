import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { UserContext } from '@/lib/UserContext';
import { OAuthExtension } from '@magic-ext/oauth';

// import { magic } from '@/lib/magic';
import {Magic} from "magic-sdk"
import EmailForm from '@/components/EmailForm';
import SocialLogins from '@/components/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
        extensions: [new OAuthExtension()],
      });

    async function handleLoginWithSocial(provider) {
            setDisabled(true);
            console.log(provider);
            await magic.oauth.loginWithRedirect({
                provider:provider, // can be 'google', 'facebook', etc.
                redirectURI: `${window.location.origin}/callback`, // Make sure this URI is registered in your Magic dashboard
              });
        
    }


    async function handleLoginWithEmail(email) {
        try {
            setDisabled(true);
            console.log("ok");
            const did = await magic.auth.loginWithEmailOTP({ email: email});
            console.log(`DID Token: ${did}`);  
            const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + did,
                },
            });

            if (res.status === 200) {
               
                const data = await res.json();
                localStorage.setItem('userMetaData', JSON.stringify(data));
                let userMetadata = await magic.user.getMetadata();
                console.log("here is user metadata :", userMetadata)
                // localStorage.setItem('userMetaInfo', JSON.stringify(userMetadata))
                localStorage.setItem('user', userMetadata.publicAddress);
                window.location.reload();
                // await setUser(userMetadata);
                // Router.push('/Profile');
                setDisabled(false);

            }
        } catch (error) {
            setDisabled(false);
            console.log(error);
        }
    }

   

    return (
        <div className={"flex flex-col items-center justify-center  w-fit h-fit "}>
            <link rel="icon" href="/Images/favicon.png"/>

            <div className={"h-6 gradientedBackground rounded-t-lg w-full text-transparent"}>hello</div>

            <div className='flex flex-col items-center justify-center p-10 w-fit h-fit '>
                <div className='flex flex-col gap-5 items-center justify-center  w-full h-full'>
                    <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail} />
                    <SocialLogins 
                   onSubmit={handleLoginWithSocial}
                   disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
