import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Button, Form, Input, Modal, Select} from 'antd';
import {EditOutlined, GlobalOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import {useDropzone} from 'react-dropzone';
import {UserContext} from '@/lib/UserContext';
import {useRouter} from 'next/router';
import {updateProfile} from "../../../util";
import Success from "@/components/Popups/Success";
import Error from "@/components/Popups/Error";

const {Option} = Select;

const App = ({handleCancel}) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {

            console.log(localStorage.getItem("userMetaData"))
            // if (localStorage.getItem("userMetaData")) {
            //     const data = JSON.parse(localStorage.getItem("userMetaData"))
            //     setUserInfo(data.user)
            // }

        
    }, [])

    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: {
                    span: 24,
                },
                wrapperCol: {
                    span: 24,
                },
            }
            : null;

    const tailFormItemLayout =
        formLayout === 'vertical'
            ? {
                wrapperCol: {
                    span: 24,
                    offset: 0,
                },
            }
            : null;

    const [user, setUser] = useContext(UserContext);
    const[success,setSuccess]=useState(false)
    const [error, setError] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        country: '',
        address: '',
        image: user?.image || '',
    });

    const validateForm = () => {
        return formData.address.length > 0 && formData.first_name.length > 0 && formData.last_name.length > 0;
    }
    useEffect(() => {
        console.log(formData)
    }, [formData]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFormData({...formData, image: file});
    };

    const onFinish = (values) => {
        console.log(values);
    };


    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        // formDataToSend.append('email', formData.email);
        formDataToSend.append('nationality', formData.country);
        formDataToSend.append('first_name', formData.first_name);
        formDataToSend.append('last_name', formData.last_name);
        formDataToSend.append('image', formData.image);
        // formDataToSend.append('address', formData.address);
        // formDataToSend.append('issuer', user?.issuer ? user.issuer : '');

        console.log(formDataToSend);
        updateProfile(formDataToSend, user?.issuer).then((res) => {
                console.log("here is res from the server :", res)
                if (res.responseCode === 200) {
                    console.log("Here was the result ", res.result)
                    localStorage.setItem("userMetaData", JSON.stringify(res.result))
                    console.log("I WAS HERE")
                    // setUserInfo(res.result.user)
                    // router.push("/Profile")
                    setSuccess(true)
                }else {
                    setError(true)
                }
            }
        )


    };

    return (
        <div className={'bg-[#fafafa] rounded-md'}>

            <div className={"h-6 gradientedBackground rounded-t-lg w-full text-transparent"}>hello</div>
            <div className={"flex flex-col w-full h-full py-5 items-start px-5 gap-5   rounded-md"}>
                <h1 className={'pl-2 w-full text-textOrange font-bold text-3xl text-center'}><span
                    className={"text-black"}>Edit</span> Profile</h1>
                <Form
                    className={'flex flex-col h-fit overflow-y-scroll gap-3 w-full text-black'}
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    onFinish={onFinish}
                >

                    <div>
                        <div className={'flex flex-row items-center justify-start gap-5'}>
                            <div>
                                <Avatar
                                    src={formData.image ? URL.createObjectURL(formData.image) : userInfo ? userInfo.picture.data : "/Images/avatar.svg"}
                                    size={100} className={'shadow-xl bordered rounded-full'}/>
                            </div>
                            <div className={"border border-textOrange rounded-full py-3 px-2"}>
                                <div className={"flex flex-row items-center justify-center gap-3"} {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p className={' text-textOrange cursor-pointer'}> Edit new picture</p>
                                    <EditOutlined className={"text-textOrange"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Form.Item label="Name" name="name"
                                   rules={[{required: true, message: 'Please enter your name'}]}>
                            <Input
                                rootClassName={"border-textOrange border text-textOrange  rounded-full bg-[#FBF4F2] placeholder-[#FBF4F2]"}
                                onChange={(e) => {
                                    setFormData(
                                        {...formData, first_name: e.target.value}
                                    )
                                }} prefix={<UserOutlined className={"text-textOrange"}/>} placeholder="Name"/>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="Last Name" name="lastName"
                                   rules={[{required: true, message: 'Please enter your name'}]}>
                            <Input
                                rootClassName={"border-textOrange border rounded-full bg-[#FBF4F2] placeholder-[#FBF4F2]"}
                                onChange={
                                    (e) => {
                                        setFormData(
                                            {...formData, last_name: e.target.value}
                                        )
                                    }
                                } prefix={<UserOutlined className={"text-textOrange"}/>} placeholder="Last Name"/>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="Email" name="email"
                                   rules={[{required: true, message: 'Please enter your email'}]}>
                            <Input
                                rootClassName={"border-textOrange border rounded-full bg-[#FBF4F2] placeholder-[#FBF4F2]"}
                                onChange={
                                    (e) => {
                                        setFormData(
                                            {...formData, email: e.target.value}
                                        )
                                    }
                                } prefix={<MailOutlined className={"text-textOrange"}/>} type="email"
                                placeholder="Email"/>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="Country" name="country"
                                   rules={[{required: true, message: 'Please enter your email'}]}>
                            <Input
                                rootClassName={"border-textOrange border rounded-full bg-[#FBF4F2] placeholder-[#FBF4F2]"}
                                onChange={(e) => {
                                    setFormData(
                                        {...formData, country: e.target.value}
                                    )
                                }} prefix={<GlobalOutlined className={"text-textOrange"}/>} type="text"
                                placeholder="Country"/>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item className={'w-full flex flex-col gap-4 text-center'} {...tailFormItemLayout}>
                            <Button
                                disabled={formData.country === "" || formData.first_name === "" || formData.last_name === "" || formData.email === ""}
                                onClick={handleSubmit}
                                className={"w-fit h-full px-10 py-2 text-white backgroundGradient rounded-full hover:border-textOrange"}>Save</Button>

                        </Form.Item> <Form.Item
                        className={'w-full flex flex-col gap-4 text-center'} {...tailFormItemLayout}>
                        <Button onClick={handleCancel}
                                className={"w-fit h-full px-10 py-2 text-textOrange border-none  rounded-full hover:border-textOrange"}>Cancel</Button>

                    </Form.Item>
                    {/* {<Form.Item
                        className={'w-full flex flex-col gap-4 text-center'} {...tailFormItemLayout}>
                        <Button onClick={handleDelete}
                                className={"w-fit h-full px-10 py-2 text-textOrange border-none  rounded-full hover:border-textOrange"}>Delete</Button>

                    </Form.Item>} */}
                    </div>
                </Form>
            </div>
            <Modal  open={success} onCancel={()=>{
                setSuccess(false)
                router.push("/Profile")

            }} footer={null}>
                <Success />
            </Modal>
            <Modal  open={error} onCancel={()=>{
                setError(false)
                router.push("/Profile")

            }} footer={null}>
                <Error/>
            </Modal>
        </div>
    );
};

export default App;
