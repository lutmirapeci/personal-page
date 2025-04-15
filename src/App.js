import React from "react";
// components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Certifications />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
