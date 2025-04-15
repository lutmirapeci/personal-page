import React from "react";
// images
import proj1 from "../assets/project1.png";
import proj2 from "../assets/project2.png";
import proj3 from "../assets/project3.png";

const Projects = () => {
  return (
    <section className="bg-dark text-white py-5" id="projects">
      <div className="wrap">
        <div className="row justify-content-center">
          <div className="col">
            <h2 className="text-center fw-bold mb-3">Projects</h2>
            <div className="row g-5">
              <div className="col-md-4 text-center">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front d-flex flex-column justify-content-center align-items-center p-3">
                      <img
                        src={proj1}
                        alt="Project 1"
                        className="img-fluid rounded mb-3"
                      />
                      <span className="fw-bold text-white fs-5">
                        TechForward 2024
                      </span>
                    </div>
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                      <h5>Tech Stack</h5>
                      <ul className="list-unstyled text-start">
                        <li>
                          <i className="bi bi-filetype-html me-2 blue"></i>HTML
                        </li>
                        <li>
                          <i className="bi bi-bootstrap-fill me-2 blue"></i>
                          Bootstrap
                        </li>
                        <li>
                          <i className="bi bi-filetype-scss me-2 blue"></i>SASS
                        </li>
                        <li>
                          <i className="bi bi-filetype-js me-2 blue"></i>
                          JavaScript
                        </li>
                      </ul>
                      <a
                        href="https://github.com/lutmirapeci/tech-forward"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light mt-2"
                      >
                        View Code Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front d-flex flex-column justify-content-center align-items-center p-3">
                      <img
                        src={proj2}
                        alt="Project 2"
                        className="img-fluid rounded mb-3"
                      />
                      <span className="fw-bold text-white fs-5">
                        Street ARTists
                      </span>
                    </div>
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                      <h5>Tech Stack</h5>
                      <ul className="list-unstyled text-start">
                        <li>
                          <i className="bi bi-filetype-html me-2 blue"></i>HTML
                        </li>
                        <li>
                          <i className="bi bi-filetype-js me-2 blue"></i>
                          JavaScript
                        </li>
                        <li>
                          <i className="bi bi-filetype-css me-2 blue"></i>CSS
                        </li>
                        <li>
                          <i className="bi bi-bootstrap-fill me-2 blue"></i>
                          Bootstrap
                        </li>
                      </ul>
                      <a
                        href="https://github.com/lutmirapeci/street-artists"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light mt-2"
                      >
                        View Code Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front d-flex flex-column justify-content-center align-items-center p-3">
                      <img
                        src={proj3}
                        alt="Project 3"
                        className="img-fluid rounded mb-3"
                      />
                      <span className="fw-bold text-white fs-5">
                        CYBERWARE Global Defence
                      </span>
                    </div>
                    <div className="flip-card-back d-flex flex-column justify-content-center align-items-center p-3">
                      <h5>Tech Stack</h5>
                      <ul className="list-unstyled text-start">
                        <li>
                          <i className="bi bi-filetype-tsx me-2 blue"></i>
                          TypeScript
                        </li>
                        <li>
                          <i className="bi bi-box-arrow-in-right me-2 blue"></i>
                          Next.js
                        </li>
                        <li>
                          <i className="bi bi-bootstrap-fill me-2 blue"></i>
                          Bootstrap
                        </li>
                      </ul>
                      <a
                        href="https://github.com/lutmirapeci/3rd-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light mt-2"
                      >
                        View Code Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
