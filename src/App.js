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
  return (
    <>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
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
