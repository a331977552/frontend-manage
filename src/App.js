import React from 'react';
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound/Index'
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Loading from "./components/Loading";
import RetryButton from "./components/RetryButton";
import {getAllCategories} from "./Api/CategoryApi";
import {connect} from "react-redux";
import initReducer from "./store/initReducer";
import * as initActionCreators from "./store/actionCreactors";
import {bindActionCreators} from "redux";
class App extends React.Component {
    state = {
        collapsed: false,
        sideBarMarginLeft: 200,
        loading:true, loadingSuccess:false,
        errorMessage:null,
        categories:[]
    }
    onRetryClicked=(e)=>{
        this.setState({
            categories:[],
            loading:true,
            loadingSuccess:false
        })
        this.init();
    }

    constructor(props) {
        super(props);
        bindActionCreators(initActionCreators, this.props.dispatch);
    }

    componentDidMount() {


        if(!this.state.loading&&this.state.loadingSuccess){
        }else{
            this.init();
        }
    }
    init(){
        getAllCategories((categories)=>{

            this.setState({
                loading:false,
                loadingSuccess:true
            });
            this.props.dispatch(initActionCreators.initializedSuccessfully(categories))
        },(error)=>{
            this.setState({
                loading:false,
                loadingSuccess:false,
                errorMessage:error
            })
        });
    }


    render() {
      const {loading, loadingSuccess, errorMessage} = this.state;
      return (
          <div>
              {loading ? <Loading/> : loadingSuccess ? (
                  <div>
                      <Switch>
                          <Route path={'/notfound'} component={NotFound}  />
                          <Route path={'/'} component={Dashboard}  />
                      </Switch>
                  </div>
              ) : (<RetryButton message={errorMessage} onRetryClicked={this.onRetryClicked}/>)
              }
          </div>
    )
  }
}
export default  connect()(App);

