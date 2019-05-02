import axios from 'axios';
import myData from './FakeData.json'
import sortCategoryBasedPriority from '../../../utils/CommonUtils'
export const INITIALIZED_LOADING='INITIALIZED_LOADING'
export const INITIALIZED_LOADING_FINISHED='INITIALIZED_LOADING_FINISHED'
export const DELETING_CATEGORY_SUCCESS='DELETING_CATEGORY_SUCCESS'



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
			axios.get('/typicode/demo/db')
			.then(function (response) {

				const categories=sortCategoryBasedPriority(myData.categories);


				dispatch(productLoadingFinished(categories,true,null));
			},function (error) {
				dispatch(productLoadingFinished(null,false,error));
			}).catch(function (error) {
				dispatch(productLoadingFinished(null,false,error));
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