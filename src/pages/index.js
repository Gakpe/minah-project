import {useContext} from 'react';
import Loading from '../components/loading';
import {UserContext} from "@/lib/UserContext";

const Home = () => {
    const [user] = useContext(UserContext);

    return <>{user?.loading ? <Loading/> : user?.issuer && <div>You're logged in!</div>}</>;
};

export default Home;
