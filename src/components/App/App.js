import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Ticker from '../Ticker/Ticker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coinero</h1>
        </header>
        <div className="App-intro">
          <Ticker />
        </div>
      </div>
    );
  }
}

export default App;
