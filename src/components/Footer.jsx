import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white border-top py-4">
      <div className="container text-center">
        {/* Social Links */}
        <div className="mb-3">
          <a
            href="https://github.com/lutmirapeci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 fs-4"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lutmira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3 fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="mailto:lutmirapeci@gmail.com"
            className="text-white mx-3 fs-4"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="small mb-0">
          &copy; {new Date().getFullYear()} Lutmira Peci. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
