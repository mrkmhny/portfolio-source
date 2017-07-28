import React from 'react';

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
        'name':'Simple Simon',
        'link':'/about',
        'about':'A simple simon game',
        'languages':'Jquery, JS, html',
        'icon':'th-large'
      },
      {
        'name':'Box-Crusher',
        'link':'/about',
        'about':'A simple simon game',
        'languages':'Jquery, JS, html',
        'icon':'stop'
      },
      {
        'name':'Instant Weather',
        'link':'/about',
        'about':'A simple simon game',
        'languages':'Jquery, JS, html',
        'icon':'sun-o'
      },
      {
        'name':'Band Name Generator',
        'link':'/about',
        'about':'A simple simon game',
        'languages':'Jquery, JS, html',
        'icon':'music'
      }
    ]

    var collection = Object.keys(projects).map(function(c,i,a){
      return (
        <div key={i} className="project">
          <h2 className="project-name">{projects[i].name}</h2>
          <div className="project-info">
            <div className="project-icon">
              <i className={'fa fa-' + projects[i].icon} aria-hidden="true"></i>
            </div>
            <p className="project-about">{projects[i].about}</p>
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
