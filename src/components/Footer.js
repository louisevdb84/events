import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer class="footer footer-big footer-transparent" style={{ backgroundImage: 'url(' + 'https://images.unsplash.com/photo-1508507458595-09dc8c79201a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cc6c3ad976965da92b52db1eb92790c&auto=format&fit=crop&w=1191&q=80' + ')' }}>
<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <h5 class="title">Company</h5>
            <nav>
                <ul>
                    <li>
                        <a href="" >
                            Home
                        </a>
                    </li>                                     
                    <li>
                        <a href="">
                            Our Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About Us
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-sm-4">
            <h5 class="title"> Help and Support</h5>
            <nav>
                <ul>
                    <li>
                        <a href="">
                           Contact Us
                        </a>
                    </li>                  
                    <li>
                        <a href="">
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Company Policy
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </div>
        <div class="col-sm-4">
            <h5 class="title">Follow us on</h5>
            <nav>
                <ul>
                    <li>
                    <a href="" class="btn btn-social btn-facebook btn-simple">
                        <i class="fa fa-facebook-square"></i> Facebook
                    </a>
                </li> 
                <li>
                <a href="" class="btn btn-social btn-twitter btn-simple">
                        <i class="fa fa-twitter"></i> Twitter
                    </a>
                </li>
                <li>
                    <a href="" class="btn btn-social btn-reddit btn-simple">
                        <i class="fa fa-google-plus-square"></i> Google+
                    </a>
            </li>

                </ul>
            </nav>
        </div>
         

    </div>  
</div>
</footer>
    );
  }
}

export default Footer;














