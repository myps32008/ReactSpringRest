import React, { useState } from 'react';
import "antd/dist/antd.less";
import 'antd/dist/antd.css';
import './App.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Redirect, 
} from "react-router-dom";
import LoginForm from './features/login/login';
import Cookies from 'universal-cookie';

function App() {
  return (
    <>      
        <Router>        
          <Switch>        
            <Route path="/login" component={LoginForm}/>            
            <RouteAuthen>
            </RouteAuthen>
          </Switch>          
        </Router>
    </>    
  );
}

function RouteAuthen({children, ...rest}) {
  const cookies = new Cookies();;
  const _user = cookies.get("user");  
  return (
    <Route
      {...rest}
      render=
        {
          ({ location }) =>
            _user && _user.token ? (children) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
        }
    />
  );
}
export default App;
