import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block5() {
  const props = useSpring({
    from: { left: '0%', width: '0%', height: '100%', background: '#44C2FF' },
    to: async next => {
        await next({  left: '0%', width: '100%', height: '100%', background: '#44C2FF' })
        await next({  left: '100%', width: '0%', height: '100%', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: 'white' })
    },
    config: { easing: 2 }
  })
  return (
    <div className="animated-block animated-block--home-5">
      <animated.div className="script-box" style={props} />
    </div>
  )
}
