import {DELETING_CATEGORY_FINISHED,DELETING_CATEGORY} from "../Actions/categoryItemActions";

const initialState={
	deletingSuccess:false,
	deleting:false,
	errorMessage:null,

}
export default function categoryItemReducer(state=initialState, action){

	switch (action.type) {


		case DELETING_CATEGORY:
			return {...state,...action.payload};

		case DELETING_CATEGORY_FINISHED:
				return {...state,...action.payload};
				default:
			return state;
	}


}

