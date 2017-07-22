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

      <div class="page">
        <div className="greeting">Hi! Im Mark</div>

      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Counterzzzzzzzz: {this.state.count}
      </button>
      </div>
    );
  }
}



export default Welcome;
