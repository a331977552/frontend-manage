import {Menu, Icon} from 'antd';
import React from 'react';
import './Index.css';
import {Link} from "react-router-dom";

class Index extends React.Component {

	state = {
		menu: {
			defaultSelectedKeys: '/',
			menuItems: [
				{
					key: '/',
					name: '商品列表',
					icon: 'user',
					title:'商品列表'
				},
				{
					key: '/product',
					name: '添加商品',
					icon: 'user',
					title:'商品添加'
				},
				{
					key: '/orders',
					name: '订单',
					icon: 'user',
					title:'订单管理'
				},
				{
					key: '/category',
					name: '种类',
					icon: 'user',
					title:'种类'
				},
				{
					key: '/advertise',
					name: '广告',
					icon: 'user',
					title:'广告'

				}


			]
		}
	}


	render() {

		return (
			<div>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.menu.defaultSelectedKeys]}>
					{
						this.state.menu.menuItems.map((item, index) => {

							return <Menu.Item key={item.key}>
								<Icon type={item.icon}/>
								<span className="nav-text">{item.name}</span>
								<Link to={item.key}/>
							</Menu.Item>
						})
					}


				</Menu>
			</div>
		);
	}
}


export default Index;

