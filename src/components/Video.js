import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
        <div class="container">   
            <br />    
            <br />        
            <br />    
            <br/>    
            <div className="row">
            <div className="col-md-6">                
            <p>Lorem ipsum dolor sit amet, donec vestibulum, ut cras lacinia pede malesuada, risus ut bibendum mauris sed venenatis tristique, elementum at porttitor non rhoncus auctor in. Pharetra semper, ipsum at eget vel, molestiae magna ac. Dictum in orci dolor felis bibendum mi, suscipit cras fermentum ut, donec eget id, molestie dictumst non lorem. Tortor consequat velit vitae ante vitae, mollis vel, nunc sem gravida. Ligula integer aenean amet rutrum lectus eros, suspendisse ullamcorper magna mattis mauris consectetuer dictum. Cras integer pede arcu tellus risus diam.</p>
                </div>            
        <div className = "col-md-6">
            <iframe width="450" height="235" 
            src = "https://www.youtube.com/embed/5F7c28Ye-Fg" frameborder = "0" allow = "autoplay; encrypted-media" allowfullscreen />
                </div>        
               
                </div>            
        </div>            
    );
  }
}

export default Video;

