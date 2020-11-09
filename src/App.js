import React from 'react';
import './App.css';
import "antd/dist/antd.less";
import './App.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">          
        </Route>
        <Route path="/topics">          
        </Route>
        <Route path="/">          
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
