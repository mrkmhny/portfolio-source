import React from 'react';
import catvatar from '../images/catvatar.png';

class Welcome extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (

      <div className="sun">
        <div className="container-sun animated fadeIn">
        <img className="cat animated fadeIn" src={catvatar}/>
          <svg className="svg-sun" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
            <circle cx="50" cy="50" r="40" id="sun">

            </circle>
          </svg>
        </div>

      </div>
    );
  }
}



export default Welcome;
