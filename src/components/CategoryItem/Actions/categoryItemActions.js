import axios from 'axios';
import {DELETING_CATEGORY_SUCCESS} from "../../../pages/Dashboard/Actions/InitialActions";

export  const  DELETING_CATEGORY="DELETING_CATEGORY";
export  const  DELETING_CATEGORY_FINISHED="DELETING_CATEGORY";


export function deletingCategory(category){


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
			console.log("DELETING_CATEGORY")
			axios.get('/typicode/demo/db')
			.then(function (response) {
				dispatch(deletingCategoryFinished(category,true,null));
			},function (error) {
				dispatch(deletingCategoryFinished(category,false,error));
			}).catch(function (error) {
				dispatch(deletingCategoryFinished(category,false,error));
			});
		}

}

export function deletingCategoryFinished(category,deletingSuccess,errorMessage){
	console.log("deletingCategoryFinished")

	if(deletingSuccess){
		return function(dispatch,getState){
			dispatch({
				type: DELETING_CATEGORY_SUCCESS,
				payload:{
					deletedCategory:category,
				}

			});
		}
	}else{
		return {
			type: DELETING_CATEGORY_FINISHED,
			payload:{
				deletingSuccess:deletingSuccess,
				deleting:false,
				errorMessage:errorMessage,
			}
		}
	}


}