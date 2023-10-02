import React from 'react';

function Contact() {
  return (
    <div className='contactContainer'>
      <h1>Contact Me</h1>
      <div className="contactInfo">
        <div className="contactItem">
         
          <p> 📱: 7259803514</p>
        </div>
        <div className="contactItem">
           
          <p>✉️: mukesh.itworld@gmail.com</p>
        </div>
        <div className="contactItem">
          <a href="https://www.linkedin.com/in/mukesh-kumar-mishra-700b891a0/" target="_blank" rel="noopener noreferrer">
            
            <p>🌐 LinkedIn</p>
          </a>
        </div>
        <div className="contactItem">
          <a href="https://github.com/mukeshitworld" target="_blank" rel="noopener noreferrer">
             
            <p>🌐 GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
