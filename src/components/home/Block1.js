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




















// import React from 'react'
// import { useSpring, animated } from 'react-spring'


// export default function Block1() {
//   const props = useSpring({
//     from: { opacity: 0, height: 0 },
//     to: async next => {
//       while (1) {
//         await next({ opacity: 1, background: 'blue', width: 20, height: 60, position: 'absolute', top: 200, left: 200 })
//       }
//     }
//   })
//   return (
//     <animated.div className={Block1Style} />

//     // <Spring
//     //       from={{ opacity: 0, height: 0 }}
//     //       to={{ opacity: 1, background: 'blue', width: 20, height: 60, position: 'absolute', top: 200, left: 200 }}
//     //       config={{ duration: 300 }}
//     //     >
//     //     { props => (
//     //       <div style={props}>
//     //         {/* <div style={Block1Style}>
//     //         </div> */}
//     //       </div>
//     //     )}
//     //   </Spring>
//   )
// }

// const Block1Style = {
//   width: 40,
//   height: 90,
//   background: 'blue',
//   position: 'absolute',
//   top: 200,
//   left: -200
// }