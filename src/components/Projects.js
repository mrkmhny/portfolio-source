import React from 'react';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (

      <div className="page projects">
        <h1>Projects</h1>
        <div className="collection">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </div>
    );
  }
}



export default Projects;
