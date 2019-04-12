import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Pagination from './Pagination'


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
      <Spring
        from={{ opacity: 0, marginLeft: 20 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={{ delay: 800, duration: 800 }}
      >
      { props => (
              <div style={props} className="flipper__info__container">
              <h1 className="flipper__title">Amy's Jewellery</h1>
              <div className="flipper__sub-title">
                <div></div>
                <h2>website</h2>
              </div>
            </div>
      )}
    </Spring>
      <div className="flipper__links">
        <a href="https://github.com/Ruben00001/website-amys-jewellery" target="__blank"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a href="https://cryptic-plateau-33978.herokuapp.com/" target="__blank"><FontAwesomeIcon icon={faPlay} /></a>
      </div>
    </animated.div>,
  ({ style }) => 
    <animated.div style={{ ...style }}>
      <img src={flipperImages[1]} className="flipper__image" alt="" />
      <Spring
        from={{ opacity: 0, marginLeft: 20 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={{ delay: 800, duration: 800 }}
      >
      { props => (
      <div style={props} className="flipper__info__container">
      <h1 className="flipper__title">MountApp</h1>
      <div className="flipper__sub-title">
        <div></div>
        <h2>project</h2>
      </div>
    </div>
      )}
    </Spring>
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
  
  const [count, setCount] = useState(2)
  const [color1, setColor1] = useState('black')
  const [color2, setColor2] = useState('rgb(192, 192, 192)')
  const [color3, setColor3] = useState('rgb(192, 192, 192)')
  const [color4, setColor4] = useState('rgb(192, 192, 192)')
  const [color5, setColor5] = useState('rgb(192, 192, 192)')
  const [color6, setColor6] = useState('rgb(192, 192, 192)')
  
  const paginationChangeColor = () => {
    setCount(count + 1);
    if(count === 1) {
      setColor1('black');
      setColor6('rgb(192, 192, 192)')
    }
    if(count === 2) {
      setColor2('black');
      setColor1('rgb(192, 192, 192)')
    }
    if(count === 3) {
      setColor3('black');
      setColor2('rgb(192, 192, 192)')
    }
    if(count === 4) {
      setColor4('black');
      setColor3('rgb(192, 192, 192)')
    }
    if(count === 5) {
      setColor5('black');
      setColor4('rgb(192, 192, 192)')
    }
    if(count === 6) {
      setColor6('black');
      setColor5('rgb(192, 192, 192)')
      setCount(1)
    }
  }


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
          <p style={props} onClick={()=> {onClick(); paginationChangeColor(); }} className="flipper__next">next</p>  
        )}
        </Spring>
        <Pagination 
          color1={{background: color1}} 
          color2={{background: color2}} 
          color3={{background: color3}} 
          color4={{background: color4}} 
          color5={{background: color5}} 
          color6={{background: color6}} 
        />
    </div>
  )
}


