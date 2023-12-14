import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "@/lib/UserContext";
import Loading from "@/components/Loading";
import {useDropzone} from 'react-dropzone';
import {deleteProfile, getVaults, updateProfile} from "../../../util";
import {useRouter} from "next/router";
import ProfileCard from "@/components/ProfileCard";

const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    const [formData, setFormData] = useState({
        address: user?.address || '',
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        image: user?.image || '',
    });
    const router = useRouter();
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const onDrop = (acceptedFiles) => {
        // Assuming you want to upload only one file
        const file = acceptedFiles[0];
        setFormData({...formData, image: file});
    };

    useEffect(() => {
            getVaults().then((res) => {
                    console.log(res)

                }
            )

        }
        , [user])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    const handleDelete = async (e) => {
        e.preventDefault()
        const deleteUser = await deleteProfile(user.issuer);
        if (deleteUser.responseCode === 200) {
            alert("Delete profile successfully")
            setUser(null);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        // You can add your logic to update the user profile here
        // For example, make an API request to update the user data
        const formDataToSend = new FormData();
        formDataToSend.append('address', formData.address);
        formDataToSend.append('first_name', formData.first_name);
        formDataToSend.append('last_name', formData.last_name);
        formDataToSend.append('image', formData.image);
        formDataToSend.append('issuer', user?.issuer ? user.issuer : "");
        // Mock API request (replace with your actual logic)
        // const updatedUser = {
        //     ...user,
        //     address: formData.address,
        //     first_name: formData.first_name,
        //     last_name: formData.last_name,
        //     // Assuming you want to save the image URL instead of the file object
        //     image: formData.image instanceof File ? URL.createObjectURL(formData.image) : formData.image,
        // };
        console.log(formDataToSend)
        const updatedUser = await updateProfile(formDataToSend);
        console.log(JSON.parse(updatedUser.result))
        if (updatedUser.responseCode === 200) {
            alert("Update profile successfully")
            router.reload()
        }

        // Update the user context with the new user data
        // setUser(updatedUser);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            <div>
                {user?.loading ? (
                    <Loading/>
                ) : (
                    user?.issuer && (
                        <div className="flex flex-col items-center h-full w-full justify-center gap-10">
                            <div className='label'>Email</div>
                            <div className='profile-info'>{user.email}</div>

                            <div className='label'>User Id</div>
                            <div className='profile-info'>{user.issuer}</div>
                        </div>
                    )
                )}
            </div>
            <div className={"bg-red-300 bordertest border-black"}>
                <ProfileCard/>

            </div>
            <form className="my-10 max-w-md mx-auto" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">Profile Update Form</h1>
                <label className="block mb-4">
                    <span className="text-gray-700">Address:</span>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">First Name:</span>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Last Name:</span>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className="form-input mt-1 block w-full"
                    />
                </label>
                <div {...getRootProps()} className="dropzone mb-4">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the image here...</p>
                    ) : (
                        <p>Drag &apos;n&apos; drop an image here, or click to select one</p>
                    )}
                </div>
                {formData.image && (
                    <img src={formData.image instanceof File ? URL.createObjectURL(formData.image) : formData.image}
                         alt="Preview" className="mb-4 max-w-full"/>
                )}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                    Update Profile
                </button>
            </form>
            <button onClick={handleDelete} className={"bg-green-500 text-white rounded-md px-5 py-3"}>Delete Profile
            </button>
        </div>
    );
};

export default Profile;
