import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import Subscribe from './components/Subscribe';

class App extends Component {
  render() {
    return (
      <div>  
        <div>
          <Heading></Heading>
          <Subscribe/>
        </div>  
      </div>
    );
  }
}

export default App;
