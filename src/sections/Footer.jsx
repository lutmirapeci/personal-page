import React from "react";
// configurations
import socialLinks from "../configurations/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-dark text-white border-top py-4" id="footer">
      <div className="container text-center">
        <div className="mb-3">
          {socialLinks.map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="text-white mx-3 fs-4"
            >
              <i className={`bi ${icon}`}></i>
            </a>
          ))}
        </div>
        <p className="small mb-0">
          <i className="bi bi-c-circle"></i>
          <span className="mx-2">{new Date().getFullYear()}</span>
          Lutmira Peci. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
