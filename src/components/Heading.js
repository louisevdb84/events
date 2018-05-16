import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
        <div class="wrapper">
            <div class="parallax filter-black">
                <div class="parallax-image">
                    <img src="../assets/img/thumb.jpg" alt="..." />
                </div>
                <div class="small-info">
                    <h1>Thriving Cities</h1>
                    <h3>Events</h3>
                </div>
            </div>            
        </div>        
    );
  }
}

export default Heading;
