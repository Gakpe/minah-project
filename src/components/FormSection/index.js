import React, {useContext, useState} from 'react';
import {Avatar, Button, Col, Form, Input, Select} from 'antd';
import {MailOutlined, UserOutlined} from '@ant-design/icons';
import {useDropzone} from 'react-dropzone';
import {UserContext} from '@/lib/UserContext';
import {useRouter} from 'next/router';

const {Option} = Select;

const App = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');

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
    const router = useRouter();
    const [formData, setFormData] = useState({
        address: user?.address || '',
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        image: user?.image || '',
    });

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
        formDataToSend.append('address', formData.address);
        formDataToSend.append('first_name', formData.first_name);
        formDataToSend.append('last_name', formData.last_name);
        formDataToSend.append('image', formData.image);
        formDataToSend.append('issuer', user?.issuer ? user.issuer : '');

        console.log(formDataToSend);

        // Mock API request (replace with your actual logic)
        // const updatedUser = await updateProfile(formDataToSend);
        // console.log(JSON.parse(updatedUser.result))
        // if (updatedUser.responseCode === 200) {
        //     alert("Update profile successfully")
        //     router.reload()
        // }
        // setUser(updatedUser);
    };

    return (
        <div className={'flex flex-col w-full h-full py-5 items-start px-5 gap-5  bg-primary rounded-md'}>
            <h1 className={'pl-2'}>Edit Profile</h1>
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
                                src={formData.image instanceof File ? URL.createObjectURL(formData.image) : '/Images/facebook.png'}
                                size={100} className={'shadow-xl rounded-full'}/>
                        </div>
                        <div>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p className={'underline text-button_border cursor-pointer'}> Upload new image</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Form.Item label="Name" name="name" rules={[{required: true, message: 'Please enter your name'}]}>
                        <Input onChange={handleInputChange} prefix={<UserOutlined/>} placeholder="Name"/>
                    </Form.Item>
                </div>
                <div >
                    <Form.Item label="Last Name" name="lastName"
                               rules={[{required: true, message: 'Please enter your name'}]}>
                        <Input onChange={handleInputChange} prefix={<UserOutlined/>} placeholder="Last Name"/>
                    </Form.Item>
                </div>
                <div >
                    <Form.Item label="Email" name="email"
                               rules={[{required: true, message: 'Please enter your email'}]}>
                        <Input onChange={handleInputChange} prefix={<MailOutlined/>} type="email" placeholder="Email"/>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Country" name="country"
                               rules={[{required: true, message: 'Please select your country'}]}>
                        <Select onSelect={(value) => setFormData({...formData, country: value})}>
                            <Option value="Select Country" disabled>
                                Select Country
                            </Option>
                            <Option value="USA">USA</Option>
                            <Option value="Canada">Canada</Option>
                            {/* Add more countries as needed */}
                        </Select>
                    </Form.Item>
                </div>
                <div >
                    <Form.Item className={'w-full'} {...tailFormItemLayout}>
                        <Button onClick={handleSubmit} className={'bg-button_border text-white'} size={'large'}>
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default App;
