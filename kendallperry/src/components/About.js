import React from "react";
import headshot from '../images/kendall-headshot-copy.jpg'

const About = () => {
  return (
    <div id="about">
    <h2>About</h2>
    <div className="content-section">
      <img className="image" src={headshot} alt="Kendall Perry Headshot"/>
      <p className='about-text'>
        Hello, I'm Kendall! <span><i>(they/them)</i></span>
    <br /> <br/>
    I am a full-stack software engineer, with focus on design and user experience. 
    <br /><br />
        Prior to becoming a software engineer, I was a freelance
        musician/composer for ten years. During that time, I composed, directed,
        and co-produced numerous original projects as a multi-instrumentalist
        and composer, including four productions with Wild Heart Dance company,
        and more recently, a concert series with the Ring of Keys at Joe's Pub
        in NYC.
      <br /> <br />
        I currently focus on full-stack and front-end web development, and write code that performs beautifully with design
        and intuitive functionality in mind. Some of my interests include user
        accessibility and experience, data visualization, and working with code
        across the full stack. 
        <br /> <br />

        As a musician, I am a composer of music. As a web
        developer, I am a composer of code. Web development is my craft, and my
        craft is one that is always growing!
      </p>
    </div>
    </div>
  );
};

export default About;
