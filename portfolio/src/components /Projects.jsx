import React from 'react';

const Projects = ({image, description, name}) => {
  return (
    <div className="project">
      <img src={image} alt={name} />
      
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Projects;