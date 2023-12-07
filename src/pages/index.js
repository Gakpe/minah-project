import {useContext} from 'react';
import {UserContext} from "@/lib/UserContext";
import Loading from "@/components/Loading";

const Home = () => {
    const [user] = useContext(UserContext);

    return <>{user?.loading ? <Loading/> : user?.issuer && <div>You&apos;re logged in!</div>}</>;
};

export default Home;
