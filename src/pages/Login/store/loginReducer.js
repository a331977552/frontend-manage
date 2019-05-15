import {LOGIN_OUT, LOGIN_SUCCESS} from "./constants";

const  initState={
    user:localStorage.getItem("user")||null
}
export default function loginReducer(state=initState,action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('user',JSON.stringify(action.payload.user));
            return {user:action.payload};
        case LOGIN_OUT:
            localStorage.removeItem('user')
            return {user:null};
        default:
                return state;
    }

}