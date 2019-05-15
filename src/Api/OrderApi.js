
import {post} from './ApiGateway'
import orders from './fakeData/orders'


const prefix="/order/"

//TODO
export function updateOrder(order) {
	post(prefix+'update',{...order},{showNotification:true,successMessage:"修改成功",failedMessage:"修改失败"},
		(response)=>{
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

