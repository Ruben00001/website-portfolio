import React from 'react';
import { Spring } from 'react-spring/renderprops';import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AboutSpielIcons() {
  return (
    <Spring
      from={{ opacity: 0}}
      to={{ opacity: 1}}
      config={{ delay: 700, duration: 500 }}
    >
      { props => (
        <div style={props} className="about__spiel__icons">
          <a href="https://github.com/Ruben00001" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/ruben-seveelaventhan-0768b5167/" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      )}
    </Spring>
  )
}


