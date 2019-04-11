import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Spring } from 'react-spring/renderprops';
import FlipperNext from './FlipperNext'

const flipperImages = [
  require('../../img/Amy.JPG'),
  require('../../img/mountapp.JPG'),
  require('../../img/Amy.JPG'),
  require('../../img/mountapp.JPG'),
  require('../../img/Amy.JPG'),
  require('../../img/mountapp.JPG'),
]

const pages = [
  ({ style }) => 
    <animated.div style={{ ...style }}>
      <img src={flipperImages[0]} className="flipper__image" alt="" />
      <div className="flipper__info__container">
        <h1 className="flipper__title">Amy's Jewellery</h1>
        <div className="flipper__sub-title">
          <div></div>
          <h2>website</h2>
        </div>
      </div>
      <div className="flipper__links">
        <a href="https://github.com/Ruben00001/website-amys-jewellery" target="__blank"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a href="https://cryptic-plateau-33978.herokuapp.com/" target="__blank"><FontAwesomeIcon icon={faPlay} /></a>
      </div>
    </animated.div>,
  ({ style }) => 
    <animated.div style={{ ...style }}>
      <img src={flipperImages[1]} className="flipper__image" alt="" />
      <div className="flipper__info__container">
        <h1 className="flipper__title">MountApp</h1>
        <div className="flipper__sub-title">
          <div></div>
          <h2>project</h2>
        </div>
      </div>
      <div className="flipper__links">
        <a href="https://github.com/Ruben00001/node-mount-app" target="__blank"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a href="https://nameless-tor-14744.herokuapp.com/" target="__blank"><FontAwesomeIcon icon={faPlay} /></a>
      </div>
    </animated.div>
]




export default function Flipper() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 2), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-30%,0,0)' },
    config: {  mass: 1, tension: 280, friction: 60 }
  })


  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
        <Spring
          from={{ opacity: 0, marginRight: -20 }}
          to={{ opacity: 1, marginRight: 0 }}
          reset={true}
          config={{ delay: 650, duration: 900 }}
        >
        { props => (
          <p style={props} onClick={onClick} className="flipper__next">next</p>  
        )}
        </Spring>
         
    </div>
  )
}


