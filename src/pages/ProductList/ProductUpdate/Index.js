import React from 'react';
import './Index.css';
import {Link} from "react-router-dom";
import {
	Form, Icon, Input, Button,
	Upload, Modal, Radio, Select, message
} from 'antd';
import {connect} from "react-redux";
import {addProduct,updateProduct} from "../../../Api/ProductApi";

const formItemLayout = {
	labelCol: {
		xs: {span: 24},
		sm: {span: 5},
	},
	wrapperCol: {
		xs: {span: 24},
		sm: {span: 19},
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
		<Icon type="plus"/>
		<div className="ant-upload-text">上传图片</div>
	</div>
);

class Index extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			previewVisible: false,
			previewImage: "",
			fileList: [

			],
		}
		if(this.props.updatingProduct===null){
			message.error("当前没有可编辑的商品,请重新选择");
			this.props.history.push('/')
			return ;
		}
		this.state = {
			fileList: [
				{
					uid:"-1",
					url:"http://localhost/api/img"+this.props.updatingProduct.img,
				}
			],
			defaultImg:this.props.updatingProduct.img
		}



	}


	handleCancel = () => this.setState({previewVisible: false})

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
				let url=this.state.defaultImg;
				if(this.state.fileList.length !== 0 && this.state.fileList[0].response!==undefined){
					url=this.state.fileList[0].response.url
				}
				updateProduct({...values,img:url,id:this.props.updatingProduct.id},this.props.dispatch,(response)=>{

				});

			}
		});
	}
	handleChange = ({fileList}) => this.setState({fileList})

	render() {
		if(this.props.updatingProduct===null)
			return <div>error during editing product</div>;
		const {getFieldDecorator} = this.props.form;
		const {fileList, previewVisible, previewImage} = this.state;
		const {categories} = this.props;

		if (categories === undefined || categories.length === 0) {
			return this.NoCategoryContent();
		}
		const {updatingProduct}	=this.props;

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item
					label="菜品名称"
					hasFeedback
				>
					{getFieldDecorator('name', {
						rules: [{required: true, message: '请输入商品名称!'}],
						initialValue:updatingProduct.name
					})(
						<Input placeholder="菜品名称"/>
					)}
				</Form.Item>

				<Form.Item
					hasFeedback
					label="菜品价格"
				>
					{getFieldDecorator('price', {
						rules: [{required: true, message: '请输入价格!'}],
						initialValue: updatingProduct.price
					})(
						<Input min={0} step={0.1} max={10000} type="number"
						       placeholder="价格"/>
					)}
				</Form.Item>
				<Form.Item
					hasFeedback
					label="种类"
				>
					{getFieldDecorator('categoryId', {
						rules: [{required: true, message: '请选择一项种类!'}],
						initialValue: updatingProduct.categoryId
					})(
						<Select
							showSearch
							placeholder="请选择一项种类"
							optionFilterProp="children"
							filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							{this.props.categories.map((category, index) => (
								<Select.Option key={index} value={category.id}>{category.title}</Select.Option>
							))}
						</Select>
					)}
				</Form.Item>
				<Form.Item
					hasFeedback
					label="产品描述"
				>
					{getFieldDecorator('description', {
						rules: [{required: false}],
						initialValue: updatingProduct.description,
					})(
						<Input placeholder="产品描述" maxLength={512}/>
					)}
				</Form.Item>
				<Form.Item
					hasFeedback
					label="已销售数量"
				>
					{getFieldDecorator('salesVolume', {
						rules: [{required: false}],
						initialValue:  updatingProduct.salesVolume
					})(
						<Input min={0} step={1} max={10000000} type="number"
						       placeholder="价格"/>
					)}
				</Form.Item>
				<Form.Item

					label={"状态"}
					required={true}
				>
					{getFieldDecorator('status', {
						rules: [{required: true, message: '请选择一种状态!'}],
						initialValue: updatingProduct.status
					})(
						<Radio.Group buttonStyle="solid">
							<Radio.Button value="ON_SALE">上架</Radio.Button>
							<Radio.Button value="OUT_OF_ORDER">下架</Radio.Button>
						</Radio.Group>)
					}
				</Form.Item>

				<Form.Item
					hasFeedback
					{...tailFormItemLayout}>
					<div className="clearfix">
						<Upload
							accept={".bmp,.jpg,.png,.tif,.gif,.pcx,.tga,.exif,.fpx,.svg,.psd,.cdr,.pcd,.dxf,.ufo,.eps,.ai,.raw,.WMF,.webp"}
							action="//localhost/api/img/add"
							listType="picture-card"
							fileList={fileList}
							name={'img'}
							onPreview={this.handlePreview}
							onChange={this.handleChange}
							onRemove={this.handleRemove}
						>
							{fileList.length >= 1 ? null : uploadButton}
						</Upload>
						<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
							<img alt="example" style={{width: '100%'}} src={previewImage}/>
						</Modal>
					</div>
				</Form.Item>

				<Form.Item {...tailFormItemLayout} >
					<Button type="primary" htmlType="submit">提交</Button>
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


export default connect((state) => {
	return {...state.initReducer}
})(Form.create({name: 'product_editing'})(Index));

