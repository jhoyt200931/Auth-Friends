import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Link to="/login">Login</Link>
      <Link to="/friends">Friends</Link>
      <Switch>
        {/* <Route path="/friends" component={PrivateRoute}/> */}
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
