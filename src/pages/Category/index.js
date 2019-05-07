import React from 'react';
import './index.css';
import CategoryItem from './CategoryItem'
import {Row, Col, Form, Button, Modal, Input, Empty} from 'antd';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryActions from './store/actionCreator'
import  {addCategory, getAllCategories} from "../../Api/CategoryApi";


class Index extends React.Component {

	state = {
		visible: false,
	}
	addForm = (name, category, index, onDeleteClicked, onPriorityChanged, onCategoryNameChanged) => {
		const CategoryForm = Form.create({name: name})(CategoryItem);
		return <CategoryForm category={category} onDeleteClicked={onDeleteClicked} index={index}
		                     onPriorityChanged={onPriorityChanged} onCategoryNameChanged={onCategoryNameChanged}
		/>;
	}

	constructor(props) {
		super(props);
		bindActionCreators(categoryActions, this.props.dispatch);

	}


	componentDidMount() {


	}


	onHandleOk = (e) => {
		const {dispatch}= this.props;

		this.props.form.validateFields((err, values) => {
				if (!err) {
					this.setState({visible: false});
					addCategory({...values,priority:parseInt(values.priority)},dispatch,(response)=>{
						this.props.form.resetFields();
					});
				}

			}
		);

	}
	onHandleCancel = (e) => {
		this.setState({
			visible: false
		})
	}
	onAddingNewCategoryClicked = (e) => {
		this.setState({
			visible: true
		})
	}

	render() {


		const {getFieldDecorator} = this.props.form;
		return	<div>

				{this.props.categories.length===0?<Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>:(
					this.props.categories.map((cate, index) =>

						<Row key={index}>
							<Col span={24} align={'middle'}>
								{this.addForm(cate.name, cate, index)}
							</Col>
						</Row>
					)
				)}
				<Row>
					<Col align={'middle'} style={{marginTop: "30px"}} span={24}>
						<Button type="primary" onClick={this.onAddingNewCategoryClicked}>添加一个新种类</Button>
					</Col>
				</Row>

				<Modal
					title="种类添加"
					visible={this.state.visible}
					onOk={this.onHandleOk}
					onCancel={this.onHandleCancel}
				>
					<Form labelCol={{span: 5}} wrapperCol={{span: 12}} onSubmit={this.onHandleOk}>
						<Form.Item
							label="种类名称:"
							hasFeedback
						>
							{getFieldDecorator('title', {
								rules: [{required: true, message: '种类名不能为空!'}],
							})(
								<Input/>
							)}
						</Form.Item>
						<Form.Item
							hasFeedback
							label="优先级:"
						>
							{getFieldDecorator('priority', {
								rules: [{required: true, message: "优先级必须为0到1000之间的值"}],
								initialValue: 0
							})(
								<Input min={0} step={1} max={1000} type="number"
								       placeholder="priority"/>
							)}
						</Form.Item>

					</Form>
				</Modal>

		</div>

	}
}

const mapStateToProps = state => {
	return {
		...state.initReducer
	}
}

export default connect(mapStateToProps)(Form.create({name: "category"})(Index));

