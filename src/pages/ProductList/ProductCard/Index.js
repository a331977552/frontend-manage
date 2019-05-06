import { Icon, Col, Card} from 'antd/lib/index';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Index.css';

class Index extends React.Component {


	constructor(props){
		super(props);
		this.state={
			loading:true
		}
	}
	componentDidMount() {

	}

	onCardClicked=()=>{
			this.props.onCardClicked(this.props.product,this.props.index);
	}


	render() {
			const {product}=this.props;
			const backgroundColor=product.status==='ON_SALE'?'':{backgroundColor:'gray'};
		return (
			<Col span={4} xs={24} sm={12} md={8} xl={6} xxl={4} onClick={this.onCardClicked} value={product} style={{marginBottom:10}}>
				<Card loading={false}
				      hoverable={true}
				      style={{ width: '100%' ,margin:0,padding:0,...backgroundColor}}
				      cover={<LazyLoadImage  alt="loading..." wrapperClassName={'product_card_img'} src={"http://localhost/api/img"+product.img} />}
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

