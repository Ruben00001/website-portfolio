import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block1() {
  const props = useSpring({
    from: { left: '0%', width: '0%', height: '100%', background: '#44C2FF' },
    to: async next => {
        await next({  left: '0%', width: '100%', height: '100%', background: '#44C2FF' })
        await next({  left: '100%', width: '0%', height: '100%', background: '#44C2FF' })
        await next({  left: '0%', width: '100%', height: '100%', background: '#44C2FF' })
    },
    config: { easing: 2 }
  })
  return <animated.div className="script-box" style={props} />
}
