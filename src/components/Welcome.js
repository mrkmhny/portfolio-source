import React from 'react';
import Contact from './Contact';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {

    var choices = [
      {
        'label':'About Me',
        'link':'/about'
      },
      {
        'label':'Side Projects',
        'link':'/projects'
      },
      {
        'label':'Music',
        'link':'/music'
      },
      {
        'label':'Contact',
        'link':'/contact'
      }
    ]

    var navigation = Object.keys(choices).map(function(c,i,a){
      return <a key={i} href={choices[i].label}><div key={i} className="choice animated bounceInLeft" style={{animationDelay:(1.5+.2*i)+"s"}}>{choices[i].label}</div></a>
    })

    return (

      <div className="welcome">
          <div className="greeting animated fadeInDownBig">Hi! I'm Mark</div>
          <div className="tagline animated fadeInLeft" style={{animationDelay:"1s"}}>I've been expecting you!</div>
          <div className="choices">{navigation}</div>
      </div>
    );
  }
}



export default Welcome;
