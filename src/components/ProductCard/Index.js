import { Icon, Col, Card} from 'antd';
import React from 'react';
import './Index.css';

class Index extends React.Component {


	onCardClicked=()=>{
			this.props.onCardClicked(this.props.product,this.props.index);
	}


	render() {
			const {product}=this.props;
		return (
			<Col span={4} xs={12} sm={8} md={6} xl={6} xxl={4} onClick={this.onCardClicked} value={product} style={{marginBottom:10}}>
				<Card loading={false}
				      hoverable={true}

				      style={{ width: '100%' }}
				      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
				      actions={[<Icon type="setting" />]}
				>
					<div style={{display:"flex"}}>
						<div style={{flexGrow:'1'}}>{product.name}</div>
						<div>{product.price}</div>

					</div>
				</Card></Col>
		);
	}
}


export default Index;

