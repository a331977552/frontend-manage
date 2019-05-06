
import {post} from './ApiGateway'
import {
	addingProductSuccess,
	deleteProductSuccess,
	updateProductSuccess
} from "../pages/ProductAdding/store/ProductActions";
const prefix="/product/"
export function addProduct(product,dispatch,successCallback=(response)=>{}) {
	post(prefix+'add',product,{showNotification:true,successMessage:"添加成功",failedMessage:"添加失败"},
		(response)=>{
			dispatch(addingProductSuccess(response.data));
			successCallback(response);
		},(error)=>{

		});
}

export function updateProduct(product,dispatch) {
	post(prefix+'update',{...product},{showNotification:true,successMessage:"修改成功",failedMessage:"修改失败"},
		(response)=>{
			dispatch(updateProductSuccess(product));
		}
	);
}

export function deleteProduct(product,dispatch,successCallback=()=>{}) {
	post(prefix+'delete/'+product.id,{},{showNotification:true,successMessage:"添加成功",failedMessage:"添加失败"},
		(response)=>{
			dispatch(deleteProductSuccess(product));
			successCallback();
		}
	);
}
export function getProductsByPage(page,successCallback=(response)=>{},error=(error)=>{}) {
	post(prefix+'findAll/'+page,{},{showNotification:false,successMessage:"获取失败",failedMessage:"获取成功"},successCallback,error,

	);
}
