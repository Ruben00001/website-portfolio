import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block3() {
  const props = useSpring({
    from: { left: '0%', width: '0%', height: '100%', background: '#4A40FD', marginTop: 20 },
    to: async next => {
        await next({  left: '0%', width: '100%', height: '100%', background: '#4A40FD', marginTop: 0 })
        await next({  left: '100%', width: '0%', height: '100%', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', background: '#4A40FD' })
    },
    config: { duration: 400 }
  })
  return (
    <div className="animated-block animated-block--home-3">
      <animated.div className="script-box" style={props} />
    </div>
  )
}
