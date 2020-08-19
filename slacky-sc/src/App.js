import React from 'react';
import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <h1> This is me</h1>
      <Router>
        {/* Header */}
        <Header />
        <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router -> chat screen change */}
          <Switch>
            <Route path="/room/:roomId">
              <h1>Chat Screen</h1>
              {/* <Chat /> */}
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
