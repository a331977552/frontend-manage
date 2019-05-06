import axios from 'axios';
import sortCategoryBasedPriority from '../../../utils/CommonUtils'
export const INITIALIZED_LOADING='INITIALIZED_LOADING'
export const INITIALIZED_LOADING_FINISHED='INITIALIZED_LOADING_FINISHED'
export const DELETING_CATEGORY_SUCCESS='DELETING_CATEGORY_SUCCESS'
export const ADDING_CATEGORY_SUCCESS='ADDING_CATEGORY_SUCCESS'
export const EDITING_CATEGORY_SUCCESS='EDITING_CATEGORY_SUCCESS'


export const ADDING_PRODUCT_SUCCESS='ADDING_PRODUCT_SUCCESS'
export const EDITING_PRODUCT_SUCCESS='EDITING_PRODUCT_SUCCESS'
export const DELETING_PRODUCT_SUCCESS='DELETING_PRODUCT_SUCCESS'





export function initialLoading(){
	return function(dispatch,getState){
			dispatch({
				type: INITIALIZED_LOADING,
				payload:{
					categories:[],
					loadingSuccess:false,
					loading:true,
					errorMessage:null
				}
			});

		}

}

export function productLoadingFinished(categories,loadingSuccess,errorMessage){

	return {
		type: INITIALIZED_LOADING_FINISHED,
		payload:{
			categories:categories,
			loadingSuccess:loadingSuccess,
			loading:false,
			errorMessage:errorMessage
		}
	}
}