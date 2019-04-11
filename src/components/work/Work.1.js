import React, { Component } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import ProjectFlipper from './ProjectFlipper'


class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reRender: false,
      ImgNumber: 0,
      animateImage: false,
      xx: {marginTop: 100},
      yy: {backgroundImage: `url(${this.bgImageX})` }
    }
  }

  nextImg = () => {
    this.setState({
      ImgNumber: this.state.ImgNumber + 1,
      reRender: false
    })
  }

  // reRender = () => {
  //   this.setState({
  //     reRender: true
  //   });
    
  //   setInterval(() => {this.nextImg()}, 600)
  // }

  flipperImages = [
    require('../../img/Amy.JPG'),
    require('../../img/mountapp.JPG'),
  ]

  bgImageX = this.flipperImages[0]


  render() {

    const bgImage = this.flipperImages[0]
    const bgImage2 = this.flipperImages[1]

    return (
      <div className='work__container'>
        <Transition
          native
          items={ true }
          from={{ backgroundImage: `url(${bgImage})` }}
          enter={{ backgroundImage: `url(${bgImage2})` }}
          leave={{ backgroundImage: `url(${bgImage2})` }}
        >
          {show => show && (props => (
            <animated.div className='flipper__container'
              style={{ ...props, backgroundImage: `url(${bgImage})` }}
              onClick={this.nextImg} 
            >
              <ProjectFlipper />
            </animated.div>
          ))}

        </Transition>
      </div>
    )
  }
}



export default Work;

// style={{backgroundImage: 'src: require("../../img/Amy.JPG")'}}