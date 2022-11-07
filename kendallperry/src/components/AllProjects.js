import React from "react";
import Project from "./Project";
import creatureCoders from "../images/creature-coders.png";
import kilnMeSoftly from "../images/kiln-me-softly.png";
import ihmeDataViz from "../images/ihme-data-viz.png";
import portfolio from '../images/portfolio1.png'

const projectBank = [
  {
    title: "Creature Coders",
    deployedUrl: "https://creature-coders.herokuapp.com/",
    github: "https://github.com/pigeon-programmers/creature-coders-web",
    description: "A mobile learn-to-code game for beginners of all ages.",
    techStack: "Built with JavaScript, React, Redux, Blockly, Node.js, Express, PostgreSQL, Sequelize, React Native Webview",
    image: creatureCoders,
  },
  {
    title: "Kiln Me Softly",
    deployedUrl: "https://kiln-me-softly.herokuapp.com/",
    github: "https://github.com/j-sky-graceshopper/kiln-me-softly",
    description: "A mock-up e-Commerce store selling pottery, equipped with a demo Stripe API.",
    techStack: "Built with JavaScript, React, Redux, Express, Node.js, Sequelize, PostgreSQL, Stripe API",
    image: kilnMeSoftly,
  },
  {
    title: "IHME Data Visualization",
    deployedUrl: "",
    github: "https://github.com/kendallperry/IHME-Data-Viz-Challenge",
    description:
      "Data Vizualization challenge displaying real data from IHME using the Victory Visualization library.",
    techStack: "Built with JavaScript, React, Axios, Victory.js, IHME API",
    image: ihmeDataViz,
  },
  {
    title: "Portfolio",
    deployedUrl: "",
    github:
      "https://github.com/kendallperry/kendall-portfolio/tree/main/kendallperry",
    description: "Created and designed by yours truly, my personal portfolio!",
    techStack: "Built with JavaScript, React, Styled Components, Email.js",
    image: portfolio,
  },
];

const AllProjects = () => {
  return (
    <div className="content-projects">
      <h2>Projects</h2>
      <div id="projects">
        {projectBank.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
