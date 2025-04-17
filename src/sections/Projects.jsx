import React from "react";
// libs
import { Link } from "react-router-dom";
// components
import FlipCard from "../components/FlipCard";
// configurations
import projects from "../configurations/projects";

const Projects = () => {
  return (
    <section className="bg-dark text-white py-5" id="projects">
      <div className="wrap">
        <h2 className="text-center fw-bold">Projects</h2>
        <div className="row g-1">
          {projects.map((project, index) => (
            <div className="col-12 col-xl-4 text-center" key={index}>
              <FlipCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/my-work" className="btn custom-btn">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
