import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
//    let baseURL = "http://localhost:8000/agrovision/data"
    let baseURL = "agrovision/data"
    axios.get(baseURL).then((response) => {
      console.log(response.data)
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
