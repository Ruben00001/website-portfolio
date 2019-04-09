import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function AboutSpielTitle() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: 160 }}
      to={{  opacity: 1, marginTop: 150 }}
      config={{ delay: 400, duration: 600 }}
    >
      { props => (
        <div style={props} className="about__image--headshot">
          <img src={require('../../img/headshotEditedStencilBorder2.png')} alt="headshot of Ruben"></img>
        </div>  
      )}
    </Spring>
  )
}


















