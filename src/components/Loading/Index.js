import React from 'react';
import './Index.css';
import {Icon, Spin} from "antd";



function Index(props){
	return 	<div style={{width:'100wh',height:"80vh",display:'flex',alignContent:'center',justifyContent:"center",alignItems:'center'}}>
		<Spin indicator={<Icon type="loading" style={{ fontSize: 36 }} spin />} />
	</div>
}


export default Index;

