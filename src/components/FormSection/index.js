import React, {useState} from 'react';
import {Avatar, Button, Form, Input, Select} from 'antd';
import {MailOutlined, UserOutlined} from '@ant-design/icons';

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

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className={"flex flex-col max-w-formWidth min-w-fit w-formWidth h-full py-5 items-start px-5 gap-5 justify-evenly bg-primary rounded-md"}>
            <h1 className={"pl-2"}>Edit Profile</h1>
            <Form className={"flex flex-col gap-3 w-full text-black"}
                  {...formItemLayout}
                  layout={formLayout}
                  form={form}
                  onFinish={onFinish}
                  style={{
                      maxWidth: 600,
                  }}
            >
                <div className={"flex flex-row items-center justify-start gap-5"}>
                    <Avatar src={"/images/facebook.png"} size={100} className={"shadow-xl rounded-full"}/>
                    <div className={"underline text-button_border"}>Upload new image</div>
                </div>
                <Form.Item label="Name" name="name" rules={[{required: true, message: 'Please enter your name'}]}>
                    <Input prefix={<UserOutlined/>} placeholder="Name"/>
                </Form.Item>
                <Form.Item label="Last Name" name="lastName"
                           rules={[{required: true, message: 'Please enter your name'}]}>
                    <Input prefix={<UserOutlined/>} placeholder="Name"/>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{required: true, message: 'Please enter your email'}]}>
                    <Input prefix={<MailOutlined/>} type="email" placeholder="Email"/>
                </Form.Item>
                <Form.Item  label="Country" name="country"
                           rules={[{required: true, message: 'Please select your country'}]}>
                    <Select>
                        <Option value="Select Country" disabled>Select Country</Option>
                        <Option value="USA">USA</Option>
                        <Option value="Canada">Canada</Option>
                        {/* Add more countries as needed */}
                    </Select>
                </Form.Item>
                {/*Add a submit Button here please */}
                <Form.Item className={"w-full"} {...tailFormItemLayout}>
                    <Button className={"bg-button_border w-full text-white"} size={"large"}>{"Submit"}</Button>

                </Form.Item>
            </Form>
        </div>
    );
};

export default App;
