import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block1() {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '100%', height: '0%', background: '#FFD753' },
    to: async next => {
        await next({ top: '0%', width: '100%', height: '100%', background: '#FFD753' })
        await next({ top: '0%', width: '100%', height: '100%', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'blue', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '100%', color: 'red', background: '#000000' })
        await next({ top: '100%', width: '100%', height: '20%', color: 'blue', background: '#44C2FF' })
        await next({ top: '100%', width: '600%', height: '20%', color: 'red', background: '#44C2FF' })
        await next({ top: '100%', width: '0%', height: '20%', color: 'blue', background: '#44C2FF' })
    },
    config: { duration: 300 }
  })
  return <animated.div className="script-box" style={props} />
}
