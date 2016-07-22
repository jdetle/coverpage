import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>nteract coverpage</h2>
        </div>
        <h3 className="App-intro">
          Prototype <i>mashup</i> of
        </h3>

          <ul style={{padding: '10px'}}>
            <li>remote jupyter kernels</li>
            <li>gists for storage</li>
            <li>nteract react components</li>
          </ul>

        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
