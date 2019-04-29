import axios from 'axios';

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

			axios.get('/typicode/demo/db3')
			.then(function (response) {
				console.log("success: "+response.data);
			},function (error) {
				console.log("rejected:"+error);
			}).catch(function (error) {
				console.log("exception:"+error)
			});

			setTimeout(function () {
				var  dd=Math.random()<0.8;
				if(dd){
					//todo loading product from network
					dispatch(productLoadingFinished([{id:1,name:'hahah2',price:11},
						{id:2,name:'hahah2',price:10},
						{id:3,name:'hahah3',price:10},
						{id:4,name:'hahah4',price:10},
						{id:5,name:'hahah5',price:10},
					],true,null));

				}else{
					//todo loading failed
					dispatch(productLoadingFinished(null,false,'Timeout Exception'));
				}

			},1500)


		}

}

export function productLoadingFinished(products,loadingSuccess,errorMessage){

	return {
		type: PRODUCT_LOADING_FINISHED,
		payload:{
			products:products,
			loadingSuccess:loadingSuccess,
			loading:false,
			errorMessage:errorMessage
		}
	}
}