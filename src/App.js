import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/home/home'
import Page2 from './components/about/Page2'



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
          <Route path="/page2" render={() => <Page2 />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
