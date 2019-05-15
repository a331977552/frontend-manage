import React from 'react';
import './index.css';
import {Table, message, Empty} from 'antd';
import * as OrderApi from '../../Api/OrderApi'
import Loading from "../../components/Loading";
import RetryButton from "../../components/RetryButton";

/**
 *
 * "id": 1,
 "expired_time": "2019-01-08 03:28:09",
 "buyer": "Brittan",
 "comment": "Canis lupusCanis lupus",
 "create_time": "2018-05-11 23:33:51",
 "order_code": 823370,
 "order_number": 9409446,
 "payment_type": 1,
 "phone": "3164895430",
 "reservation_type": 2,
 "status": 1,
 "total_price": 24.6,
 "update_time": "7/2/2018",
 "user_id": 5287072,
 "way_of_eating": 1,
 "total_count": 528
 *
 * @type {*[]}
 */
const columns = [{
    title: 'order code',
    dataIndex: 'order_code',
    key: 'order_code',
    render: text => <span style={{cursor: 'pointer'}}>{text}</span>,
}, {
    title: 'buyer',
    dataIndex: 'buyer',
    key: 'buyer',
}, {
    title: 'create_time',
    dataIndex: 'create_time',
    key: 'create_time',
}, {
    title: 'expired_time',
    key: 'expired_time',
    dataIndex: 'expired_time',
    render: text => <span>{text}</span>,
}, {
    title: 'phone',
    key: 'phone',
    dataIndex: 'phone',
    render: (text) => (<span style={{cursor: 'pointer'}}>{text}</span>),
}, {
    title: 'reservation_type',
    key: 'reservation_type',
    dataIndex: 'reservation_type',
    render: (text) => (<span style={{cursor: 'pointer'}}>{text}</span>),
}
    , {
        title: 'status',
        key: 'status',
        dataIndex: 'status',
        render: (text) => (<span style={{cursor: 'pointer'}}>{text}</span>),
    }
    , {
        title: 'total_price',
        key: 'total_price',
        dataIndex: 'total_price',
        render: (text) => (<span style={{cursor: 'pointer'}}>{text}</span>),
    }
    , {
        title: 'way_of_eating',
        key: 'way_of_eating',
        dataIndex: 'way_of_eating',
        render: (text) => (<span style={{cursor: 'pointer'}}>{text}</span>),
    }
];



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

    componentDidMount() {
        OrderApi.getAllOrders(this.state.page,{},(response)=>{
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

        })
    }

    render() {
        const {content, loading, loadingSuccess, errorMessage,empty} = this.state;
        return  (loading? <Loading/>:
                    (
                        loadingSuccess ?
                            empty? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> :
                                (<div>
                                        <Table rowKey={record => record.id}  columns={columns} dataSource={this.state.content}/>
                                    </div>
                                )
                            :
                            (
                                <RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>
                            )
                    ))
            }




}


export default Index;

