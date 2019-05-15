import {post} from './ApiGateway'
import user from "./fakeData/login.json"

//TODO login

const prefix="/manager/"
export function login(data,successCallback=(response)=>{},errorCallback=(error)=>{}) {

    post(prefix+'login',data,{showNotification:false,successMessage:'',failedMessage:''},
        successCallback,(error)=>{
            successCallback(user);
        });
}

export function loginOut() {

    localStorage.removeItem("user");
}