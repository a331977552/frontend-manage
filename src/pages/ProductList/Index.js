import React from 'react';
import './Index.css';
import {Col, Divider, Empty, Icon, Row} from "antd";
import ProductCard from '../../components/ProductCard/Index'
import RetryButton from '../../components/RetryButton/Index'
import Loading from '../../components/Loading/Index'
import * as productActionCreators from "./Actions/ProductActions";
import {bindActionCreators} from 'redux'

import {connect} from "react-redux";

class Index extends React.Component {

    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        this.boundActionCreators = bindActionCreators(productActionCreators, dispatch)

    }

    onCardClicked = (product, index) => {

        this.props.dispatch(productActionCreators.productEditing(product));
        // this.props.onProductClicked(product);
        this.props.history.push('/product/edit')
    }

    componentWillMount() {

        if (!this.props.loadingSuccess && !this.props.loading)
            this.props.dispatch(productActionCreators.productLoading());
    }

    onRetryClicked = (e) => {
        this.props.dispatch(productActionCreators.productLoading());
    }
    onCategoryClicked=(category)=>{
    console.log(category)
    }

    render() {
        const {categories, loading, loadingSuccess, errorMessage} = this.props;
        return (
            <div >
                {loading ? <Loading/>
                    :
                    (
                        loadingSuccess ?
                            categories.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> :

                                (
                                    categories.map((category, index) => (
                                            <div  key={index} style={{marginRight:10}}>
                                                <Row gutter={8} style={{marginBottom:5}}>
                                                    <Col span={24}>
                                                        <div  style={{backgroundColor:"#dedede",padding:10,fontWeight:"bold",fontSize:18}}>
                                                            {category.name}
                                                            <Icon style={{cursor:"pointer",marginLeft:20}} onClick={()=>{
                                                                this.onCategoryClicked(category);
                                                            }} type="setting" />
                                                        </div>
                                                    </Col>

                                                </Row>
                                                <Row gutter={8} >
                                                    {category.products.map((product,index)=>
                                                    (
                                                        <ProductCard  product={product} index={index} onCardClicked={this.onCardClicked}  key={product.id} />
                                                    ))
                                                    }
                                                </Row>
                                                <Divider style={{marginBottom:20}}/>
                                            </div>
                                                )))

                               :
                            (
                                <RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>
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
    return {
        ...state.productReducer
    }
}

export default connect(mapStateToProps)(Index);

