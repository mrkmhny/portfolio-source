import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sun from './components/Sun';
import Music from './components/Music';
import Photography from './components/Photography';
import './style.scss'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "page": "welcome"
    }
  }
  render(){
    return(
      <div className='container'>
        <Welcome />
        <BrowserRouter>
            <Route path="/a" component={Welcome}/>
        </BrowserRouter>
        <About className="animated fadeInRight"/>
        <Projects />
        <Music />
        <Photography />
        <Contact />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('mount')
  );
});


export default App;
