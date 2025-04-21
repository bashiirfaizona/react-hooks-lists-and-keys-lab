import React from 'react';

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h2>{name}</h2>
      <p>{about}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
