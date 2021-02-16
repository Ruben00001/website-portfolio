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
        <FirstLine />
        {this.state.switchLine && 
            <div className="welcome-text__second-line welcome-text__second-line--a">
              <SecondLineA />  
            </div>
        }
        {!this.state.switchLine && 
            <div className="welcome-text__second-line welcome-text__second-line--b">
              <SecondLineB />
            </div>
        }
      </div>
    )
  }
}


export default WelcomeText;
