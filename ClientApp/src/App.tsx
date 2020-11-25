import React from 'react';
import "antd/dist/antd.less";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Redirect, 
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { IAppStore } from './const/interface';
import LoginForm from './features/login/login';
import Cookies from 'universal-cookie';
import { isExpired } from 'react-jwt';
import {isExistActiveToken} from './features/login/loginSlice';

function App() {
  return (
    <>      
        <Router>        
          <Switch>        
            <Route path="/login" component={LoginForm}/>            
            <RouteAuthen>
              <Route path="/"/>
            </RouteAuthen>
          </Switch>          
        </Router>
    </>    
  );
}

function RouteAuthen({children, ...rest}:any) {    
  const isAuthen = useSelector(isExistActiveToken);
  return (
    <Route
      {...rest}
      render=
        {
          ({ location }) =>
          isAuthen ? (children) : (
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
