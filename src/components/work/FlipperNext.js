import React from 'react'
import { Spring } from 'react-spring/renderprops';

export default function FlipperNext() {
  return (
    <Spring
      from={{ opacity: 0, marginRight: -20 }}
      to={{ opacity: 1, marginRight: 0 }}
      config={{ delay: 650, duration: 1000 }}
    >
      { props => (
        <p style={props}  className="flipper__next">next</p>
      )}
    </Spring>
  
  )
}
