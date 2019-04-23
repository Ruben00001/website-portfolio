import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Transition, animated } from 'react-spring/renderprops';
import Logo from '../pageLinks/Logo';
import ProjectsLink from '../pageLinks/ProjectsLink';
import AboutLink from '../pageLinks/AboutLink';
import WelcomeText from './welcomeText';
import Block1 from './blocks/Block1'
import Block2 from './blocks/Block2'
import Block3 from './blocks/Block3'
import Block4 from './blocks/Block4'
import Block5 from './blocks/Block5'
import Block6 from './blocks/Block6'
import Block7 from './blocks/Block7'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page1: true,
    }

    this.routeProjects = this.routeProjects.bind(this);
    this.routeAbout = this.routeAbout.bind(this);
  }

  routeProjects = () => {
    this.setState({ 
      page1: false,
    });  
    setTimeout(() => {this.props.history.push('/work')}, 600)
  }

  routeAbout = () => {
    this.setState({ 
      page1: false,
    });  
    setTimeout(() => {this.props.history.push('/about')}, 600)
  }

  render() {
    return (
      <Transition
        native
        items = { this.state.page1 }
        from={{ opacity: 1, marginTop: 0 }}
        enter={{ opacity: 1, marginTop: 0 }}
        leave={{ opacity: 0, marginTop: -600 }}
        config={{ mass: 5, tension: 150, friction: 14 }}
      >
        {show => show && (props => (
          <animated.div style={props}>
            <div className="first-page-container">
              <Logo />
              <ProjectsLink route={this.routeProjects} />
              <AboutLink route={this.routeAbout} />
              <WelcomeText />
              <Block1 />
              <Block2 />
              <Block3 />
              <Block4 />
              <Block5 />
              <Block6 />
              <Block7 />
            </div>          
          </animated.div>
        ))}
      </Transition>
    );
  }
}

const homeLogo = {
  position: 'fixed',
  top: 30,
  left: 30
}

const HomeWithRouter = withRouter(Home);

export default HomeWithRouter;



  // pageDown = () => {
  //   this.setState({ 
  //     page1: false, //triggers the leave animation
  //   });        
  //   this.routePage2()
  // }

  // onWheel = e => {
  //   if (e.deltaY > 0) {
  //     this.pageDown();
  //   }
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     window.addEventListener('wheel', this.onWheel);
  //     console.log('wheel event added');
  //   }, 500);
  //   console.log('Home page mounted...');
  // }

  // componentWillUnmount() {
  //   window.addEventListener('wheel', this.onWheel);
  //   console.log('home wheel event removed');
  // }