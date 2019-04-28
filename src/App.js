import React from 'react';
import Dashboard from './pages/Dashboard/Index'
import NotFound from './pages/NotFound/Index'
import './App.css';
import {Route,Switch} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (

        <div>

          <Switch>
            <Route path={'/notfound'} component={NotFound}  />
            <Route path={'/'} component={Dashboard}  />

          </Switch>
        </div>

    )
  }
}


export default  App;

