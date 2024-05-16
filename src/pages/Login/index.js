import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { UserContext } from '@/lib/UserContext';
import { magic } from '@/lib/magic';
import EmailForm from '@/components/EmailForm';
import SocialLogins from '@/components/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(false);
    const [user, setUser] = useContext(UserContext);



    async function handleLoginWithEmail(email) {
        try {
            setDisabled(true);
            
            let didToken = await magic.wallet.connectWithUI()
            console.log(didToken)
            const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URI + '/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + didToken,
                },
            });

            if (res.status === 200) {
                console.log("here is res :", await res.json())
                let userMetadata = await magic.user.getMetadata();
                console.log("user we got",userMetadata)
                // await setUser(userMetadata);
                // Router.push('/Profile');
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
                    <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail}/>
                    <SocialLogins 
                   // onSubmit={handleLoginWithSocial}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
