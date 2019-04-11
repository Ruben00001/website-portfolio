import React from 'react';
import { useSpring, animated } from 'react-spring'


export default function ProjectFlipper() {
  const animationProps = useSpring({
    from: { opacity: 1, top: '100%', width: '100%', height: '0%', background: 'black' },
    to: async next => {
        await next({ top: '0%', width: '100%', height: '100%' })
        await next({ top: '0%', width: '100%', height: '0%' })
    },
    config: { duration: 600, tension: 100 },
    // reset:  true
  })

  return (
    <animated.div style={animationProps} className="flipper__wiper script-box"></animated.div>
  )
  
}

















// const pages = [
//   ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]

// export default function ProjectFlipper() {
//   const [index, set] = useState(0)
//   const onClick = useCallback(() => set(state => (state + 1) % 3), [])
//   const transitions = useTransition(index, p => p, {
//     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//   })
//   return (
//     <div className="simple-trans-main" onClick={onClick}>
//       {transitions.map(({ item, props, key }) => {
//         const Page = pages[item]
//         return <Page key={key} style={props} />
//       })}
//     </div>
//   )
// }


