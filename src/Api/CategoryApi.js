
import {post} from './ApiGateway'
import category from './fakeData/category'
import * as  actionCreactors from '../store/actionCreactors'

export function deleteCategoryById(category,dispatch) {
	post('/cate/delete/' + category.id,{},{showNotification:true,successMessage:"删除成功",failedMessage:"删除失败"},
		(response)=>{
			dispatch(actionCreactors.deletingCategorySuccess(category));
		},(error)=>{
		});
}
export function getAllCategories(successCallback=(response)=>{},failedCallback=(error)=>{}) {
	//cate/findAllwithAllProducts
	post('/cate/findAll',{},{},(response)=>{


		successCallback(response.data);
	},()=>{
		successCallback(category);
		}
	)
}

export function editCategory(category,dispatch) {
	post('/cate/update/',{...category},{showNotification:true,successMessage:"修改成功",failedMessage:"修改失败"},
		(response)=>{
			dispatch(actionCreactors.editCategorySuccess(category));
		}
	);
}

export function addCategory(category,dispatch,successCallback=(response)=>{}) {
	post('/cate/add',{...category},{showNotification:true,successMessage:"添加成功",failedMessage:"添加失败"},
		(response)=>{
			dispatch(actionCreactors.addCategorySuccess(response.data));
			successCallback(response);
		}
	);
}
