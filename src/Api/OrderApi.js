
import {post} from './ApiGateway'
import orders from './fakeData/orders'
import productNames from './fakeData/productNames'

import {
	addingProductSuccess,
	deleteProductSuccess,
	updateProductSuccess
} from "../pages/ProductAdding/store/ProductActions";
const prefix="/order/"

export function updateOrder(product,dispatch) {
	post(prefix+'update',{...product},{showNotification:true,successMessage:"修改成功",failedMessage:"修改失败"},
		(response)=>{
			dispatch(updateProductSuccess(product));
		}
	);
}

export function getAllOrders(page,example,successCallback=(response)=>{},error=(error)=>{}) {
	post(prefix+'findAll/'+page,{...example},{showNotification:false,successMessage:"获取失败",failedMessage:"获取成功"},successCallback,

		(errormsg)=>{

		successCallback({data:orders})
		},

	);
}

