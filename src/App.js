import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import particleOptions from './particleOptions';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/Home';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation/>
            <Particles params={particleOptions} className='particles'/>
            <Route path='/' component = {Home}/>
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
