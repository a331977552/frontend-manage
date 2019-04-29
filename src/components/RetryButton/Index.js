import React from 'react';
import './Index.css';
import {Button} from "antd";



function Index(props){
	return (<div style={{width:'100wh',height:"80vh",display:'flex',flexDirection:'column', alignContent:'center',justifyContent:"center",alignItems:'center'}}>
		<div style={{fontSize:40}}>
			{props.message}
		</div>
		<Button  onClick={props.onRetryClicked} type="primary" style={{fontSize:30,width:200,height:60,marginTop:30}} size={"large"}>Retry</Button>
	</div>)
}


export default Index;

