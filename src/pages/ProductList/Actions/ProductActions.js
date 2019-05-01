import axios from 'axios';
import myData from './FakeData.json';
export const PRODUCT_EDITING='PRODUCT_EDITING'
export const PRODUCT_LOADING='PRODUCT_LOADING'
export const PRODUCT_LOADING_FINISHED='PRODUCT_LOADING_FINISHED'

export function productEditing(product){

	return {
		type: PRODUCT_EDITING,
		payload:{editingProduct:product}
	}
}

export function productLoading(loading){
	return function(dispatch,getState){
			dispatch({
				type: PRODUCT_LOADING,
				payload:{
					products:[],
					loadingSuccess:false,
					loading:true,
					errorMessage:null
				}
			});

			axios.get('/typicode/demo/db')
			.then(function (response) {
				console.log("success: "+response.data);
				dispatch(productLoadingFinished(myData.categories,true,null));
			},function (error) {
				dispatch(productLoadingFinished(null,false,error));
			}).catch(function (error) {
				dispatch(productLoadingFinished(null,false,error));
			});
		}

}

export function productLoadingFinished(categories,loadingSuccess,errorMessage){

	return {
		type: PRODUCT_LOADING_FINISHED,
		payload:{
			categories:categories,
			loadingSuccess:loadingSuccess,
			loading:false,
			errorMessage:errorMessage
		}
	}
}