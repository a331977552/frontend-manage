import React from 'react';
import './Index.css';
import {Empty, Row} from "antd";
import ProductCard from '../../components/ProductCard/Index'
import RetryButton from '../../components/RetryButton/Index'
import Loading from '../../components/Loading/Index'
import * as productActionCreators from "./Actions/ProductActions";
import { bindActionCreators } from 'redux'

import {connect} from "react-redux";

class Index extends React.Component {

	constructor(props){
		super(props);
		const {dispatch}=this.props;
		this.boundActionCreators=bindActionCreators(productActionCreators,dispatch)

	}

	onCardClicked=(product,index)=>{

		this.props.dispatch(productActionCreators.productEditing(product));
		// this.props.onProductClicked(product);
		this.props.history.push('/product/edit')
	}
	componentWillMount() {

		if(!this.props.loadingSuccess&&!this.props.loading)
			this.props.dispatch(productActionCreators.productLoading());
	}

	onRetryClicked=(e)=>{
		this.props.dispatch(productActionCreators.productLoading());
	}

	render() {
		const {products,loading,loadingSuccess,errorMessage}=this.props;
		return (
			<div>
				{loading?<Loading/>
					:
					(
						loadingSuccess?
							products.length===0?<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />:
							<Row gutter={8} >
							{
							products.map((product,index)=>
								(
									<ProductCard  product={product} index={index} onCardClicked={this.onCardClicked}  key={product.id} />
								))
							}
							</Row>:
							(
								<RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked} />
							)
					)
				}
			</div>
		);
	}
}
/*const mapDispatchToProps = dispatch => {
	return {
		onProductClicked: product => {
			dispatch(productEditing(product))
		},
		productLoading: ()=> {
			dispatch(productLoading())
		}
	}
}*/
const mapStateToProps = state => {
	return { ...state.productReducer
	}
}

export default connect(mapStateToProps)(Index);

