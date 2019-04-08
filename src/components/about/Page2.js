import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { faGithub, faLinkedin, faHtml5, faCss3, faSass, faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Transition, animated } from 'react-spring/renderprops'
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

  render() {
    const pageUp = () => {
      this.setState({
        page2: false,
      });
      this.routePage1();
    }

    window.addEventListener('wheel', function(e) {
      if (e.deltaY < 0) {
        pageUp();
      }
      // if (e.deltaY > 0) {
      //   pageDown();
      // }
    });

    return (
      <React.Fragment>
        <Transition
          native
          items = { this.state.page2 }
          from={{ opacity: 1 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, marginTop: 100 }}
          config={{ duration: 1000 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <div className="about__container">
                <div className="about__container--top">
                  <div className="about__spiel">
                    <div className="about__title">
                      <h1>Profile</h1>
                        <div></div>
                    </div>
                      <p className="about__spiel__content">I’m Ruben Seveelaventhan a web developer with an interest in design and creative problem solving, currently living in London. I started coding in 2018 following diverse careers in the education and construction sectors amongst others.</p>
                    <div className="about__spiel__info">
                      <h2>Status</h2>
                      <p>Available for work</p>
                    </div>
                    <div className="about__spiel__info">
                      <h2>Email</h2>
                      <p>a.ruben00001@gmail.com</p>
                    </div>
                    <div className="about__spiel__icons">
                      <a href="https://github.com/Ruben00001" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
                      <a href="https://www.linkedin.com/in/ruben-seveelaventhan-0768b5167/" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                  </div>
                  <div className="about__image--headshot">
                    <img src={require('../../img/headshotEditedStencilBorder2.png')} alt="headshot of Ruben"></img>
                  </div>   
                </div>
                <div className="about__container--bottom">
                  <div className="about__languages">
                    <div className="about__title">
                      <h1>Languages & Frameworks</h1>
                      <div></div>
                    </div>
                    <div className="about__languages__icons">
                      <div>
                        <FontAwesomeIcon className="about__languages__icons__icon" icon={faHtml5} />
                        <h3>HTML5</h3>
                      </div>
                      <div>
                        <FontAwesomeIcon className="about__languages__icons__icon" icon={faCss3} />
                        <h3>CSS3</h3>
                      </div>
                      <div>
                        <FontAwesomeIcon className="about__languages__icons__icon" icon={faSass} />
                        <h3>SASS</h3>
                      </div>
                      <div>
                        <FontAwesomeIcon className="about__languages__icons__icon" icon={faJs} />
                        <h3>JScript</h3>
                      </div>
                      <div>
                        <FontAwesomeIcon className="about__languages__icons__icon" icon={faReact} />
                        <h3>React</h3>
                      </div>
                      <div>
                        <FontAwesomeIcon className="about__languages__icons__icon" icon={faNodeJs} />
                        <h3>NodeJS</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={Block1ContainerStyle}>
                  <Block1 />
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