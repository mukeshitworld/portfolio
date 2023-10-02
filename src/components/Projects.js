import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Movies Database Search',
      description: 'This project enables users to search, filter, and explore a vast collection of films, providing an engaging and interactive movie browsing experience.',
      link: 'https://moviesdatabase-ten.vercel.app/',
    },
    {
      title: 'News App',
      description: 'This project enables users to search, filter, and explore a vast collection of films, providing an engaging and interactive movie browsing experience.',
      link: 'https://news-app-ep8d.onrender.com/',
    },
    {
      title: 'Simple To Do List With Cache',
      description: 'An intuitive React-based to-do list application that helps you efficiently manage tasks and stay organized with a clean and user-friendly interface',
      link: 'https://to-do-list-jhbt.onrender.com/',
    },
    {
      title: 'Weather Forecast Details',
      description: 'Weather Forecast Details',
      link: 'https://weather-yzuw.onrender.com/',
    },
  ];

  return (
    <div className='projectContainer'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {projects.map((project, index) => (
          <div className='projectBox' key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              Project Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
