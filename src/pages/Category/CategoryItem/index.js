import {
	Form, Icon, Input, Button, Popconfirm, notification
} from 'antd';
import React from "react";


import {deleteCategoryById, editCategory} from "../../../Api/CategoryApi";

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const Title = (props) => (<span>您确定要删除种类 <span style={{color: 'red', fontWeight: 'bold'}}>{props}</span> 吗?</span>)


class Index extends React.Component {

	state={
		deletingSuccess:false,
		deleting:false,
		errorMessage:null,
	}


	componentDidMount() {
		// To disabled submit button at the beginning.
		this.props.form.validateFields();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const {dispatch}=this.props;
				editCategory({...values,id:this.props.category.id,description:this.props.category.description},dispatch)
			}
		});
	}
	onDeleteClicked = (e) => {
		if (this.props.onDeleteClicked !== undefined) {
			this.props.onDeleteClicked(this.props.category, this.props.index);
		} else if (this.props.category.products.length > 0) {
			notification.warning({
				message: '温馨提示',
				description: '所删除种类下还有产品,因此无法删除当前种类.'
			});
		} else {
			const {category,dispatch}=this.props;
			deleteCategoryById(category,dispatch);
		}
	}
	onPriorityChanged = (e) => {
		if (this.props.onPriorityChanged) {
			this.props.onPriorityChanged(e, this.props.category, this.props.index);
		}
	}
	onCategoryNameChanged = (e) => {
		if (this.props.onCategoryNameChanged) {
			this.props.onCategoryNameChanged(e, this.props.category, this.props.index);
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
					label={'名称'}
					hasFeedback
				>
					{getFieldDecorator('title', {
						rules: [{required: true, message: 'Please input category name!'}],
						initialValue: category.title,
					})(
						<Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
						       placeholder="category name" allowClear={true}
						       onChange={this.onCategoryNameChanged}
						/>
					)}
				</Form.Item>
				<Form.Item
					hasFeedback
					validateStatus={passwordError ? 'error' : ''}
					help={passwordError || ''}
					label={'优先级'}
				>
					{getFieldDecorator('priority', {
						rules: [{required: false}],
						initialValue: category.priority
					})(
						<Input style={{width: 100}} min={0} step={1} max={1000} type="number"
						       placeholder="priority" onChange={this.onPriorityChanged}/>
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
					<Popconfirm placement="topLeft" title={Title(category.title)} onConfirm={this.onDeleteClicked}
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


export default Index;
