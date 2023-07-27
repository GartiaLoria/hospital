import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Homepage />
          {/* <h2>Welcome 1</h2> */}
      </div>
    );
  }
}

export default App;
