import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Flipper from './Flipper'



class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ImgNumber: 0,
      imgTitle: 1,
    }

    this.routeAbout = this.routeAbout.bind(this);
  }

  routeAbout = () => {
    setTimeout(() => {this.props.history.push('/about')}, 600)
  }

  render() {
    const pageUp = () => {
      this.routeAbout()
    }

    window.addEventListener('wheel', function(e) {
      if (e.deltaY < 0) {
        pageUp();
      }
    });

    return (
      <div className='work__container'>
        <div className="flipper__container">
          <Flipper />
        </div>
      </div>
    )
  }
}

const WorkWithRouter = withRouter(Work)
export default WorkWithRouter;

