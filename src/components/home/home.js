import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Transition, animated } from 'react-spring/renderprops';
import Logo from '../pageLinks/Logo';
import ProjectsLink from '../pageLinks/ProjectsLink';
import AboutLink from '../pageLinks/AboutLink';
import WelcomeText from './welcomeText';
import Blocks from './Blocks'


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlLeaveAnimation: true, // triggers transition leave animation
    }

    this.routeProjects = this.routeProjects.bind(this);
    this.routeAbout = this.routeAbout.bind(this);
  }

  routeProjects = () => {
    this.setState({ 
      controlLeaveAnimation: false,
    });  
    setTimeout(() => {this.props.history.push('/work')}, 600)
  }

  routeAbout = () => {
    this.setState({ 
      controlLeaveAnimation: false,
    });  
    setTimeout(() => {this.props.history.push('/about')}, 600)
  }

  render() {
    return (
      <div className="first-page-container">
        <Logo />
        <ProjectsLink route={this.routeProjects} />
        <AboutLink route={this.routeAbout} />
        <Transition
          native
          items = { this.state.controlLeaveAnimation }
          from={{ opacity: 1, marginTop: 0 }}
          enter={{ opacity: 1, marginTop: 0 }}
          leave={{ opacity: 0, marginTop: -600 }}
          config={{ mass: 5, tension: 150, friction: 14 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <WelcomeText />
              <Blocks />           
            </animated.div>
          ))}
        </Transition>
      </div>   
    );
  }
}


const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;
