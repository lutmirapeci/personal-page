import React from "react";
// libs
import { Route, Switch } from "react-router-dom";
// sections
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";
import Certifications from "./sections/Certifications";
// pages
import MyWork from "./pages/MyWork";
// hooks
import ScrollToHash from "./hooks/ScrollToHash";

const App = () => {
  return (
    <>
      <ScrollToHash />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <HeroSection />
          <AboutMe />
          <Projects />
          <Certifications />
          <ContactForm />
        </Route>

        <Route path="/my-work">
          <MyWork />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default App;
