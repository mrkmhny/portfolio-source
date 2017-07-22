import React from 'react';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (

      <div className="page">
        <div className="greeting">Hi! Im Mark</div>
        <div className="tagline">I have a black nose</div>
      <div className="choice">About me</div>
      </div>
    );
  }
}



export default Welcome;
