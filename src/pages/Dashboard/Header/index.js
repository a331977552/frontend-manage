import {Avatar, Icon, Layout, Popover} from "antd";
import React from "react";
import css from './index.css'
const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
export  default  function index(props){


return <Layout.Header style={{ background: '#fff', padding: 0,display:'flex',flexDirection:'row',alignItems:"center"}}>
    {props.hideNav&&<Icon
        className="trigger"
        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={props.toggle}
    />}

    <div style={{flexGrow:1,}}/>

    <Popover placement="bottomRight" title={text} content={content}  trigger="click">
        <Avatar className={'avatar'} size="large">
            {props.user}123
        </Avatar>
    </Popover>

</Layout.Header>
}