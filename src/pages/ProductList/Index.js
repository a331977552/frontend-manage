import React from 'react';
import './Index.css';
import { Row} from "antd";
import ProductCard from '../../components/ProductCard/Index'
import {editProduct} from "../../Redux/Actions/ProductActions";
import {connect} from "react-redux";

class Index extends React.Component {

	constructor(props){
		super(props);
		this.state={
			products:[
				{
					id:'1',
					name:'韭菜炒鸡蛋',
					price:'10.0',
					img:''
				},
				{
					id:'23',
					name:'韭菜炒鸡蛋',
					price:'',
					img:''
				},
				{
					id:'13',
					name:'韭菜炒鸡蛋',
					price:'',
					img:''
				},{
					id:'14',
					name:'韭菜炒鸡蛋',
					price:'',
					img:''
				},{
					id:'15',
					name:'韭菜炒鸡蛋',
					price:'',
					img:''
				},{
					id:'16',
					name:'韭菜炒鸡蛋',
					price:'',
					img:''
				},{
					id:'17',
					name:'韭菜炒鸡蛋',					price:'',
					img:''
				},{
					id:'18',
					name:'韭菜炒鸡蛋',
					price:'',
					img:''
				},{
					id:'19',
					name:'韭菜炒鸡蛋',
					price:'',
					img:''
				},{
					id:'120',
					name:'',
					price:'',
					img:''
				},{
					id:'130',
					name:'',
					price:'',
					img:''
				},{
					id:'132',
					name:'',
					price:'',
					img:''
				},{
					id:'44',
					name:'',
					price:'',
					img:''
				},{
					id:'55',
					name:'',
					price:'',
					img:''
				},
			]
		}
	}

	onCardClicked=(product,index)=>{
		this.props.onProductClicked(product);
		this.props.history.push('/product/edit')
	}

	render() {
		return (
			<div>
				<Row gutter={8} >
					{
						this.state.products.map((product,index)=>

							(
								<ProductCard  product={product} index={index} onCardClicked={this.onCardClicked}  key={product.id} />
							))
					}


				</Row>

				,
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onProductClicked: product => {
			dispatch(editProduct(product))
		}
	}
}

export default connect(null,mapDispatchToProps)(Index);

