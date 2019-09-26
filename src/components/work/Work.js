import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Transition, animated, Spring } from 'react-spring/renderprops'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Logo from '../pageLinks/Logo';
import ProjectsLink from '../pageLinks/ProjectsLink';
import AboutLink from '../pageLinks/AboutLink';


class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      controlLeaveAnimation: true,
      project: 1,
      totalProjects: 6,
      top: '0%',
      height: '100%',
      opacity: 1,
      titleMarginTop: 0,
      pageCounterBackground: (100 / 5),
      delayImage: 0,
      delayTitle: 380,
      delaySubTitle: 480,
      wait: false
    }

    this.routeHome = this.routeHome.bind(this);
    this.routeAbout = this.routeAbout.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.setAnimationLeaveValues = this.setAnimationLeaveValues.bind(this);
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

  nextProject = () => {
    setTimeout(() => {
      this.setState({
        height: '100%',
        opacity: 1,
        titleMarginTop: 0,
        project: this.state.project === this.state.totalProjects ? 1 : this.state.project + 1,
        pageCounterBackground: this.state.project === this.state.totalProjects ? (100 / this.state.totalProjects) : this.state.pageCounterBackground + (100 / this.state.totalProjects),
        wait: false
      });
    }, 1200)
  }

  setAnimationLeaveValues = () => {
    if(this.state.wait === false) {
      this.setState({
        height: '0%',
        opacity: 0,
        titleMarginTop: -20,
        delayImage: 400,
        delayTitle: 600,
        delaySubTitle: 200,
        wait: true
      });
      this.nextProject();
    }
  };

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
                      <img style={props} src={require('../../img/pirosphoto.jpg')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--1">Piros <br/> Photography</h2>
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
                        <a href="https://github.com/ruben00001/website__piroska-photography_frontend" target="__blank">CODE</a>
                        <a href="http://pirosphotography.co.uk/" target="__blank">LAUNCH</a>
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
                      <img style={props} src={require('../../img/XX__Amy3.png')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--2">Amy's <br/> Jewellery</h2>
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
                        <a href="https://github.com/ruben00001/website__amy-jewellery" target="__blank">CODE</a>
                        <a href="https://amyrodriguez.art/" target="__blank">LAUNCH</a>
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
                      <img style={props} src={require('../../img/GentleEnergy-Complete.JPG')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--3">Gentle <br/> Energy</h2>
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
                        <a href="https://github.com/ruben00001/website__gentle-energy" target="__blank">CODE</a>
                        <a href="http://gentleenergy.co.uk/" target="__blank">LAUNCH</a>
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
                      <img style={props} src={require('../../img/MountApp-Complete.JPG')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--4">MountApp</h2>
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
                        <a href="https://github.com/ruben00001/NodeJS__mountain-app" target="__blank">CODE</a>
                        <a href="https://nameless-tor-14744.herokuapp.com/" target="__blank">LAUNCH</a>
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
                      <img style={props} src={require('../../img/Calculator-complete.JPG')} alt=""/>
                    )}
                  </Spring>
                  <Spring
                    from={{ marginTop: 13, opacity: 0 }}
                    to={{ marginTop: this.state.titleMarginTop, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayTitle, duration: 300 }}>
                    { props => (
                      <h2 style={props} className="flipper2__title flipper2__title--5">Calculator</h2>
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
                        <a href="https://github.com/ruben00001/JavaScript__Calculator" target="__blank">CODE</a>
                        <a href="https://ruben00001.github.io/JavaScript__Calculator/" target="__blank">LAUNCH</a>
                      </div>
                    )}
                  </Spring>
                </div>
              }
              { this.state.project === 6 && 
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
                      <h2 style={props} className="flipper2__title flipper2__title--6">Weather<br />API</h2>
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
                        <a href="https://github.com/ruben00001/React__weather-app" target="__blank">CODE</a>
                        <a href="https://enigmatic-chamber-48968.herokuapp.com/" target="__blank">LAUNCH</a>
                      </div>
                    )}
                  </Spring>
                </div>
              }
              {/* { this.state.project === 6 && 
                <div className="flipper2__image flipper2__image--more-projects">
                  <Spring
                    from={{ top: '100%', width: '100%', height: '0%' }}
                    to={{ top: this.state.top, width: '100%', height: this.state.height, opacity: this.state.opacity }}
                    config={{ delay: this.state.delayImage, mass: 6, tension: 350, friction: 80 }}>
                    { props => (
                      <div style={props} >
                        <p>View More Work</p>                        
                        <p><br />See GitHub</p>                        
                      </div>
                    )}
                  </Spring>
                </div>
              } */}
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
                <div className="page-counter__number">0{this.state.totalProjects}.</div>
              </div>
              <div onClick={this.setAnimationLeaveValues} className="flipper-next-button">
                <p>NEXT PROJECT <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></p>
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