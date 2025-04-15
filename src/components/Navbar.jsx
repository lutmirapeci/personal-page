import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <i class="bi bi-code-slash me-3 sky-blue display-5"></i>
          <span className="sky-blue">Lutmira's Space</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" id="custom-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#certifications">
                My Certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <a
            className="btn custom-btn ms-lg-3 mt-2 mt-lg-0"
            href="https://drive.google.com/file/d/14d5hY9cyXkiednIFV13IKwotvg6CsOKG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take a look at my CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
