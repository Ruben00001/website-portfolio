import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function FirstLine() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: 25 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ duration: 1000 }}
    >
      { props => (
        <p style={props} className="welcome-text__first-line">Hi. I'm Ruben.</p>
      )}
    </Spring>
  )
}


