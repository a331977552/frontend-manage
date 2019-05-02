import {INITIALIZED_LOADING,INITIALIZED_LOADING_FINISHED,DELETING_CATEGORY_SUCCESS} from "../Actions/InitialActions";

const initialState={
	loading:false,
	loadingSuccess:false,
	categories:[
	],
	errorMessage:null,

}
export default function initialReducer(state=initialState, action){

	switch (action.type) {


		case INITIALIZED_LOADING:
			return {...state,...action.payload};

		case INITIALIZED_LOADING_FINISHED:
				return {...state,...action.payload};


		case DELETING_CATEGORY_SUCCESS:
				const categories=state.categories.filter((cate,index)=>{

					return action.payload.deletedCategory.id!==cate.id;
				});


				return {...state,
					categories:categories
				};

				default:
			return state;
	}


}

