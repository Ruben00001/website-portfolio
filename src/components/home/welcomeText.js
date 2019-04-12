import React, { Component } from 'react';
import FirstLine from './FirstLine';
import SecondLineA from './SecondLineA';
import SecondLineB from './SecondLineB';


class WelcomeText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchLine: 1
    }
  }

  render() {
    if (this.state.switchLine === 1) {
      setTimeout(() => { this.setState({ switchLine: 2 }) }, 7000);
    }
    
    return (
      <div className="welcome-text">
        < FirstLine />
        {this.state.switchLine===1 && 
            <div style={{marginLeft: '130px'}} className="welcome-text__second-line">
              <SecondLineA />  
            </div>
        }
        {this.state.switchLine===2 && 
            <div style={{marginLeft: '40px'}} className="welcome-text__second-line">
              <SecondLineB />
            </div>
        }
      </div>
    )
  }
}


export default WelcomeText;
