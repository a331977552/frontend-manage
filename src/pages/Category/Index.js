import React from 'react';
import './Index.css';
import CategoryItem from '../../components/CategoryItem/Index'
import {
	Row, Col, Form,
} from 'antd';

class Index extends React.Component {

addForm=()=>{


	const BasicDemoForm1 = Form.create()(CategoryItem);

	return <BasicDemoForm1/>;
}


	render() {


		return (

			<div>
				<Row>
					<Col span={24} >
						{this.addForm()}
					</Col>
					<Col span={24} >
						{this.addForm()}					</Col>
					<Col span={24} >
						{this.addForm()}					</Col>
					<Col span={24} >
						{this.addForm()}					</Col>
					<Col span={24} >
						{this.addForm()}					</Col>

				</Row>

			</div>
		);
}
}


export default  Form.create({ name: "haha" })(Index);

