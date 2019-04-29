import {PRODUCT_EDITING,PRODUCT_LOADING,PRODUCT_LOADING_FINISHED} from "../Actions/ProductActions";

const initialState={
	products:[],
	loading:false,
	loadingSuccess:false,
	editingProduct:null,
	categories:[],
	errorMessage:null,

}
export default function productReducer(state=initialState, action){

	switch (action.type) {

		case PRODUCT_EDITING:
				return {...state,...action.payload};

		case PRODUCT_LOADING:
			var newState={...state,...action.payload};
				return newState;

		case PRODUCT_LOADING_FINISHED:
				return {...state,...action.payload};
				default:
			return state;
	}


}

