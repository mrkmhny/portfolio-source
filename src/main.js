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
