import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function AboutSpielContent() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: 10 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 100, duration: 500 }}
    >
      { props => (
        <p style={props} className="about__spiel__content">I’m Ruben Seveelaventhan a web developer with an interest in design and creative problem solving, currently living in London. I started coding in 2018 following diverse careers in the education and construction sectors amongst others.</p>
      )}
    </Spring>
  )
}


