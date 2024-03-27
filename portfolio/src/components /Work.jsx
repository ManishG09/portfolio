import Projects from "./Projects";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const Work = () => {
    const location= useLocation()
    const [isWorkPage, setIsWorkPage] = useState(location.pathname === '/work')
   

  const projects = [
    {
      name: "Project 1",
      description: "This is the description for project 1",
      image: "https://example.com/project1.jpg",
    },
    {
      name: "Project 2",
      description: "This is the description for project 2",
      image: "https://example.com/project2.jpg",
    },
  ];
 
  return (
    <div className={ isWorkPage ? 'portfolio': 'content'}>
     <section>
      <h2> 
        <span className="bouncy-text">M</span>
        <span className="bouncy-text space">y</span>
        <span className="bouncy-text">P</span>
        <span className="bouncy-text">o</span>
        <span className="bouncy-text">r</span>
        <span className="bouncy-text">t</span>
        <span className="bouncy-text">f</span>
        <span className="bouncy-text">o</span>
        <span className="bouncy-text">l</span>
        <span className="bouncy-text">i</span>
        <span className="bouncy-text">o</span>
      </h2>
      { isWorkPage &&<div className="portfolio">
        <h2>My Projects</h2>
        {projects.map((project, index) => (
          <Projects
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>}
      </section>
    </div>
  );
};

export default Work;
