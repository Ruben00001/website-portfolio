import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { faHtml5, faCss3, faSass, faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AboutSpielTitle() {
  return (
    <Spring
      from={{ opacity: 0, marginRight: 50 }}
      to={{  opacity: 1, marginRight: 70 }}
      config={{ delay: 400, duration: 600 }}
    >
      { props => (
        <div style={props} className="about__languages">
          <div className="about__title">
            <h1>Languages & Frameworks</h1>
            <div></div>
          </div>
          <div className="about__languages__icons">
            <div>
              <FontAwesomeIcon className="about__languages__icons__icon" icon={faHtml5} />
              <h3>HTML5</h3>
            </div>
            <div>
              <FontAwesomeIcon className="about__languages__icons__icon" icon={faCss3} />
              <h3>CSS3</h3>
            </div>
            <div>
              <FontAwesomeIcon className="about__languages__icons__icon" icon={faSass} />
              <h3>SASS</h3>
            </div>
            <div>
              <FontAwesomeIcon className="about__languages__icons__icon" icon={faJs} />
              <h3>JScript</h3>
            </div>
            <div>
              <FontAwesomeIcon className="about__languages__icons__icon" icon={faReact} />
              <h3>React</h3>
            </div>
            <div>
              <FontAwesomeIcon className="about__languages__icons__icon" icon={faNodeJs} />
              <h3>NodeJS</h3>
            </div>
          </div>
        </div> 
      )}
    </Spring>
  )
}


















