import React from 'react';
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound/Index'
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import Loading from "./components/Loading";
import RetryButton from "./components/RetryButton";
import {getAllCategories} from "./Api/CategoryApi";
import {login} from "./Api/UserApi";
import {connect} from "react-redux";
import Login from './pages/Login'
import initReducer from "./store/initReducer";
import * as initActionCreators from "./store/actionCreactors";
import {useCookies, withCookies} from 'react-cookie';
import {bindActionCreators} from "redux";

class App extends React.Component {
    state = {
        collapsed: false,
        sideBarMarginLeft: 200,
        loading: true, loadingSuccess: false,
        errorMessage: null,
        categories: [],
        loginNeeded:false,
    }
    onRetryClicked = (e) => {
        this.setState({
            categories: [],
            loading: true,
            loadingSuccess: false
        })
        this.init();
    }

    constructor(props) {
        super(props);
        bindActionCreators(initActionCreators, this.props.dispatch);
    }

    componentDidMount() {
        const {cookies} = this.props;
        const user = cookies.get('user');
        if (user) {
            this.setState({
                loginNeeded:false
            })
            if (this.state.loading && !this.state.loadingSuccess) {
                this.init();
            }
        } else {
            this.setState({
                loginNeeded:true
            })
            this.props.history.push("/login");
        }


    }

    init() {
        getAllCategories((categories) => {

            this.setState({
                loading: false,
                loadingSuccess: true
            });
            this.props.dispatch(initActionCreators.initializedSuccessfully(categories))
        }, (error) => {
            this.setState({
                loading: false,
                loadingSuccess: false,
                errorMessage: error
            })
        });
    }


    render() {
        const {loading, loadingSuccess, errorMessage,loginNeeded} = this.state;
        return (
            <div>
                {loginNeeded?<Route path={'/login'} component={Login}/>:
                    loading ? <Loading/> : loadingSuccess ? (
                    <div>
                        <Switch>
                            <Route path={'/notfound'} component={NotFound}/>

                            <Route path={'/'} component={Dashboard}/>
                        </Switch>
                    </div>
                ) : (<RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>)
                }
            </div>
        )
    }
}

export default connect()(withRouter(withCookies(App)));

