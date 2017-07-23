import React from 'react';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (

      <div className="page content">
        <h1>I'm a person</h1>
        <p>Here's some more info about me.  I have a head and two arms and two legs and lots of toes and fingers</p>
        <p>I have eyeballs too</p>
        <p>Here's some more info about me.  I have a head and two arms and two legs and lots of toes and fingers</p>
        <p>I have eyeballs too</p>
        <p>Here's some more info about me.  I have a head and two arms and two legs and lots of toes and fingers</p>
        <p>I have eyeballs too</p>
      </div>
    );
  }
}



export default Content;
