import React from "react";
import headshot from "../images/kendall-headshot-copy.jpg";

const Home = () => {
  return (
    <>
      <div>
        <h4>
          Kendall Perry <span>they/them</span>
        </h4>
        <h5>Full Stack Software Engineer</h5>
      </div>
      <img className="image" src={headshot} alt="Kendall Perry Headshot" />
    </>
  );
};

export default Home;
