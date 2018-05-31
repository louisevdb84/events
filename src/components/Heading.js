import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
        <div class="wrapper">
            <div class="parallax filter-black">
                <div class="parallax-image">
                    <img src="https://images.unsplash.com/photo-1508507458595-09dc8c79201a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cc6c3ad976965da92b52db1eb92790c&auto=format&fit=crop&w=1191&q=80" alt="..." />
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
