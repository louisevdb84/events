import React, { Component } from 'react';
import Subscribe from './Subscribe';
import '../App.css'

class Event extends Component {
  render() {
    const {name, venue, description, date, startTime, endTime, imageURL } = this.props.event;    
    return (
        <div>              
      
      
            <div class="col-sm-6">
          <div class="card card-user">
              <div class="image" id="cardUserImage">
                  <img src={imageURL} alt="..." />
                  <div class="filter filter-azure">
                      <button id="subscribeBtn" type="button" class="btn">
                          <Subscribe/>
                      </button>
                  </div>
              </div>
              <div class="content">                  
                  
                  <h4 class="title">{name}</h4>
                  <p class="category">{description}</p>
                  
                  <div class="footer">
                      <br/>
                      <p>Venue: {venue}</p>
                      <div class="stats pull-right">
                                <i class="fa fa-clock-o"></i> {date} {startTime} - {endTime}
                                           
                            </div>
                            <br/>   
                        </div>                        
                    </div>
                    





                    <hr/>      
          </div>                 
          </div>       
      </div>   
    );
  }
}

export default Event;


// <div class="embed-responsive embed-responsive-4by3">
//                         <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
//                     </div>




// <iframe width="560" height="315" 
// src = "https://www.youtube.com/embed/hp8shfrNX_k" frameborder = "0" allow = "autoplay; encrypted-media" allowfullscreen >
// </iframe >