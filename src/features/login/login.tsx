import { useHistory, useLocation } from "react-router-dom";
import { Form, Input, Button,  Checkbox } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from './loginSlice';
import {IAppStore} from '../../const/interface';

const LoginForm = (props:any) => {
    const dispatch = useDispatch();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const location = useLocation();
    const { from } :any = location.state || { from: { pathname: "/" } };
    const userInfo = useSelector((state: IAppStore) => state.userInfo);
    const login = () => {
        console.log(account + password);
        if (true) return;
        dispatch(userLogin(account, password));
        history.replace(from);
      };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 4 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 4 },
      };
    
      const test = () => {
        console.log("test");
      }
    return (
        <div id="login-page">
            <Form
                {...layout}
                name="login-box"
                initialValues={{ remember: true }}                
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input onChange={e => setAccount(e.currentTarget.value)}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={e => setPassword(e.currentTarget.value)}/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={login}>
                    Submit
                    </Button>
                </Form.Item>
            </Form>  
        </div> 
    );
}

export default LoginForm;