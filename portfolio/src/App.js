import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import NavigationBarComponent from './components/NavigationBarComponent';
import JumbotronComponent from './components/JumbotronComponent';

function App() {
  return (
    <div className="App">
      {/*
        <NavigationBarComponent />
      */}
      <JumbotronComponent />
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
