import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/About'
import Work from './components/work/Work'



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <Home />} />
          <Route path="/work" render={() => <Work />} />
          <Route path="/about" render={() => <About />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
