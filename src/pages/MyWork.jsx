import React from "react";
// config
import projects from "../configurations/other-projects";

const MyWork = () => {
  return (
    <section className="bg-dark text-white border-top py-5" id="my-work">
      <div className="wrap">
        <h2 className="text-center fw-bold mb-3">Other Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card h-100 w-100">
                <img
                  src={project.image}
                  className="card-img-top h-100"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-center p-3">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn custom-outline-btn"
                  >
                    View Code Here
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
