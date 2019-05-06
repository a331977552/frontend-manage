import {INITIALIZED_SUCCESSFULLY} from "./constants";

const initialState={
	categories:[],
}
export default function initReducer(state=initialState,action){

	switch (action.type) {
		case INITIALIZED_SUCCESSFULLY:
			return {...state,categories:action.payload.categories}
	}

	return state;
}