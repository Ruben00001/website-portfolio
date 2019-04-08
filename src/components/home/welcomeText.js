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
      setTimeout(() => { this.setState({ switchLine: 2 }) }, 5000);
    }
    
    return (
      <div className="welcome-text">
        < FirstLine />
        {this.state.switchLine===1 && 
            <div style={{ marginLeft: 120 }} className="xx">
              < SecondLineA />  
            </div>
        }
        {this.state.switchLine===2 && 
            <div style={{ marginLeft: 80 }} className="xx">
              < SecondLineB />
            </div>
        }
      </div>
    )
  }
}


export default WelcomeText;
