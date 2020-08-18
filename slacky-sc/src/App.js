import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'


function App() {
  return (
    //BEM naming convention
    <div className="app">
      <h1> This is me</h1>

      {/* Header */}
      <Header />
      <div className="app_body">
      {/* Sidebar */}
      <Sidebar />
      {/* React-Router -> chat screen */}
        
      </div>
    </div>
  );
}

export default App;
