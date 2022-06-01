import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './Home';
import Register from './components/Register/Register';
import TopNavigation from './components/TopNavigation/TopNavigation';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
<div style={{textAlign: "center"}}><h1>Stock Car Fan Nation</h1></div>


      <BrowserRouter>
        <div>
        <TopNavigation></TopNavigation>
          {/*<div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>*/}
        </div>
      </BrowserRouter>
      <div style={{display: "flex"}}>
        <div style={{width: "50%", height: "300px", background: "#ffe4c4", textAlign: "center"}}><h2>Video player</h2></div>
        <div style={{width: "50%", height: "300px", background: "#f0f8ff", textAlign: "center"}}><h2>Document download</h2></div>
      </div>
      <Register></Register>

    </div>
  );
}

export default App;
