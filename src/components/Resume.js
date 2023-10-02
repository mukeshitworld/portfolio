import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div className='resumeContainer'>
      {/* The Link component to your LinkedIn profile */}
      <Link to='https://github.com/mukeshitworld' target='_blank'>
      GitHub
      </Link>
    </div>
  );
}

export default Resume;
