import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import EventList from './components/EventList';
import Footer from './components/Footer';
// import TestCSV from './TestCSV';

class App extends Component {
  render() {
    return (
      <div>  
        <div>        
          <Heading />
          <div className="container">              
              <EventList/>      
          </div>
          <Footer/>
        </div>  
      </div>
    );
  }
}

export default App;
