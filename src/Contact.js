import React from 'react';
import "./index.css";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const Contact = () => {
    return (
        <>
        

        <div className="service">
            <h1>Contact Me</h1>
            </div>
            <main class="grid">
          <article>
          <a href="https://bit.ly/39rqcy7" target="__blank">
            <WhatsAppIcon style={{color:"green", widht:"4rem", height:"2rem"}} />
            </a>
            <div class="text">
              <h3>WhatsApp</h3>
            </div>
          </article>
          <article>
          <a href="https://bit.ly/2R0OmJD" target="__blank">
          <FacebookIcon style={{color:"#3b5998", widht:"4rem", height:"2rem"}} />
          </a>
            <div class="text">
              <h3>Facebook</h3>
              
            </div>
          </article>
          <article>
          
          <a href="https://bit.ly/3sGWeO1" target="__blank">
          <LinkedInIcon style={{color:"#0e76a8 ", widht:"4rem", height:"2rem"}} />
          </a>
            <div class="text">
              <h3>LinkedIn</h3>
              
            </div>
          </article>

        

          
        </main>
            
        </>
    );
}

export default Contact;