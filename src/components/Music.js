import React from 'react';

class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="page music animated fadeIn" id="music">
        <h1>Music</h1>
        <div className="soundcloud">
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/81254916&amp;color=00cc11&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false"></iframe>
        </div>
      </div>
    );
  }
}



export default Music;
