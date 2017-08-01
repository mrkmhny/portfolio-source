import React from 'react';
import scratch from '../images/scratch.png'
import lantea from '../images/lantea.png'

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (

      <div className="page about animated fadeIn" id="about">
        <h1>About Me</h1>

        <h2>Overview</h2>
        <div className="section">
          <p>Hi, I'm Mark Mahoney! I currently spend most of my time working with our sponsors at <a href="http://mlh.io">Major League Hacking</a>. In my free time, I help to build out the front-end design on a writer's platform for the Dutch community called "Lantea."</p>
          <p><a href="https://www.dropbox.com/s/tiaf4w7nw4bkyit/mark%20mahoney%20resume.pdf?dl=0"><i className="fa fa-fw fa-file-text-o"/>VIEW MY FULL RESUME</a></p>
        </div>
        <h2>Development Experience</h2>
        <div className="section development">
          <a href="https://scratch.mit.edu/projects/2858691/#player">
            <div className="scratch image">
              <img src={scratch}/>
              <h4>My first coding project. Built with Scratch.</h4>
            </div>
          </a>
          <p>I received my first computer on Christmas in 1999 (I thought I was a hotshot with my Dell tower with 5GB of storage),
          but my first real foray into computer science wasn't until 2012, when I signed up Harvard University's first cohort for CS50x: Introduction to Computer Science on edx.org,
          back when it was still just an experiment between Harvard and MIT.  I dove in headfirst and was one of the 1% of students to finish the course in it's entirety.
          Here's my <a href="https://s3.amazonaws.com/verify.edx.org/downloads/78c7610f250a4d33a0ad02afe30b435a/Certificate.pdf">certificate</a> to prove it! </p>
          <p>The HarvardX course was largely focused on programming in C as broader computer science theory (abstraction, data structures, algorithms, memory management) and web development with PHP, but since then I've continued to experiment with other languages and frameworks, including Python, Ruby on Rails, and most recently, the MERN stack: MongoDB, Express, React, and Node.js.</p>
          <div className="lantea image">
            <img src={lantea}/>
            <h4>Mockup for the Lantea homepage</h4>
          </div>
          <p>Currently, I'm working on a freelance project that focuses primarily on building the focuses building out the front-end design of a new web-app using HTML/CSS.</p>
          <p>My goal is find full-time web development position where I can continue to learn and hone my craft. I hope to use the client-facing experience that I've gained during my time in Sales at tech startups over the past few years to create products that people love and use everyday!</p>
        </div>
      </div>
    );
  }
}



export default About;
