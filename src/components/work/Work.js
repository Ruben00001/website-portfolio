import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Transition, animated, Spring } from 'react-spring/renderprops'
import Logo from '../pageLinks/Logo';
import ProjectsLink from '../pageLinks/ProjectsLink';
import AboutLink from '../pageLinks/AboutLink';
import Flipper from './Flipper'
import HeaderDecoration from './HeaderDecoration'
import Flipper2 from './Flipper2';


class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      controlLeaveAnimation: true,
      paginationActive: 'black',
      paginationInActive: 'rgb(192, 192, 192)',
      project: 1,
      project1: true,
      top: '0%',
      height: '100%',
      opacity: 1,
      titleMarginTop: 0,
      pageCounterBackground: 20,
      delayImage: 0,
      delayTitle: 380,
      delaySubTitle: 480
    }

    this.routePage1 = this.routePage1.bind(this);
    this.routePage3 = this.routePage3.bind(this);
    this.pageUp = this.pageUp.bind(this);
    this.pageDown = this.pageDown.bind(this);
    this.onWheelW = this.onWheelW.bind(this);
  }

  routePage1 = () => {
    setTimeout(() => {this.props.history.push('/')}, 600)
  }

  routePage3 = () => {
    setTimeout(() => {this.props.history.push('/about')}, 600)
  }

  pageUp = () => {
    this.setState({ 
      show: false 
    }); 
    this.routePage1()
  }

  pageDown = () => {
    this.setState({ 
      show: false
    }); 
    this.routePage3();
  }

  onWheelW = e => {
    if (e.deltaY < 0) {
      this.pageUp();
    }
    if (e.deltaY > 0) {
      this.pageDown();
    }
  }

  triggerProject1 = () => {
    this.setState({
      project1: false
    });
    setTimeout(() => {
      this.changeProject()
    }, 2000)
  }

  changeProject = () => {
    this.setState({
      project: this.state.project + 1
    })
  }

  componentDidMount() {
    setTimeout(() => {
      // window.addEventListener('wheel', this.onWheelW);
      // console.log('wheel event added');      
    }, 500);
    console.log('Work page mounted...');
  }

  componentWillUnmount() {
    // window.addEventListener('wheel', this.onWheelW);
    // console.log('work wheel event removed');
  }

  setAnimationLeaveValues = () => {
    this.setState({
      height: '0%',
      opacity: 0,
      titleMarginTop: -20,
      delayImage: 400,
      delayTitle: 600,
      delaySubTitle: 200
    });
    setTimeout(() => {
      this.setState({
        height: '100%',
        opacity: 1,
        titleMarginTop: 0,
        project: this.state.project === 5 ? 1 : this.state.project + 1,
        pageCounterBackground: this.state.project === 5 ? 20 : this.state.pageCounterBackground + 20,
      });
    }, 1200)
  }

  routeHome = () => {
    this.setState({ 
      controlLeaveAnimation: false,
    });  
    setTimeout(() => {this.props.history.push('/')}, 600)
  }

  routeAbout = () => {
    this.setState({ 
      controlLeaveAnimation: false,
    });  
    setTimeout(() => {this.props.history.push('/about')}, 600)
  }

  render() {
    return (
      <div className="work__container">
        <Logo route={this.routeHome} />
        <ProjectsLink />
        <AboutLink route={this.routeAbout} />
        <Transition
          native
          items = { this.state.controlLeaveAnimation }
          from={{ opacity: 1, marginTop: 0 }}
          enter={{ opacity: 1, marginTop: 0 }}
          leave={{ opacity: 0, marginTop: -300 }}
          config={{ mass: 5, tension: 150, friction: 14 }}
        >
          {show => show && (props => (
            <animated.div style={props} className="flipper2" onWheel={this.setAnimationLeaveValues}>
              { this.state.project === 1 &&
                <div className="flipper2__image">
                  <Spring
                    from={{ top: '100%', width: '100%', height: '0%' }}
                    to={{ top: this.state.top, width: '100%', height: this.state.height, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayImage ,mass: 6, tension: 350, friction: 80 }}>
                    { props => (
                      <img style={props} src={require('../../img/XX__Amy3.png')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--1">Amy's <br/> Jewellery</h2>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delaySubTitle, duration: 300 }}>
                    { props => (
                      <h3 style={props} className="flipper2__sub-title">website ---</h3>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: 480, duration: 300 }}>
                    { props => (
                      <div style={props} className="flipper2__links">
                        <a href="https://github.com/ruben00001/amy-jewellery--website" target="__blank">CODE</a>
                        <a href="https://cryptic-plateau-33978.herokuapp.com/" target="__blank">LAUNCH</a>
                      </div>
                    )}
                  </Spring>
                </div>
              }
              { this.state.project === 2 && 
                <div className="flipper2__image">
                  <Spring
                    from={{ top: '100%', width: '100%', height: '0%' }}
                    to={{ top: this.state.top, width: '100%', height: this.state.height, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayImage ,mass: 6, tension: 350, friction: 80 }}>
                    { props => (
                      <img style={props} src={require('../../img/GentleEnergy-Complete.JPG')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--2">Gentle <br/> Energy</h2>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delaySubTitle, duration: 300 }}>
                    { props => (
                      <h3 style={props} className="flipper2__sub-title">website ---</h3>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: 480, duration: 300 }}>
                    { props => (
                      <div style={props} className="flipper2__links">
                        <a href="https://github.com/ruben00001/gentle-energy--website" target="__blank">CODE</a>
                        <a href="http://gentleenergy.co.uk/" target="__blank">LAUNCH</a>
                      </div>
                    )}
                  </Spring>
                </div>
              }
              { this.state.project === 3 && 
                <div className="flipper2__image">
                  <Spring
                    from={{ top: '100%', width: '100%', height: '0%' }}
                    to={{ top: this.state.top, width: '100%', height: this.state.height, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayImage ,mass: 6, tension: 350, friction: 80 }}>
                    { props => (
                      <img style={props} src={require('../../img/MountApp-Complete.JPG')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--3">MountApp</h2>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delaySubTitle, duration: 300 }}>
                    { props => (
                      <h3 style={props} className="flipper2__sub-title">project ---</h3>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: 480, duration: 300 }}>
                    { props => (
                      <div style={props} className="flipper2__links">
                        <a href="https://github.com/ruben00001/nodejs-mountApp--project" target="__blank">CODE</a>
                        <a href="https://nameless-tor-14744.herokuapp.com/" target="__blank">LAUNCH</a>
                      </div>
                    )}
                  </Spring>
                </div>
              }
              { this.state.project === 4 && 
                <div className="flipper2__image">
                  <Spring
                    from={{ top: '100%', width: '100%', height: '0%' }}
                    to={{ top: this.state.top, width: '100%', height: this.state.height, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayImage ,mass: 6, tension: 350, friction: 80 }}>
                    { props => (
                      <img style={props} src={require('../../img/Calculator-complete.JPG')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--4">Calculator</h2>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delaySubTitle, duration: 300 }}>
                    { props => (
                      <h3 style={props} className="flipper2__sub-title">project ---</h3>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: 480, duration: 300 }}>
                    { props => (
                      <div style={props} className="flipper2__links">
                        <a href="https://github.com/ruben00001/js-calulator--project" target="__blank">CODE</a>
                        <a href="https://ruben00001.github.io/js-calulator--project/" target="__blank">LAUNCH</a>
                      </div>
                    )}
                  </Spring>
                </div>
              }
              { this.state.project === 5 && 
                <div className="flipper2__image">
                  <Spring
                    from={{ top: '100%', width: '100%', height: '0%' }}
                    to={{ top: this.state.top, width: '100%', height: this.state.height, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayImage ,mass: 6, tension: 350, friction: 80 }}>
                    { props => (
                      <img style={props} src={require('../../img/WeatherAPI-complete.JPG')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--5">Weather<br />API</h2>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delaySubTitle, duration: 300 }}>
                    { props => (
                      <h3 style={props} className="flipper2__sub-title">project ---</h3>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: 480, duration: 300 }}>
                    { props => (
                      <div style={props} className="flipper2__links">
                        <a href="https://github.com/ruben00001/react-weather-api--project" target="__blank">CODE</a>
                        <a href="https://enigmatic-chamber-48968.herokuapp.com/" target="__blank">LAUNCH</a>
                      </div>
                    )}
                  </Spring>
                </div>
              }
              <div className="page-counter">
                <div className="page-counter__number">0{this.state.project}.</div>
                <Spring
                  from={{  }}
                  to={{ background: `linear-gradient(to bottom, black, black ${this.state.pageCounterBackground}%, rgb(206, 206, 206) ${this.state.pageCounterBackground}%, rgb(206, 206, 206) 100%)` }}
                >
                  { props => (
                    <div style={props} className="page-counter__line"></div>
                  )}
                </Spring>
                <div className="page-counter__number">05.</div>
              </div>
            </animated.div> 
          ))}
        </Transition>
      </div>
    )
  }
}

const WorkWithRouter = withRouter(Work)
export default WorkWithRouter;

// return (
//   <Transition
//   native
//   items = { this.state.show }
//   from={{ opacity: 1, marginTop: 0 }}
//   enter={{ opacity: 1, marginTop: 0 }}
//   leave={{ opacity: 0, marginTop: 0 }}
// >
//   {show => show && (props => (
//     <animated.div style={props}>
//       <div className='work__container'>
//         {/* <HeaderDecoration />
//         <div className="flipper__container">
//           <Flipper />
//         </div> */}
//         {/* <Flipper2 /> */}
//         <div onClick={this.triggerProject1} className="flipper2">
//           { this.state.project === 1 &&
//               <div className="flipper2__image">
//                   <Transition
//                     native
//                     items={this.state.project1}
//                     from={{ top: '100%', width: '100%', height: '0%' }}
//                     enter={{ top: '0%', width: '100%', height: '100%', opacity: 1 }}
//                     leave={{ top: '0%', width: '100%', height: '0%', opacity: 0 }}
//                     config={{ mass: 6, tension: 350, friction: 80 }}
//                   >
//                     {show => show && (props => (
//                       <animated.img style={props} src={require('../../img/XX__Amy3.png')} alt=""/>
//                     ))}
//                   </Transition>
//                   <Spring
//                     from={{ opacity: 0 }}
//                     to={{ opacity: 1 }}
//                     config={{ duration: 6000 }}
//                     >
//                     { props => (
//                       <h2 style={props} className="flipper2__title">Amy's <br/> Jewellery</h2>
//                     )}
//                   </Spring>
//               </div>    
//           }
//           { this.state.project === 2 &&
//             <Transition
//               native
//               items={true}
//               from={{ opacity: 1 }}
//               enter={{ opacity: 1 }}
//               leave={{ opacity: 1 }}
//               config={{duration: 200 }}
//             >
//               {show => show && (props => (
//                 <animated.div style={props}>
//                   <div className="flipper2__image">
//                     <Transition
//                       native
//                       items={true}
//                       from={{ top: '100%', width: '100%', height: '0%' }}
//                       enter={{ top: '0%', width: '100%', height: '100%' }}
//                       leave={{ top: '0%', width: '100%', height: '0%' }}
//                       config={{ mass: 1, tension: 280, friction: 60 }}
//                     >
//                       {show => show && (props => (
//                         <animated.img style={props} src={require('../../img/Calculator.JPG')} alt=""/>
//                       ))}
//                     </Transition>
//                   </div>    
//                 </animated.div>
//               ))}
//             </Transition>
//           }
          
//         </div>
//       </div>        
//     </animated.div>
//   ))}
// </Transition>
// )