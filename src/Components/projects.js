import React from "react";
import "./projects.css";
import project1 from "../asserts/pro.png"; // Adjust the path as necessary

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">MY PROJECTS</h1>
      <div className="projects-grid">
        {/* project - 1 */}

        <div className="project-card">
          <img className="project-image" src={project1} alt="YouTube Clone" />
          <div className="project-info">
            <h2>YOUTUBE CLONE</h2>
            <h4>
              This project replicates the core features of YouTube, including
              navigation, video display, and user interactions.
            </h4>
            <strong>Technologies Used:</strong> HTML5, CSS3, JavaScript
            <br />
            <a
              href="https://youtubeclone-sigma-roan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View Website
            </a>
          </div>
        </div>
        {/* project - 2 */}
        {/* <div className="project-card">
          <img className="project-image" src={project1} alt="YouTube Clone" />
          <div className="project-info">
            <h2>YOUTUBE CLONE</h2>
            <h4>
              This project replicates the core features of YouTube, including
              navigation, video display, and user interactions.
            </h4>
            <strong>Technologies Used:</strong> HTML5, CSS3, JavaScript
            <br />
            <a
              href="https://youtubeclone-sigma-roan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View Website
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
