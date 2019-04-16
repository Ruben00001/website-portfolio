import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Transition, animated } from 'react-spring/renderprops';
import Flipper from './Flipper'
import HeaderDecoration from './HeaderDecoration'


class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
      paginationActive: 'black',
      paginationInActive: 'rgb(192, 192, 192)'
    }

    this.routePage1 = this.routePage1.bind(this);
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

  onWheel = e => {
    if (e.deltaY < 0) {
      this.pageUp();
    }
    if (e.deltaY > 0) {
      this.pageDown();
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onWheel);
    console.log('Work page mounted...');
  }

  componentWillUnmount() {
    window.addEventListener('wheel', this.onWheel);
  }


  render() {

    return (
      <Transition
      native
      items = { this.state.show }
      from={{ opacity: 1, marginTop: 0 }}
      enter={{ opacity: 1, marginTop: 0 }}
      leave={{ opacity: 0, marginTop: -300 }}
    >
      {show => show && (props => (
        <animated.div style={props}>
          <div className='work__container'>
            <HeaderDecoration />
            <div className="flipper__container">
              <Flipper />
            </div>
          </div>        
        </animated.div>
      ))}
    </Transition>
    )
  }
}



const WorkWithRouter = withRouter(Work)
export default WorkWithRouter;

