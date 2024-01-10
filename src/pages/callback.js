import {useContext, useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';
import {UserContext} from "@/lib/UserContext";
import {magic} from "@/lib/magic";
import Loading from "@/components/Loading";
import {Button, Modal} from "antd";
import Login from "@/pages/Login";

const Callback = () => {
    const router = useRouter();
    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        router.query.provider
            ? finishSocialLogin()
            : finishEmailRedirectLogin();
    }, [router.query]);

    const finishSocialLogin = async () => {
        try {
            let result = await magic.oauth.getRedirectResult();
            console.log("here is result :", result)
            localStorage.setItem('userInfo', JSON.stringify(result.oauth.userInfo))
            localStorage.setItem('didToken', result.magic.idToken);
            authenticateWithServer(result.magic.idToken);
        } catch (error) {
            console.error("Error during social login:", error);
            setError("An error occurred during login. Please try again.");
        }
    };

    const finishEmailRedirectLogin = () => {
        if (router.query.magic_credential) {
            magic.auth
                .loginWithCredential()
                .then((didToken) => authenticateWithServer(didToken))
                .catch((error) => {
                    console.error("Error during email redirect login:", error);
                    setError("An error occurred during login. Please try again.");
                });
        }
    };

    const authenticateWithServer = async (didToken) => {
        try {
            let res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + didToken,
                },
            });

            if (res.status === 200) {
                // console.log("here is response in return :", await res.json())
                const data = await res.json();
                console.log("here is data :", data)
                localStorage.setItem('userMetaData', data.result);
                let userMetadata = await magic.user.getMetadata();
                console.log("here is user metadata :", userMetadata)
                // localStorage.setItem('userMetaInfo', JSON.stringify(userMetadata))
                localStorage.setItem('user', userMetadata.publicAddress);
                await setUser(userMetadata);
                Router.push('/');
            } else {
                console.error("Authentication failed:", res);
                setError("Authentication failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during authentication:", error);
            setError("An error occurred during authentication. Please try again.");
        }
    };

    if (error) {
        return (
            <div>
                <Modal
                    closable={false}
                    open={true}
                    footer={[]}
                    title={"We could not log you in"}
                    className={"w-full h-full rounded-lg items-center flex justify-center"}

                >
                    <div className={"flex flex-col items-center justify-center w-full h-fit gap-4 "}>
                        <Button className={"rounded-2xl"}>Retry</Button>
                        <Button onClick={() => {
                            setIsLogin(true)
                        }} className={"rounded-2xl"}>Back To Projects</Button>
                    </div>
                </Modal>
                <Modal
                    open={isLogin}
                    className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center bg-black bg-opacity-50"
                    footer={[]}
                >
                    <Login/>
                </Modal>
            </div>
        );
    }

    return (
        <div className={"w-full h-screen items-center flex justify-center"}>
            <Loading/>
        </div>
    );
};

export default Callback;
