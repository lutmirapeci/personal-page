import React from "react";
// components
import Card from "../components/Card";
// configurations
import certifications from "../configurations/certifications";

const Certifications = () => (
  <section id="certifications" className="py-5 bg-dark text-center">
    <h2 className="my-5 text-white">My Certifications</h2>
    <div className="certification-img-wrapper overflow-hidden">
      <div className="certification-img d-flex">
        {[...certifications, ...certifications].map((certification, i) => (
          <div key={i} className="mx-3 flex-shrink-0">
            <Card {...certification} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
