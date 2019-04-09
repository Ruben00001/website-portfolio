import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function AboutSpielTitle() {
  return (
    <Spring
      from={{ opacity: 0, left: '0%', width: '0%', height: '100%' }}
      to={{ opacity: 1, left: '0%', width: '100%', height: '100%' }}
      config={{ duration: 500 }}
    >
      { props => (
        <div style={props} className="about__title">
          <h1>Profile</h1>
          <div></div>
        </div>
      )}
    </Spring>
  )
}


