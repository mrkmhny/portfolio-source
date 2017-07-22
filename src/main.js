<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import './style.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className='container'>
        <Welcome />
      </div>
    )
  }
}

export default App;
=======
console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './style.scss'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
>>>>>>> origin/master
