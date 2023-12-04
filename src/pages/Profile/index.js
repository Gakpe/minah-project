import {useContext} from 'react';
import {UserContext} from "@/lib/UserContext";
import Loading from "@/components/Loading";


const Profile = () => {
    const [user] = useContext(UserContext);
    console.log("user", user)
    return (
        <>
            {user?.loading ? (
                <Loading/>
            ) : (
                user?.issuer && (
                    <>
                        <div className='label'>Email</div>
                        <div className='profile-info'>{user.email}</div>

                        <div className='label'>User Id</div>
                        <div className='profile-info'>{user.issuer}</div>
                    </>
                )
            )}
            <style jsx>{`
              .label {
                font-size: 12px;
                color: #6851ff;
                margin: 30px 0 5px;
              }

              .profile-info {
                font-size: 17px;
                word-wrap: break-word;
              }
            `}</style>
        </>
    );
};

export default Profile;
