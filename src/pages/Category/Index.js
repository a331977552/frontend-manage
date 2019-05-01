import React from 'react';
import './Index.css';
import CategoryItem from '../../components/CategoryItem/Index'
import {
	Row, Col, Form,
} from 'antd';

class Index extends React.Component {

	addForm=(name)=>{

		const BasicDemoForm1 = Form.create({name:name})(CategoryItem);

	return <BasicDemoForm1/>;
}


	render() {


		return (

			<div>
				<Row >
					<Col span={24}  align={'middle'}>
						{this.addForm("test")}
					</Col>
					<Col span={24} align={'middle'} >
						{this.addForm("test1")}					</Col>
					<Col span={24} align={'middle'} >
						{this.addForm("test2")}					</Col>
					<Col span={24} align={'middle'} >
						{this.addForm("test3")}					</Col>
					<Col span={24} align={'middle'} >
						{this.addForm("test4")}					</Col>

				</Row>

			</div>
		);
}
}


export default  Form.create({ name: "haha" })(Index);

