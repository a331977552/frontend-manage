import {INITIALIZED_SUCCESSFULLY,DELETE_CATEGORY_SUCCESSFULLY,EDIT_CATEGORY_SUCCESSFULLY,ADD_CATEGORY_SUCCESSFULLY} from "./constants";

export const deletingCategorySuccess=(category)=>(

	{type:DELETE_CATEGORY_SUCCESSFULLY,
		payload:{
			category:category
		}
	}
)

export function editCategorySuccess(category) {

	return {
		type:EDIT_CATEGORY_SUCCESSFULLY,
		payload:{
			category:category
		}
	}
}

export function addCategorySuccess(category) {

	return {
		type:ADD_CATEGORY_SUCCESSFULLY,
		payload:{
			category:category
		}
	}
}
export function initializedSuccessfully(categories) {

	return {
		type:INITIALIZED_SUCCESSFULLY,
		payload:{
			categories:categories
		}
	}
}