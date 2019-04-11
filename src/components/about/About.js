import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Transition, animated } from 'react-spring/renderprops'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faEye, faGem, faSnowflake } from "@fortawesome/free-solid-svg-icons"
import AboutSpielTitle from './AboutSpielTitle'
import AboutSpielContent from './AboutSpielContent'
import AboutSpielInfo from './AboutSpielInfo'
import AboutSpielIcons from './AboutSpielIcons'
import AboutImageHeadshot from './AboutImageHeadshot'
import AboutLanguages from './AboutLanguages'
import Block1 from './blocks/Block1'


class Page2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page2: true,
    }

    this.routePage1 = this.routePage1.bind(this);
  }

  routePage1 = () => {
    setTimeout(() => {this.props.history.push('/')}, 600)
  }

  routeWork = () => {
    setTimeout(() => {this.props.history.push('/work')}, 600)
  }

  render() {
    const pageUp = () => {
      this.setState({
        page2: false,
      });
      this.routePage1();
    }

    const pageDown = () => {
      this.routeWork();
    }

    window.addEventListener('wheel', function(e) {
      if (e.deltaY < 0) {
        pageUp();
      }
      if (e.deltaY > 0) {
        pageDown();
      }
    });

    return (
      <React.Fragment>
        <Transition
          native
          items = { this.state.page2 }
          from={{ opacity: 1, marginTop: 0 }}
          enter={{ opacity: 1, marginTop: 0 }}
          leave={{ opacity: 0, marginTop: 100 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <div className="about__container">
                <div className="about__container--top">
                  <div className="about__spiel">
                    <AboutSpielTitle />
                    <AboutSpielContent />
                    <AboutSpielInfo />
                    <AboutSpielIcons />
                  </div>
                  {/* <AboutImageHeadshot /> */}
                </div>
                <div className="about__container--bottom">
                  <AboutLanguages />
                </div>
                {/* <div style={Block1ContainerStyle}>
                  <Block1 />
                </div> */}
                <div className="side-decoration">
          <div className="side-decoration__icon-container">
            <FontAwesomeIcon className="side-decoration__icon"  icon={faBolt}/>
            <FontAwesomeIcon className="side-decoration__icon"  icon={faEye}/>
            <FontAwesomeIcon className="side-decoration__icon"  icon={faGem}/>
            <FontAwesomeIcon className="side-decoration__icon"  icon={faSnowflake}/>
          </div>
          <div className="side-decoration__line"></div>
          <div className="side-decoration__icon-container">
            <FontAwesomeIcon className="side-decoration__icon"  icon={faSnowflake}/>
            <FontAwesomeIcon className="side-decoration__icon"  icon={faGem}/>
            <FontAwesomeIcon className="side-decoration__icon"  icon={faEye}/>
            <FontAwesomeIcon className="side-decoration__icon"  icon={faBolt}/>           
          </div>
        </div>
              </div>   
            </animated.div>
          ))}
        </Transition>
      </React.Fragment>
    )
  }  
}

const Block1ContainerStyle = {
  width: 20,
  height: 60,
  position: 'absolute',
  bottom: 400,
  left: 200
}

const Page2WithRouter = withRouter(Page2);
export default Page2WithRouter