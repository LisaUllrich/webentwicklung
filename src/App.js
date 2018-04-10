import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WelcomeText from './components/WelcomeText';
import Linkslist from './components/Linkslist';
import logo from './IMG_3177.JPG';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Webentwicklung & JavaScript Frameworks</h1>
                <h3>Sommersemester 2018</h3>
                <h3>Lisa Ullrich</h3>
          </header>
        <WelcomeText />
        <Linkslist />
      </div>
    );
  }
}

export default App;
