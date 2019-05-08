import {Avatar, BackTop, Icon, Layout, PageHeader} from 'antd';
import React from 'react';
import NavLeft from './NavLeft'
import NavDrawer from './NavDrawer'

import Category from '../Category'
import Advertise from '../Advertise'
import Orders from '../Orders'
import ProductAdding from '../ProductAdding'
import ProductList from '../ProductList'
import './index.css';
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";
import * as InitialActions from "./Actions/InitialActions";
import {bindActionCreators} from "redux";
import Loading from "../../components/Loading";
import RetryButton from "../../components/RetryButton";

const {
    Header, Content, Footer, Sider,
} = Layout;

class Index extends React.Component {
    state = {
        collapsed: false,
        loading: false, loadingSuccess: true,
        errorMessage: null,
        hideNav: window.innerWidth <= 768,
        showDrawer:false,
        sideBarMarginLeft:window.innerWidth <= 768?0:200

    }

    constructor(props) {
        super(props)
        const {dispatch} = this.props;
        bindActionCreators(InitialActions, dispatch)

    }

    toggle = () => {
        this.setState({
            showDrawer: !this.state.showDrawer,
        });
    }



    componentDidMount() {
        window.addEventListener("resize", this.resize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    resize=()=>{
        let hideNav=window.innerWidth <= 768;
        let showDrawer=this.state.showDrawer;
        let sideBarMarginLeft=this.state.sideBarMarginLeft;
        if(!hideNav&&this.state.hideNav){
            showDrawer=false;
            sideBarMarginLeft=200;
        }else if(!this.state.hideNav&&hideNav){
            sideBarMarginLeft=0;
            showDrawer=false;
        }
        this.setState({hideNav: hideNav,showDrawer:showDrawer,sideBarMarginLeft:sideBarMarginLeft});
    }

    onRetryClicked = (e) => {
        this.props.dispatch(InitialActions.initialLoading());
    }

    render() {
        const {loading, loadingSuccess, errorMessage} = this.state;
        return (
            <div>
                {loading ? <Loading/> : loadingSuccess ? (
                    <Layout>
                        {this.state.hideNav?
                            <NavDrawer visible={this.state.showDrawer} onDrawerClose={this.toggle}/>
                            :
                            <Sider
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}
                            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
                            <div className="logo"/>
                            <NavLeft/>
                            </Sider>
                        }
                        <Layout style={{marginLeft: this.state.sideBarMarginLeft}}>
                            <Header style={{background: '#fff', padding: 0,display:'flex',flexDirection:'row',alignItems:"center"}}>
                                {this.state.hideNav&&<Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />}
                                <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                                    {this.state.user}
                                </Avatar>
                            </Header>
                            <Content style={{margin: '16px 16px 0', overflow: 'initial'}}>
                                <div style={{padding: 16, background: '#fff', minHeight: '82vh'}}>
                                    <Switch>
                                        <Route exact path={'/'} component={() => {
                                            return <PageHeader
                                                title="商品列表"
                                            />
                                        }}/>
                                        <Route exact path={'/orders'} component={() => {
                                            return <PageHeader
                                                title="订单管理"
                                            />
                                        }}/>
                                        <Route exact path={'/category'} component={() => {
                                            return <PageHeader
                                                title="种类管理"
                                            />
                                        }}/>
                                        <Route exact path={'/advertise'} component={() => {
                                            return <PageHeader
                                                title="Advertise"
                                            />
                                        }}/>
                                        <Route exact path={'/product'} component={() => {
                                            return <PageHeader
                                                title="添加菜品"
                                            />
                                        }}/>
                                    </Switch>
                                    <Switch>
                                        <Route exact path={'/'} component={ProductList}/>
                                        <Route exact path={'/orders'} component={Orders}/>
                                        <Route exact path={'/category'} component={Category}/>
                                        <Route exact path={'/advertise'} component={Advertise}/>
                                        <Route exact path={'/product'} component={ProductAdding}/>
                                        <Redirect to={'/notfound'}/>
                                    </Switch>
                                </div>
                            </Content>
                            <Footer style={{textAlign: 'center'}}>
                                Ant Design ©2018 Created by Ant UED
                            </Footer>
                            <BackTop />
                        </Layout>
                    </Layout>

                ) : (<RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>)
                }

            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        ...state.initialReducer
    }
}
export default connect(mapStateToProps)(Index);

