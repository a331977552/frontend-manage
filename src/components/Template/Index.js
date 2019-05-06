import React from "react";
import Loading from "../Loading";
import {Layout, PageHeader} from "antd";
import NavLeft from "../NavLeft";
import ProductList from "../../pages/ProductList";
import Orders from "../../pages/Orders";
import Category from "../../pages/Category";
import Advertise from "../../pages/Advertise";
import ProductAdding from "../../pages/ProductAdding";
import ProductEditing from "../../pages/ProductEditing";
import RetryButton from "../RetryButton";

class Index extends React.Component {
	state = {
		collapsed: false,
		sideBarMarginLeft: 200,
		loading:false, loadingSuccess:true,
		errorMessage:null
	}
	render() {
		const {loading, loadingSuccess, errorMessage} = this.state;
		return (
			<div>
				{loading ? <Loading/> : loadingSuccess ? (this.props.children) : (<RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>)}
			</div>
		);

	}
}