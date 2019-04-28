import {Layout, Icon, PageHeader} from 'antd';
import React from 'react';
import NavLeft from '../../components/NavLeft/Index'
import Misc from '../Misc/Index'
import Orders from '../Orders/Index'
import ProductAdding from '../ProductAdding/Index'
import ProductEditing from '../ProductEditing/Index'
import ProductList from '../ProductList/Index'
import './Index.css';
import {Route,Switch,Redirect} from 'react-router-dom'

const {
  Header, Content, Footer, Sider,
} = Layout;
class Index extends React.Component {
  state = {
    collapsed: false,


  }

  ;toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {

    return (
        <Layout>
          <Sider
              width={200}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{minHeight:'100vh'}}
             >
            <div className="logo" />
            <NavLeft/>
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
              <div style={{ padding:16, background: '#fff' }}>
                <Switch>
                  <Route exact path={'/'} component={()=>{ return <PageHeader
                      title="商品列表"
                  />}}/>
                  <Route exact path={'/orders'} component={()=>{ return <PageHeader
                      title="订单管理"
                  />}}/>
                  <Route exact path={'/misc'} component={()=>{ return <PageHeader
                      title="种类管理"
                  />}}/>
                  <Route exact path={'/product'} component={()=>{ return <PageHeader
                      title="添加菜品"
                  />}}/>
                  <Route exact path={'/product/edit'} component={()=>{ return <PageHeader
                      title="商品修改"
                  />}}/>
                </Switch>

                <Switch>
                <Route exact path={'/'} component={ProductList}/>
                <Route exact path={'/orders'} component={Orders}/>
                <Route exact path={'/misc'} component={Misc}/>
                <Route exact path={'/product'} component={ProductAdding}/>
                <Route exact path={'/product/edit'} component={ProductEditing}/>
                <Redirect  to={'/notfound'}/>


                </Switch>
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


export default  Index;

