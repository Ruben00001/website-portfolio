import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops'


class FlipperImageTitle extends Component { 

  render() {
    return (
        <Transition
          native
          items={true}
          from={{ marginLeft: 40 }}
          enter={{ marginLeft: 0 }}
          leave={{ marginLeft: 0, marginTop: 30 }}
          // unique={ true }
          // reset={ true }
          config={{ delay: 1000, duration: 1000 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <h1>{this.props.title}</h1>            
            </animated.div>
          ))}
        </Transition>
    );
  }
}

export default FlipperImageTitle;
