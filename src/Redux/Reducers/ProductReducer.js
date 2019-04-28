import {PRODUCT_EDITING} from "../Actions/ProductActions";
import { combineReducers } from 'redux'
const initialState={
	products:[],
	editingProduct:null,
	categories:[]
}
function productReducer(state=initialState, action){

	switch (action.type) {

		case PRODUCT_EDITING:
				return {...state,editingProduct:action.payload};
		default:
			return state;
	}


}


const MainReducer = combineReducers({
	productReducer
})

export default MainReducer