
import {post} from './ApiGateway'
import * as categoryItemActions from "../components/CategoryItem/Actions/categoryItemActions";
import {addingCategorySuccess} from "../pages/Category/store/actionCreator";
import axios from "axios";
import {productLoadingFinished} from "../pages/Dashboard/Actions/InitialActions";

export function deleteCategoryById(category,dispatch) {
	post('/cate/delete/' + category.id,{},{showNotification:true,successMessage:"删除成功",failedMessage:"删除失败"},
		(response)=>{
			dispatch(categoryItemActions.deletingCategorySuccess(category));
		},(error)=>{
		});
}
export function getAllCategories(successCallback=(response)=>{},failedCallback=(error)=>{}) {
	//cate/findAllwithAllProducts
	post('/cate/findAll',{},{},(response)=>{

		const categories=sortCategoryByPriority(response.data);
		successCallback(categories);
	},failedCallback)
}
export default function sortCategoryByPriority(categories) {

	return [...categories].sort((A, B) => {
		return B.priority - A.priority;
	})
}
export function editCategory(category,dispatch) {
	post('/cate/update/',{...category},{showNotification:true,successMessage:"修改成功",failedMessage:"修改失败"},
		(response)=>{
			dispatch(categoryItemActions.editCategorySuccess(category));
		}
	);
}

export function addCategory(category,successCallback=(response)=>{}) {
	post('/cate/add',{...category},{showNotification:true,successMessage:"添加成功",failedMessage:"添加失败"},
		(response)=>{
			//dispatch(addingCategorySuccess(response.data));
			successCallback(response);
		}
	);
}
