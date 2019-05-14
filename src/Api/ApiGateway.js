import axios from "axios";
import {message} from "antd";


export   function post(url,data,notificationConfig={showNotification:false,successMessage:'',failedMessage:''},successCallback=(response)=>{},failedCallback=(error)=>{}){
	let  hide;
	if(notificationConfig.showNotification){
		hide=message.loading("正在执行...");
	}

	axios.post(url,data).then(function (response) {
		if(notificationConfig.showNotification){
			message.success(notificationConfig.successMessage +" code:"+ response.status)
		}
		successCallback(response);
	}, function (error) {
		if(notificationConfig.showNotification){
			message.error(notificationConfig.failedMessage+' code: ' + error)

		}
		failedCallback(error);
	}).catch(function (error) {
		if(notificationConfig.showNotification){
			message.error(notificationConfig.failedMessage+' code: ' + error)
		}
		failedCallback(error);
	}).finally(function () {
		if(notificationConfig.showNotification) {
			hide();
		}
	});
}