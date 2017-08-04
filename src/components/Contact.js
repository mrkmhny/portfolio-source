import React from 'react';
import Clipboard from 'clipboard';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }


  componentDidMount() {
    // Allow for one-click copy-to-clipboard
    // Implement this later
    /*
    var clipboard = new Clipboard('.clipboard');

    clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
    });
    */
  }

  render() {
    return (

      <div className="page contact animated fadeIn" id="contact">
        <h1>Contact</h1>



        <a href="mailto:mark.r.mahoney@gmail.com">
          <p className="clipboard" data-clipboard-target="#email">
            <i className="fa fa-fw fa-envelope"/>
            <span id="email">mark.r.mahoney@gmail.com</span>
          </p>
        </a>
        <a href="http://github.com/mrkmhny">
          <p><i className="fa fa-fw fa-github"/>mrkmhny</p>
        </a>
        <a href="http://linkedin.com/in/mrmahoney">
          <p><i className="fa fa-fw fa-linkedin-square"/>linkedin.com/in/MRMahoney</p>
        </a>
      </div>
    );
  }
}

export default Contact;
