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

				const categories=filterDeletedCategory(state.categories,action.payload.deletedCategory);

				return {...state,categories:categories};

				default:
			return state;
	}


}

function filterDeletedCategory(categories,deletedCategory){


	return categories.filter((cate,index)=>{
		return deletedCategory.id!==cate.id;
	});

}

