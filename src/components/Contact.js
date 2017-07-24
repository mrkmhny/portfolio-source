import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (

      <div className="page contact">
        <h1>Contact</h1>

        <p>Email: mark.r.mahoney@gmail.com</p>
        <p>Github: mrkmhny</p>
        <p>LinkedIn: linked.in/mrmahoney</p>
      </div>
    );
  }
}

export default Contact;
