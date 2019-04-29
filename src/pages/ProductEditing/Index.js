import React from 'react';
import './Index.css';
import {Link} from "react-router-dom";
import {
	Form, Icon, Input, Button,
	Upload, Modal, Radio, Select
} from 'antd';
import {connect} from "react-redux";

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 5 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 12 },
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 12,
			offset: 5,
		},
	},
};
const uploadButton = (
	<div>
		<Icon type="plus" />
		<div className="ant-upload-text">上传图片</div>
	</div>
);
/*const rangeConfig = {
	rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};*/
class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			previewVisible: false,
			previewImage:"",
			fileList: [

			],
			categories:[
				{
					id:1,
					name:'米饭',
					title:'新品上架'
				}
			]

		}
	}


	handleCancel = () => this.setState({ previewVisible: false })

	handlePreview = (file) => {
		this.setState({
			previewImage: file.url || file.thumbUrl,
			previewVisible: true,
		});
	}



	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	handleChange = ({ fileList }) => this.setState({ fileList })

	render() {
		const {getFieldDecorator} = this.props.form;
		const {fileList,previewVisible,previewImage,categories}=this.state;
		if(categories===undefined ||categories.length===0){
			return this.NoCategoryContent();
		}
		const  defaultCategoryName=categories[0].name;
		return (
			<Form {...formItemLayout}     onSubmit={this.handleSubmit} >
				<Form.Item
					label="菜品名称"
				>
					{getFieldDecorator('name', {
						rules: [{required: true, message: 'Please input your username!'}],
					})(
						<Input  placeholder="菜品名称"/>
					)}
				</Form.Item>

				<Form.Item
					label="菜品价格"
				>
					{getFieldDecorator('price', {
						rules: [{required: true, message: 'Please input your Password!'}],
						initialValue: '0.0'
					})(
						<Input  min={0} step={0.1} max={10000} type="number"
						       placeholder="价格"/>

					)}
				</Form.Item>
				<Form.Item
					label="种类"
				>
					{getFieldDecorator('category', {
						rules: [{required: true, message: 'Please input your Password!'}],
						initialValue: defaultCategoryName
					})(
						<Select
							showSearch
							placeholder="Select a person"
							optionFilterProp="children"
						/*	onChange={onChange}
							onFocus={onFocus}
							onBlur={onBlur}
							onSearch={onSearch}*/

							filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							{this.state.categories.map((category,index)=>(
								 <Select.Option key={index} value={category.name}>{category.name}</Select.Option>
								))}
						</Select>

					)}
				</Form.Item>

				<Form.Item
					label={"状态"}

				>
						<Radio.Group defaultValue="ON_SALE" buttonStyle="solid">
							<Radio.Button value="ON_SALE">上架</Radio.Button>
							<Radio.Button value="OUT_OF_ORDER">下架</Radio.Button>
						</Radio.Group>
				</Form.Item>

				<Form.Item   {...tailFormItemLayout}>
				<div className="clearfix">
					<Upload
						action="//jsonplaceholder.typicode.com/posts/"
						listType="picture-card"
						fileList={fileList}
						onPreview={this.handlePreview}
						onChange={this.handleChange}
					>
						{fileList.length >= 1 ? null : uploadButton}
					</Upload>
					<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
						<img alt="example" style={{ width: '100%' }} src={previewImage} />
					</Modal>
				</div>
				</Form.Item>

				<Form.Item {...tailFormItemLayout} >
						<Button type="primary" htmlType="submit"  >提交</Button>
				</Form.Item>
			</Form>
		);
	}

	NoCategoryContent() {
		return (<div>
			<Link to={'/misc'}>请先添加种类.</Link>
		</div>)
	}
}
const mapStateToProps = state => {
	return {
		editingProduct:state.productReducer.editingProduct
	}
}

export default  connect(mapStateToProps)(Form.create({ name: 'product_adding' })(Index));

