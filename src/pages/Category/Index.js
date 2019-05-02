import React from 'react';
import './Index.css';
import CategoryItem from '../../components/CategoryItem/Index'
import {
	Row, Col, Form,
} from 'antd';
import {connect} from "react-redux";

class Index extends React.Component {

	addForm=(name,category)=>{

		const CategoryForm = Form.create({name:name})(CategoryItem);

	return <CategoryForm category={category}/>;
}


componentDidMount() {
}

	render() {

		return (

			<div>
				{
					this.props.categories.map((cate,index)=>

						<Row key={index}>
							<Col span={24}  align={'middle'}>
								{this.addForm(cate.name,cate)}
							</Col>
						</Row>
				)
				}


			</div>
		);
}
}

const mapStateToProps = state => {
	return {
		...state.initialReducer
	}
}

export default  connect(mapStateToProps)(Form.create({ name: "haha" })(Index));

