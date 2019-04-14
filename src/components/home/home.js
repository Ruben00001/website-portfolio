import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Transition, animated } from 'react-spring/renderprops';
import WelcomeText from './welcomeText';
import ScrollArrow from './ScrollArrow'
import Block1 from './blocks/Block1'
import Block2 from './blocks/Block2'
import Block3 from './blocks/Block3'
import Block4 from './blocks/Block4'
import Block5 from './blocks/Block5'
import Block6 from './blocks/Block6'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page1: true,
    }

    // this.handleScroll = this.handleScroll.bind(this);

    this.routePage2 = this.routePage2.bind(this);
    this.pageDown = this.pageDown.bind(this);
  }

  routePage2 = () => {
    setTimeout(() => {this.props.history.push('/work')}, 600)
  }

  pageDown = () => {
    this.setState({ 
      page1: false, //triggers the leave animation
    });        
    this.routePage2()
  }

  onWheel = e => {
    if (e.deltaY > 0) {
      this.pageDown();
    }
  };

  componentDidMount() {
    window.addEventListener('wheel', this.onWheel);
  }

  componentWillUnmount() {
    window.addEventListener('wheel', this.onWheel);
  }



  render() {

    return (
      <Transition
        native
        items = { this.state.page1 }
        from={{ opacity: 1, marginTop: 0 }}
        enter={{ opacity: 1, marginTop: 0 }}
        leave={{ opacity: 0, marginTop: -300 }}
      >
        {show => show && (props => (
          <animated.div style={props}>
            <div className="first-page-container">
              <WelcomeText />
              <ScrollArrow />
              <div style={Block1ContainerStyle}>
                <Block1 />
              </div>
              <div style={Block2ContainerStyle}>
                <Block2 />
              </div>
              <div style={Block3ContainerStyle}>
                <Block3 />
              </div>
              <div style={Block4ContainerStyle}>
                <Block2 />
              </div>
              <div style={Block5ContainerStyle}>
                <Block4 />
              </div>
              <div style={Block6ContainerStyle}>
                <Block5 />
              </div>
              <div style={Block7ContainerStyle}>
                <Block6 />
              </div>
            </div>          
          </animated.div>
        ))}
      </Transition>
    );
  }
}

const Block1ContainerStyle = {
  width: 15,
  height: 50,
  position: 'absolute',
  top: '10vh',
  left: '26%'
}

const Block2ContainerStyle = {
  width: 45,
  height: 9,
  position: 'absolute',
  top: 300,
  right: '35%'
}

const Block3ContainerStyle = {
  width: 45,
  height: 9,
  position: 'absolute',
  top: 320,
  right: '35%'
}

const Block4ContainerStyle = {
  width: 45,
  height: 9,
  position: 'absolute',
  top: 340,
  right: '35%'
}

const Block5ContainerStyle = {
  width: 60,
  height: 10,
  position: 'absolute',
  bottom: 300,
  left: '19%'
}

const Block6ContainerStyle = {
  width: 13,
  height: 65,
  position: 'absolute',
  bottom: 100,
  left: '30%'
}

const Block7ContainerStyle = {
  width: 11,
  height: 50,
  position: 'absolute',
  bottom: 340,
  right: '15%'
}

const HomeWithRouter = withRouter(Home);

export default HomeWithRouter;

