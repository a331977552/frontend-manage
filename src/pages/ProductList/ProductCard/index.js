import {Icon, Col, Card} from 'antd/lib/index';
import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import './index.css';

class Index extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {

    }

    onCardClicked = () => {
        this.props.onCardClicked(this.props.product, this.props.index);
    }


    render() {
        const {product} = this.props;
        const backgroundColor = product.status === 'ON_SALE' ? '' : {backgroundColor: '#dddddd'};
        return (
            <Col span={3} xs={24} sm={12} md={8} xl={4} xxl={3} onClick={this.onCardClicked} value={product}
                 style={{marginBottom: 10}}>
                <Card loading={false}
                      hoverable={true}
                      style={{width: '100%', margin: 0, padding: 0, ...backgroundColor}}
                      cover={<LazyLoadImage alt="loading..." wrapperClassName={'product_card_img'}
                                            src={product.img.startsWith("http") ? product.img : "http://localhost/api/img" + product.img}/>}
                >

                    <div style={{
                        width: '100%', clear: 'both',
                        display: ' inline-block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>{product.name}</div>
                    <div style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                        <div style={{flexGrow: 1}}>¥ <span style={{ fontSize: 22, fontFamily: 'bold', }}>{product.price}</span></div>
                        <div>
                            销量: <span style={{marginLeft:5,fontSize:22}}>{product.salesVolume}</span>
                        </div>
                    </div>

                </Card></Col>

        );
    }
}


export default Index;

