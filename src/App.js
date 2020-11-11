import React from 'react';
import "antd/dist/antd.less";
import './App.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './features/login/login';

function App() {
  console.log("test");
  return (
    <>      
        <Router>        
          <Switch>        
            <Route path="/">          
              <LoginForm/>
            </Route>
          </Switch>
        </Router>
    </>    
  );
}

export default App;
