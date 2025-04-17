import React, { useState } from "react";
// libs
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
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
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <i className="bi bi-x-lg fs-3 sky-blue"></i>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-end align-items-lg-center">
            <li className="nav-item d-flex">
              <Link className="nav-link" to="/#about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#certifications">
                My Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="btn custom-btn  ms-lg-3 mt-2 mt-lg-0"
                href="https://drive.google.com/file/d/14d5hY9cyXkiednIFV13IKwotvg6CsOKG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take a look at my CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
