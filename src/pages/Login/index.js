import {Form, Icon, Input, Button, Checkbox, Row, Col, Typography} from 'antd';
import React from "react";
import {login} from "../../Api/UserApi";
import './index.css';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as loginActions from "./store/actionCreators";
class LoginPage extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    onLoginClick=(e)=>{

        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                //{username: "阿斯顿萨士大夫", password: "dsfsfdsf", remember: true}
                login({username: values.username, password: values.password}, (response) => {

                    this.props.loginSuccess(response.data.user);

                    this.props.history.push("/");

                }, (error) => {
                    console.log(error)
                });
            }
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
                <Form.Item
                    hasFeedback
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' },{min:6,message:"请输入最少6位数账号"}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item
                    hasFeedback
                >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' },{min:6,message:"密码最少6位"},{max:50,message:"密码最多50位"}],
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
                    <Link style={{  float: 'right'}} to={"/login"}>
                        Forgot password
                    </Link>
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

const WrappedLoginPage = connect(null,(dispatch,ownProps)=>{

    return {
        loginSuccess:(user)=> dispatch(loginActions.loginSuccess(user))
    }
})(withRouter(Form.create({ name: 'normal_login' })(LoginPage)));
export default WrappedLoginPage;
