import {Icon, Col, Card, Modal} from 'antd';
import React from 'react';
import './Index.css';

class Index extends React.Component {





	render() {
			const {product}=this.props;
		return (
			<Modal
				title="Vertically centered modal dialog"
				centered
				visible={this.state.modal2Visible}
				onOk={() => this.setModal2Visible(false)}
				onCancel={() => this.setModal2Visible(false)}
			>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
		);
	}
}


export default Index;

