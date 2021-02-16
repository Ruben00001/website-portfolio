import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block2() {
  const props = useSpring({
    from: { left: '100%', width: '0%', height: '100%', background: '#4A40FD', marginTop: 20 },
    to: async next => {
        await next({  left: '0%', width: '100%', height: '100%', background: '#4A40FD', marginTop: 0 })
        await next({  left: '0%', width: '0%', height: '100%', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'red', background: '#4A40FD' })
        await next({  left: '0%', width: '100%', height: '100%', color: 'blue', background: '#54D8BE' })
        await next({  left: '0%', width: '50%', height: '100%', color: 'blue', background: '#54D8BE' })
    },
    config: { duration: 400 }
  })
  return (
    <div className="animated-block animated-block--home-2 animated-block--home-2--a">
      <animated.div className="script-box" style={props} />
    </div>
  )
}
