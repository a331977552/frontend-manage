import {Form, Icon, Input, Button, Checkbox, Row, Col, Typography} from 'antd';
import React from "react";
import {login} from "../../Api/UserApi";
import css from './index.css';
import { withCookies} from 'react-cookie';
class LoginPage extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    constructor(props) {
        super(props);
    }

    onLoginClick=(e)=>{
        e.preventDefault();
        login({username: "", password: ""}, (response) => {
            console.log(response.data)
            this.props.cookies.set('user',response.data,{path:'/',maxAge:response.data.maxAge});

        }, (error) => {
            console.log(error)
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row gutter={20} style={{height:'100vh',marginLeft:15,marginRight:15}} justify={"center"} align={"middle"} type={'flex'}>
                <Col span={8} xs={24} sm={12} md={8} xl={6} xxl={4} >
                    <Typography>
                        <Typography.Title>登录</Typography.Title>
                    </Typography>
                    <Typography.Paragraph>
            <Form onSubmit={this.onLoginClick} >
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a style={{  float: 'right'}}  href="">
                        Forgot password
                    </a>
                    <Button  style={{width:'100%'}} type="primary" htmlType="submit" >
                        登录
                    </Button>
                </Form.Item>
            </Form>
                    </Typography.Paragraph>
                </Col>
            </Row>
        );
    }
}

const WrappedLoginPage = withCookies(Form.create({ name: 'normal_login' })(LoginPage));
export default WrappedLoginPage;
