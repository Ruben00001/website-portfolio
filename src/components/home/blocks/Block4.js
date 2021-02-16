import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block1() {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '100%', height: '0%', background: '#FFD753' },
    to: async next => {
        await next({ top: '0%', width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '10%', color: 'blue', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'blue', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'blue', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'blue', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'blue', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'blue', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'blue', background: '#FFD753' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#FFD753' })
        await next({ width: '100%', height: '0%', color: 'blue', background: '#F22F2D' })
        await next({ width: '100%', height: '0%', color: 'red', background: '#F22F2D' })
        await next({ width: '100%', height: '0%', color: 'blue', background: '#F22F2D' })
        await next({ width: '100%', height: '0%', color: 'red', background: '#F22F2D' })
        await next({ width: '100%', height: '100%', color: 'red', background: '#F22F2D' })
    },
    config: { duration: 400 },
    
  })
  return (
    <div className="animated-block animated-block--home-4">
      <animated.div className="script-box" style={props} />
    </div>
  )
}
