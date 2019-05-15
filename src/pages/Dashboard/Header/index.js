import {Avatar, Icon, Layout, Popover} from "antd";
import React from "react";
import  './index.css'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as loginActions from "../../Login/store/actionCreators";




 class index extends React.Component{

    onLoginOutClick=(e)=>{
       this.props.loginOut();
       this.props.history.push("/login")
    }

   render() {
       return <Layout.Header style={{ background: '#fff', padding: 0,display:'flex',flexDirection:'row',alignItems:"center"}}>
           {this.props.hideNav&&<Icon
               className="trigger"
               type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
               onClick={this.props.toggle}
           />}

           <div style={{flexGrow:1,}}/>

           <Popover placement="bottomRight" title={<span>Title</span>} content={
               <div>
               <p>个人信息</p>
               <p onClick={this.onLoginOutClick}>退出</p>
           </div>}  trigger="click">
               <Avatar className={'avatar'} size="large">
                   {this.props.user}
               </Avatar>
           </Popover>

       </Layout.Header>
   }


}

export  default connect(null,(dispatch)=>{

    return {loginOut:()=> dispatch(loginActions.loginOut())

    }

})(withRouter(index));