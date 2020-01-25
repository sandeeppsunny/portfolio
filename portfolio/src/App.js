import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import NavigationBarComponent from './components/NavigationBarComponent';
import JumbotronComponent from './components/JumbotronComponent';
import AccordionComponent from './components/AccordionComponent';
import Fade from 'react-reveal/Zoom';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      {/*
        <NavigationBarComponent />
        <AccordionComponent />
      */}
      <JumbotronComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Fade left>
        <CardComponent />
      </Fade>
    </div>
  );
}

export default App;
