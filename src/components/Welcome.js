import React from 'react';
import Contact from './Contact';
import catvatar from '../images/catvatar.png';
import $ from 'jquery';
//import animateScroll from 'jquery-animate-scroll';

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }


  componentDidMount(){
      // Add smooth scrolling to all links
      $(".section-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top -10
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    };


  render() {

    var choices = [
      {
        'label':'About Me',
        'link':'#about'
      },
      {
        'label':'Side Projects',
        'link':'#projects'
      },
      {
        'label':'Music',
        'link':'#music'
      },
      {
        'label':'Photography',
        'link':'#photography'
      },
      {
        'label':'Contact',
        'link':'#contact'
      },
    ]

    var navigation = Object.keys(choices).map(function(c,i,a){
      return <a key={i} className="section-link" href={choices[i].link}><div key={i} className="choice animated bounceInLeft" style={{animationDelay:(1.5+.2*i)+"s"}}>{choices[i].label}</div></a>
    })

    return (

      <div className="welcome">
        <div className="left">
          <div className="greeting animated fadeInDownBig">Hi! I'm Mark</div>
          <div className="tagline animated fadeInLeft" style={{animationDelay:"1s"}}>I've been expecting you!</div>
          <div className="choices">{navigation}</div>
        </div>
      </div>
    );
  }
}



export default Welcome;
