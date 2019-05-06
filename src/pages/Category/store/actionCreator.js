import {ADDING_CATEGORY_FINISHED, LOADING_CATEGORY_SUCCESS} from "./constants";


export function loadingCategorySuccess(categories){
	return {
		type: LOADING_CATEGORY_SUCCESS,
		payload:{
			categories:categories,
		}
	}


}

export function addingCategorySuccess(category){
		return {
			type: ADDING_CATEGORY_FINISHED,
			payload:{
				addedCategory:category,
			}
	}


}