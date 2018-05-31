import React, { Component } from 'react';
import thumb from './thumb.jpg';

class Heading extends Component {
  render() {
    return (
        <div class="wrapper">
            <div class="parallax filter-black">
                <div class="parallax-image">
                    <img src={thumb} alt="..." />
                </div>
                <div class="small-info">
                    <h1>Thriving Cities</h1>
                    <h3>Stay up to date with local events</h3>
                </div>
            </div>            
        </div>        
    );
  }
}

export default Heading;
