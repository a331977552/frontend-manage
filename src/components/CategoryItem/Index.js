import {
    Form, Icon, Input, Button, Popconfirm
} from 'antd';
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryItemActions from './Actions/categoryItemActions'
import {DELETING_CATEGORY_FINISHED} from "./Actions/categoryItemActions";
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const Title = (props) => (<span>您确定要删除种类 <span style={{color: 'red', fontWeight: 'bold'}}>{props}</span> 吗?</span>)


class Index extends React.Component {

    constructor(props){
        super(props)
        bindActionCreators(categoryItemActions,this.props.dispatch);
    }


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
    onDeleteClicked = (e) => {

        if(this.props.category.product.length>0){
            //TODO adding a notification

        }else{
            this.props.dispatch(categoryItemActions.deletingCategory(this.props.category));
        }
    }

    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
        const {category} = this.props;

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
                        initialValue: category.name,
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="category name"/>
                    )}
                </Form.Item>
                <Form.Item

                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                    label={'priority'}
                >
                    {getFieldDecorator('priority', {
                        rules: [{required: false}],
                        initialValue: category.priority
                    })(
                        <Input style={{width: 100}} min={0} step={1} max={1000} type="number"
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
                <Form.Item>
                    <Popconfirm placement="topLeft" title={Title(category.name)} onConfirm={this.onDeleteClicked}
                                okText="是" cancelText="否">
                        <Button
                            loading={this.props.deleting}
                            type="danger"
                            htmlType="button"
                        >delete</Button>
                    </Popconfirm>
                </Form.Item>
            </Form>
        );
    }
}



export default connect((state)=>({...state.categoryItemReducer}))(Index);
