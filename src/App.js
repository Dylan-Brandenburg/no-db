import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from "./components/Beers/Beers";

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Beers />
      </div>
    );
  }
}

export default App;
