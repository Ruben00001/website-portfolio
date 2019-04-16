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


class Page2 extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = {
      page2: true,
      sideDecorationOffset: 0
    }

    this.routePage2 = this.routePage2.bind(this);
    this.pageUp = this.pageUp.bind(this);
    this.onWheel = this.onWheel.bind(this);
  }

  routePage2 = () => {
    setTimeout(() => {this.props.history.push('/work')}, 600)
  }

  pageUp = () => {
    this.setState({
      page2: false,
    });
    this.routePage2();
  }

  onWheel = e => {
    if (e.deltaY < 0) {
      this.pageUp();        
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onWheel);
    console.log('about page mounted ...');
  }

  componentWillUnmount() {
    window.addEventListener('wheel', this.onWheel);
  }

  render() {
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
                <div className="about__container--top">
                  <div className="about__spiel">
                    <AboutSpielTitle /> {/* own component to animate separately - should change */}
                    <AboutSpielContent />
                    <AboutSpielInfo />
                    <AboutSpielIcons />
                  </div>
                  {/* <AboutImageHeadshot /> */}
                </div>
                <div className="about__container--bottom">
                  <AboutLanguages />
                </div>
              </div>   
            </animated.div>
          ))}
        </Transition>
      </React.Fragment>
    )
  }  
}


const Page2WithRouter = withRouter(Page2);
export default Page2WithRouter