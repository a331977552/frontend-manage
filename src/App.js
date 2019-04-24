import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import './App.css';
const {
  Header, Content, Footer, Sider,
} = Layout;
class App extends React.Component {
  onMenuClicked=({item, key, keyPath})=>{
      console.log(item);
      console.log(key);
      console.log(keyPath);

  }
  render() {

    return (
        <Layout>
          <Sider
              width={150}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{minHeight:'100vh'}}
             >
            <div className="logo" />
            <Menu theme="dark" onClick={this.onMenuClicked}  mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" >
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout >
            <Header  style={{ background: '#fff', padding: 0 }} >
              <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '16px 16px 0', overflow: 'initial' }}>
              <div style={{ padding:16, background: '#fff', textAlign: 'center' }}>
                ddd
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
    );
  }
}


export default  App;

