import React from 'react'
import { useSpring, animated } from 'react-spring'


export default function Block1() {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '0%', height: '0%', background: '#51BDFD' },
    to: async next => {
        await next({ width: '100%', height: '100%', color: 'red', background: '#51BDFD' })
        await next({ width: '100%', color: 'blue', background: '#51BDFD' })
        await next({ width: '100%', color: 'red', background: '#51BDFD' })
        await next({ width: '100%', color: 'blue', background: '#51BDFD' })
        await next({ width: '100%', color: 'red', background: '#51BDFD' })
        await next({ width: '100%', color: 'blue', background: '#51BDFD' })
        await next({ width: '100%', color: 'red', background: '#51BDFD' })
        await next({ width: '100%', color: 'blue', background: '#51BDFD' })
        await next({ width: '100%', color: 'red', background: '#51BDFD' })
        await next({ width: '100%', color: 'blue', background: '#51BDFD' })
        await next({ width: '100%', color: 'red', background: '#51BDFD' })
        await next({ width: '100%', height: '30%', color: 'blue', background: '#16E7AF' })
        await next({ width: '400%', height: '30%', color: 'red', background: '#16E7AF' })
    },
    config: { duration: 400 }
  })
  return <animated.div className="script-box" style={props} />
}
