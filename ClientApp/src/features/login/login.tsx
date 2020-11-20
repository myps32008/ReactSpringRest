import { Form, Input, Button,  Checkbox } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { userLogin } from './loginSlice';
import logo from '../../static/images/logo192.png';
import { IAppStore } from '../../const/interface';

const LoginForm = (props:any) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } :any = location.state || { from: { pathname: "/" } };
    const userStatus = useSelector((state: IAppStore) => state.userInfo);

    const login = () => {
        const account = form.getFieldValue("username");
        const password = form.getFieldValue("password");
        // if (userStatus.loading) return;
        dispatch(userLogin({id: 1}));        
    };
    useEffect(()=>{
        if (userStatus.loginStatus) {
            from.pathname = from.pathname === "/login" ? "/" : from.pathname;
            history.replace(from);
        }
    }, [userStatus.loginStatus, history, from]);

    return (
        <div id="login-page">
            <Form                
                name="login-box"
                initialValues={{ remember: true }}
                form={form}      
                >
                    <img src={logo} alt="logo"/>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}                    
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={login}>
                    Submit
                    </Button>
                </Form.Item>
            </Form>  
        </div> 
    );
}

export default LoginForm;