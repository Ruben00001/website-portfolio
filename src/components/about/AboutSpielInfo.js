import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function AboutSpielContent() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: 20 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ delay: 500, duration: 300 }}
    >
      { props => (
        <div style={props}>
          <div className="about__spiel__info">
            <h2>Status</h2>
            <p>Available for work</p>
          </div>
          <div className="about__spiel__info">
            <h2>Email</h2>
            <p>a.ruben00001@gmail.com</p>
          </div>
        </div>
      )}
    </Spring>
  )
}


