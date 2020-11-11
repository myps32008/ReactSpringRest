import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button,  Checkbox } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateUserInfo, userLogin
} from './loginSlice';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 4 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 4 },
      };
    return (
        <div id="login-page">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}                
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>  
        </div> 
    );
}

export default LoginForm;