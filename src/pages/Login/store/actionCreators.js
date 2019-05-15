import {
	LOGIN_OUT,
	LOGIN_SUCCESS,

} from "./constants";


export function loginSuccess(user){
	return {
		type: LOGIN_SUCCESS,
		payload:{
			user:user,
		}
	}
}
export function loginOut(){
	return {
		type: LOGIN_OUT,
		payload:null
	}
}

