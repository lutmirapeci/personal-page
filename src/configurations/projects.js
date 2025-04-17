// images
import proj1 from "../assets/images/project1.png";
import proj2 from "../assets/images/project2.png";
import proj3 from "../assets/images/project3.png";

const projects = [
  {
    image: proj1,
    title: "TechForward 2024",
    techStack: [
      { icon: "bi bi-filetype-html", name: "HTML" },
      { icon: "bi bi-bootstrap-fill", name: "Bootstrap" },
      { icon: "bi bi-filetype-scss", name: "SASS" },
      { icon: "bi bi-filetype-js", name: "JavaScript" },
    ],
    repoLink: "https://github.com/lutmirapeci/tech-forward",
  },
  {
    image: proj2,
    title: "Street ARTists",
    techStack: [
      { icon: "bi bi-filetype-html", name: "HTML" },
      { icon: "bi bi-filetype-js", name: "JavaScript" },
      { icon: "bi bi-filetype-css", name: "CSS" },
      { icon: "bi bi-bootstrap-fill", name: "Bootstrap" },
    ],
    repoLink: "https://github.com/lutmirapeci/street-artists",
  },
  {
    image: proj3,
    title: "CYBERWARE Global Defence",
    techStack: [
      { icon: "bi bi-filetype-tsx", name: "TypeScript" },
      { icon: "bi bi-box-arrow-in-right", name: "Next.js" },
      { icon: "bi bi-bootstrap-fill", name: "Bootstrap" },
    ],
    repoLink: "https://github.com/lutmirapeci/3rd-project",
  },
];

export default projects;
