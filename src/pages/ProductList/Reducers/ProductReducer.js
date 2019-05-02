import {PRODUCT_EDITING} from "../Actions/ProductActions";

const initialState={
	editingProduct:null,
	errorMessage:null,

}
export default function productReducer(state=initialState, action){

	switch (action.type) {

		case PRODUCT_EDITING:
				return {...state,...action.payload};
				default:
			return state;
	}


}

