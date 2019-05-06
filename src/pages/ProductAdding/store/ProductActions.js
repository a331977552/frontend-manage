import {
	ADDING_PRODUCT_SUCCESS,
	DELETING_PRODUCT_SUCCESS,
	EDITING_PRODUCT_SUCCESS
} from "../../Dashboard/Actions/InitialActions";


export function addingProductSuccess(product){
	return {
		type: ADDING_PRODUCT_SUCCESS,
		payload:{
			addedProduct:product,
		}
	}
}
export function updateProductSuccess(product){
	return {
		type: EDITING_PRODUCT_SUCCESS,
		payload:{
			editedProduct:product,
		}
	}
}
export function deleteProductSuccess(product){
	return {
		type: DELETING_PRODUCT_SUCCESS,
		payload:{
			deletedProduct:product,
		}
	}
}