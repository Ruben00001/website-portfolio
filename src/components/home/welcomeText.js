import React, { Component } from 'react';
import FirstLine from './welcome-text/FirstLine';
import SecondLineA from './welcome-text/SecondLineA';
import SecondLineB from './welcome-text/SecondLineB';


class WelcomeText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchLine: true
    }

    this.switchLine = this.switchLine.bind(this);
  }

  switchLine = () => {
    setInterval(() => { this.setState({ switchLine: !this.state.switchLine }) }, 6000);
  }

  componentDidMount() {
    this.switchLine();
  }

  componentWillUnmount() {
    this.switchLine();
  }

  render() {
    
    return (
      <div className="welcome-text">
        < FirstLine />
        {this.state.switchLine && 
            <div style={{marginLeft: '235px'}} className="welcome-text__second-line">
              <SecondLineA />  
            </div>
        }
        {!this.state.switchLine && 
            <div style={{marginLeft: '70px'}} className="welcome-text__second-line">
              <SecondLineB />
            </div>
        }
      </div>
    )
  }
}


export default WelcomeText;
