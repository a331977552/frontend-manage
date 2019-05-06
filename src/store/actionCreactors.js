import {INITIALIZED_SUCCESSFULLY} from "./constants";

export function initializedSuccessfully(categories) {

	return {
		type:INITIALIZED_SUCCESSFULLY,
		payload:{
			categories:categories
		}
	}
}