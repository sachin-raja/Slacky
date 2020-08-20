import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} 
from 'react-router-dom';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Login from './Login'
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
        // two childs cannot stay together so we fragment the child in a empty tag
        <>
          {/* Header */}
          <Header />
          <div className="app_body">
            {/* Sidebar */}
            <Sidebar />
            {/* React-Router -> chat screen change */}
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
        </>
      )}


      </Router>
    </div>
  );
}

export default App;
