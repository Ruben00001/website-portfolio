import React from 'react';
import { Transition, animated, Spring } from 'react-spring/renderprops';


export default function Flipper2() {
  return (
    <div className="flipper2">
        <Transition
          native
          items={true}
          from={{ opacity: 1 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 1 }}
          config={{duration: 200 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <div className="flipper2__image">
                <Spring
                  from={{ top: '100%', width: '100%', height: '0%' }}
                  to={{ top: '0%', width: '100%', height: '100%' }}
                  config={{ mass: 6, tension: 350, friction: 80 }}
                  >
                  { props => (
                    <img style={props} src={require('../../img/XX__Amy3.png')} alt=""/>
                  )}
                </Spring>
                <h2 className="flipper2__title">Amy's <br/> Jewellery</h2>
                <Spring
                    from={{ opacity: 0, marginTop: 5 }}
                    to={{ opacity: 1, marginTop: 0 }}
                    config={{ duration: 200 }}
                >
                  { props => (
                    <h3 style={props} className="flipper2__sub-title">website ---</h3>
                  )}
                </Spring>
              </div>    
            </animated.div>
          ))}
        </Transition>
    </div>
  )
}



{/* <Transition
native
items={true}
from={{ top: '100%', width: '100%', height: '0%' }}
enter={{ top: '0%', width: '100%', height: '100%' }}
leave={{ top: '0%', width: '100%', height: '0%' }}
config={{ mass: 1, tension: 280, friction: 60 }}
>
{show => show && (props => (

    <animated.img style={props} src={require('../../img/XX__Amy3.png')} alt=""/>

))}
</Transition> */}