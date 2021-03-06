import React from 'react';
//import jsimon from '../projects/jsimon/index.html';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {

    var projects = [
      {
        'name':'JSimon',
        'site':"http://jsimon.bitballoon.com",
        'repo':"https://github.com/mrkmhny/jsimon/index.html",
        'about':'A pure JS/JQuery implementation of the classic electronic game "Simon"',
        'languages':'Jquery, JavaScript, html',
        'icon':'th-large'
      },
      {
        'name':'Box Slayer',
        'site':'http://boxslayer.bitballoon.com',
        'repo':'https://github.com/mrkmhny/boxslayer',
        'about':'A low-fi rogue-inspired dungeon crawler game built with React/Redux',
        'languages':'JavaScript, React.js, Redux, HTML',
        'icon':'stop'
      },
      {
        'name':'Instant Weather',
        'site':'http://instantweather.bitballoon.com',
        'repo':'https://github.com/mrkmhny/weather',
        'about':'Detects location via IP and retrieves data from 3rd party weather API',
        'languages':'JavaScript, OpenWeatherMap API',
        'icon':'sun-o'
      },
      {
        'name':"Conway's Game of Life",
        'site':'http://conwayslife.bitballoon.com',
        'repo':'https://github.com/mrkmhny/conwayslife',
        'about':'A React.js implementation of John Conway’s cellular automation',
        'languages':'JavaScript, React.js',
        'icon':'th'
      },
      {
        'name':'Band Name Generator',
        'site':'https://www.youtube.com/embed/XPslsKDocV8',
        'about':'Creates pseudo-random word combinations to form silly bandnames and quickly search if they are available',
        'languages':'PHP, MySQL',
        'icon':'music'
      }
    ]

    var collection = Object.keys(projects).map(function(c,i,a){
      return (
        <div key={i} className="project">
          <a href={projects[i].site}>
            <h2 className="project-name">{projects[i].name}</h2>
          </a>
          <div className="project-info">
            <a href={projects[i].site}>
              <div className="project-icon">
                <i className={'fa fa-' + projects[i].icon} aria-hidden="true"></i>
              </div>
            </a>
            <div className="project-text">
              <p className="project-about">{projects[i].about}</p>
              <p className="languages">Languages Used: {projects[i].languages}</p>{projects[i].repo && <a href={projects[i].repo}>View Source</a>}
            </div>
          </div>
        </div>
      );
    })

    return (

      <div className="page projects animated fadeIn" id="projects">
        <h1>Projects</h1>
        <div className="collection">
          {collection}
        </div>
      </div>
    );
  }
}



export default Projects;
