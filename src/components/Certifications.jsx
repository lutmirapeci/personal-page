import React from "react";
// images
import TeachingLicense from "../assets/teaching-license.png";
import PythonCertificate from "../assets/python-certificate.png";
import BrainsterCertificate from "../assets/brainster-certificate.png";
import Goethe from "../assets/goethe.png";

const Certifications = () => {
  // configurations
  const certifications = [
    {
      image: TeachingLicense,
      link: "https://drive.google.com/file/d/1SpxQGrIWTT2ftRUVaoJ2BLAK3cgDj5P1/view?usp=sharing",
      title: "Teaching License",
    },
    {
      image: PythonCertificate,
      link: "https://app.diplomasafe.com/en-US/diploma/d7dc6efe201fde6e3720c8abf859ffb913d0bf522",
      title: "Python From Scratch",
    },
    {
      image: BrainsterCertificate,
      link: "https://academy.brainster.co/certificates/e812f24e-503d-4ce3-9c96-e9c0be55e8b4",
      title: "Fronted Academy",
    },
    {
      image: Goethe,
      link: "https://drive.google.com/file/d/1VNJJQeUfgoasgii3E8kUg_3-7khq2DUh/view",
      title: "Goethe Zertifikat A2",
    },
  ];

  return (
    <section id="certifications" className="py-5 bg-dark">
      <div className="wrap text-center">
        <h2 className="mb-5 text-white">My Certifications</h2>

        <div className="cert-logos-wrapper overflow-hidden">
          <div className="cert-logos d-flex">
            {[...certifications, ...certifications].map((cert, index) => (
              <div className="mx-4 flex-shrink-0" key={index}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <div className="cert-box position-relative text-center">
                    <img
                      src={cert.image}
                      alt={`Certification ${index + 1}`}
                      className="cert-logo"
                    />
                    <div className="cert-title text-white">{cert.title}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
