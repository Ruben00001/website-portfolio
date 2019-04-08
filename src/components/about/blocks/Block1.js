import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block1() {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightblue' },
    to: async next => {
        await next({ width: '100%', height: '100%', background: 'lightblue' })
        await next({ width: '100%', height: '99%', background: 'lightblue' })
        await next({ width: '100%', height: '100%', background: 'lightblue' })
        await next({ width: '100%', height: '99%', background: 'lightblue' })
        await next({ width: '100%', height: '100%', background: 'lightblue' })
        await next({ width: '100%', height: '99%', background: 'lightblue' })
        await next({ width: '100%', height: '100%', background: 'lightblue' })
        await next({ width: '100%', height: '99%', background: 'lightblue' })
        await next({ width: '100%', height: '100%', background: 'lightblue' })
        await next({ width: '100%', height: '99%', background: 'lightblue' })
        await next({ width: '100%', height: '100%', background: 'lightblue' })
        await next({ width: '100%', height: '30%', background: 'lightblue' })
        await next({ width: '400%', height: '30%', background: 'lightgreen' })
    },
    config: { duration: 400 }
  })
  return <animated.div className="script-box" style={props} />
}
