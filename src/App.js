import React from 'react';
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound/Index'
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import Loading from "./components/Loading";
import RetryButton from "./components/RetryButton";
import {getAllCategories} from "./Api/CategoryApi";
import {connect} from "react-redux";
import Login from './pages/Login'
import * as initActionCreators from "./store/actionCreactors";

class App extends React.Component {
    state = {
        collapsed: false,
        sideBarMarginLeft: 200,
        loading: true, loadingSuccess: false,
        errorMessage: null,
        categories: []
    }
    onRetryClicked = (e) => {
        this.setState({
            categories: [],
            loading: true,
            loadingSuccess: false
        })
        this.init();
    }




    componentDidMount() {
            if (this.state.loading && !this.state.loadingSuccess) {
                this.init();
            }
    }


    init() {
        getAllCategories((categories) => {

            this.setState({
                loading: false,
                loadingSuccess: true
            });
            this.props.initializedSuccessfully(categories)
        }, (error) => {
            this.setState({
                loading: false,
                loadingSuccess: false,
                errorMessage: error
            })
        });
    }


    render() {
        const {loading, loadingSuccess, errorMessage} = this.state;
        return (
            <div>{loading ? <Loading/> : loadingSuccess ? (
                <div>
                    <Switch>
                        <Route path={'/notfound'} component={NotFound}/>
                        <Route path={'/login'} component={Login}/>:
                        <Route path={'/'} component={Dashboard}/>
                    </Switch>
                </div>
            ) : (<RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>)
            }
            </div>
        )
    }
}
const  mapDispatchToProps=(dispatch,ownProps)=>{
    return {initializedSuccessfully:(categories)=>{
            dispatch(initActionCreators.initializedSuccessfully(categories))
        }
    }
}

export default connect(null,mapDispatchToProps)(withRouter(App));

