import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Transition, animated } from 'react-spring/renderprops';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

import Logo from '../pageLinks/Logo';
import ProjectsLink from '../pageLinks/ProjectsLink';
import AboutLink from '../pageLinks/AboutLink';

class Page2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlLeaveAnimation: true,
    };

    this.routeHome = this.routeHome.bind(this);
    this.routeProjects = this.routeProjects.bind(this);
  }

  routeHome = () => {
    this.setState({
      controlLeaveAnimation: false,
    });
    setTimeout(() => {
      this.props.history.push('/');
    }, 600);
  };

  routeProjects = () => {
    this.setState({
      controlLeaveAnimation: false,
    });
    setTimeout(() => {
      this.props.history.push('/projects');
    }, 600);
  };

  render() {
    return (
      <ReactScrollWheelHandler upHandler={() => this.routeProjects()}>
        <div className="about__container">
          <Logo route={this.routeHome} />
          <ProjectsLink route={this.routeProjects} />
          <AboutLink />
          <Transition
            native
            items={this.state.controlLeaveAnimation}
            from={{ opacity: 0, marginTop: 20 }}
            enter={{ opacity: 1, marginTop: 0 }}
            leave={{ opacity: 0, marginTop: -300 }}
            config={{ mass: 5, tension: 150, friction: 14 }}
          >
            {(show) =>
              show &&
              ((props) => (
                <animated.div className="about__container--top" style={props}>
                  <div className="about__spiel">
                    <p className="about__spiel__content">
                      Hi and welcome to VirtualWorks, a London based web company
                      with a passion for creative, bespoke design.
                    </p>
                    <p className="about__spiel__content">
                      <br />
                      We design and build beautiful and highly performative
                      sites. We also provide solutions for all platforms
                      including popular CMSs like Wordpress and Squarespace.
                    </p>
                    <div className="about__spiel__link about__spiel__link--email">
                      <p>Get in touch:</p>
                      <p>ruben@virtualworks.io</p>
                    </div>
                  </div>
                </animated.div>
              ))
            }
          </Transition>
        </div>
      </ReactScrollWheelHandler>
    );
  }
}

const Page2WithRouter = withRouter(Page2);
export default Page2WithRouter;
