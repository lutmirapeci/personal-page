import React from "react";

const FlipCard = ({ image, title, techStack, repoLink }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
          <img src={image} alt={title} className="img-fluid rounded" />
          <p className="text-light lead project-title">{title}</p>
        </div>
        <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
          <h4>Tech Stack</h4>
          <ul className="list-unstyled text-start">
            {techStack.map((tech, index) => (
              <li key={index}>
                <i className={`me-2 blue ${tech.icon}`}></i>
                {tech.name}
              </li>
            ))}
          </ul>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn custom-btn mt-2"
          >
            View Code Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
