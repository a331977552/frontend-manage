import {
    Form, Icon, Input, Button,
} from 'antd';
import React from "react";

function hasErrors(fieldsError) {
    console.log(fieldsError)
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Index extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                    label={'category name'}
                >
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: 'Please input category name!'}],
                        initialValue: '',
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="category name"/>
                    )}
                </Form.Item>
                <Form.Item
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                    label={'priority'}
                >
                    {getFieldDecorator('priority', {
                        rules: [{required: false}],
                        initialValue: '0'
                    })(
                        <Input  min={0} step={1} max={1000} type="number"
                                placeholder="priority"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Index;
