import React, { Component } from 'react';
import Event from './Event';
import Events from '../data';

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: Events
    };
  }

  render() {    
    return (      
      <div>
      <div class="section">
           <div class="container">
               <h2 class="section-title">Upcoming Events</h2>
               <div class="row">
                {
                  this.state.events.map((event, i) => {
                    return <Event event={event}/>
                  })
                }
               </div>
           </div>
        </div>
        
    
       
        </div>        
    );
  }
}

export default EventList;
