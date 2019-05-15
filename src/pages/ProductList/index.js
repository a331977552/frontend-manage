import React from 'react';
import './index.css';
import {Col, Empty, Pagination, Row, message, Modal, } from "antd";
import ProductCard from './ProductCard'
import ProductSearch from './ProductSearch'
import ProductUpdate from './ProductUpdate/Index'

import RetryButton from '../../components/RetryButton'
import Loading from '../../components/Loading'


import {connect} from "react-redux";
import {getProductsByPage} from "../../Api/ProductApi";


class Index extends React.Component {

state={
    content:[],
    loading:true,
    loadingSuccess:false,
    errorMessage:"loading",
    page:0,
    empty:true,
    totalElements:0,
    totalPages:0,
    last:false,
    first:true,
    pageSize:20,
    productUpdateModalVisible:false,
    updatingProduct:null,
}


    onCardClicked = (product, index) => {
        // this.props.dispatch(productActionCreators.productEditing(product));
        // this.props.onProductClicked(product);
        this.setState({
            updatingProduct:product,
            productUpdateModalVisible:true

        })

    }


    componentDidMount() {
        this.loadProducts(this.state.page);
    }

    loadProducts(page){
        getProductsByPage(page,(response)=>{
            const empty=response.data.empty;
            if(empty&&!this.state.empty){
                message.warn("没有数据!");
                return ;
            }
            this.setState({
                content:[...response.data.content],
                empty:empty,
                totalElements:response.data.totalElements,
                totalPages:response.data.totalPages,
                last:response.data.last,
                first:response.data.first,
                loading:false,
                loadingSuccess:true,
                page:response.data.number,
                pageSize:response.data.size
            })

        },(error)=>{
            this.setState({
                errorMessage:error,
                loading:false,
                loadingSuccess:false,
            })
        });
    }
    onRetryClicked = (e) => {
        this.setState({
            errorMessage:"错误消息未设置",
            loading:true,
            loadingSuccess:false,
        })
        this.loadProducts(this.state.page);

    }
    handleOk = (e) => {
        this.setState({
            productUpdateModalVisible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            productUpdateModalVisible: false,
        });
    }


    onPageChanged=(pageNumber)=>{
        this.loadProducts(--pageNumber)
    }
    render() {
        const {content, loading, loadingSuccess, errorMessage,empty} = this.state;

        return (
            <div >
                {loading ? <Loading/>
                    :
                    (
                        loadingSuccess ?
                            empty? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> :
                                (<div>
                                        <Row gutter={8}  style={{marginBottom:20}} type="flex" justify="center"  >
                                            <Col  span={8} xs={24} sm={24} md={16} xl={12} xxl={8} align={"middle"}>
                                            <ProductSearch />
                                            </Col>
                                        </Row>
                                                <Row gutter={8} >
                                                    {content.map((product,index)=>
                                                    (
                                                        <ProductCard  product={product} index={index} onCardClicked={this.onCardClicked}  key={product.id} />
                                                    ))
                                                    }
                                                </Row>
                                        <Row gutter={8}  >
                                            <Col align={"middle"}><Pagination showQuickJumper defaultCurrent={this.state.page+1} total={this.state.totalElements} pageSize={this.state.pageSize} onChange={this.onPageChanged} /></Col>
                                        </Row>
                                    </div>
                                )
                               :
                            (
                                <RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>
                            )
                    )
                }
                <Modal
                    title="商品修改"
                    visible={this.state.productUpdateModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                ><ProductUpdate updatingProduct={this.state.updatingProduct}/>
                </Modal>
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
    return {}
}

export default connect(mapStateToProps)(Index);

