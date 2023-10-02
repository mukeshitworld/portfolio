// src/components/Home.js
import React from 'react';
import profileImage from '../assets/mukesh.JPG';
import coverImage from '../assets/cover-blue.webp';
import reactImage from '../assets/react.png';

function Home() {
  return (
    <div>
    <div className='mainContainer'>
      
      <h1>About Me</h1>
      <div className='profileImage'><img src={profileImage} alt='Mukesh' /></div>
      <div className='reactImg'><img src={reactImage} alt='React Logo' /></div>
      <p>Hi, I'm a passionate and proactive front-end web developer with over 13 + years of rigorous experience, characterized by a strong work ethic and excellent interpersonal skills. </p>
      <p>I work extensively with frontend technologies, specializing in HTML5, CSS3, JavaScript, and popular frameworks like React.</p>
      <p>My expertise encompasses optimization, development, maintenance, and integration. I'm enthusiastic about tackling web development and design challenges to create lasting impacts on user experiences.</p>
      
    </div>
    <img src={coverImage} alt='cover' className='coverImg' />
    </div>
  );
}

export default Home;
