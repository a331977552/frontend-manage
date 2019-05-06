
import {DELETING_CATEGORY_SUCCESS, EDITING_CATEGORY_SUCCESS} from "../../../pages/Dashboard/Actions/InitialActions";

export const DELETING_CATEGORY = "DELETING_CATEGORY";
export const DELETING_CATEGORY_FINISHED = "DELETING_CATEGORY";


/*export function deletingCategory(category){


	return function(dispatch,getState){
			dispatch({
				type: DELETING_CATEGORY,
				payload:{
					categories:[],
					loadingSuccess:false,
					loading:true,
					errorMessage:null
				}

			});
		}

}*/
export function editCategorySuccess(category) {
	return {
		type: EDITING_CATEGORY_SUCCESS,
		payload: {editedCategory:category}
	}
}

export function deletingCategorySuccess(category) {

	return {
		type: DELETING_CATEGORY_SUCCESS,
		payload: {
			deletedCategory: category,
		}
	}


}
