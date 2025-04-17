import React from "react";
// images
import heroImg from "../assets/images/me.png";

const HeroSection = () => {
  return (
    <section className="bg-dark text-white py-5 border-top" id="hero">
      <div className="wrap">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="display-4 fw-bold">Lutmira Peci</h1>
            <h2 className="sky-blue h3 fw-bold mb-3">Frontend Web Developer</h2>
            <p className="mb-4 text-justify">
              I'm a passionate frontend developer with a focus on crafting
              clean, responsive, and engaging user interfaces. With strong
              skills in HTML, CSS, JavaScript, and React, I enjoy turning ideas
              into beautiful, functional web experiences. I'm always exploring
              new tools and best practices to bring creativity and usability
              together.
            </p>
            <a href="#contact" className="btn custom-btn px-4 py-2">
              Contact Me
            </a>
          </div>
          <div className="col-lg-4 text-center mt-4 mt-lg-0">
            <img className="hero-img" src={heroImg} alt="Lutmira Peci" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
