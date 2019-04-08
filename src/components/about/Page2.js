import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { faGithub, faLinkedin, faHtml5, faCss3, faSass, faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Transition, animated } from 'react-spring/renderprops'

class Page2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      page1up: true,
      page2up: true
    }
  }

  routePage1 = (user) => {
    setTimeout(() => {this.props.history.push('/')}, 600)
  }

  render() {


    const pageUp = () => {
      if(this.state.page > 1) {
        this.setState({
          page: this.state.page - 1,
          page1up: true,
          page2up: false
        });
      }
      this.routePage1();
    }
    // const pageDown = () => {
    //   if(this.state.page < 2) {
    //     this.setState({
    //       page: this.state.page + 1,
    //       page1up: false,
    //       page2up: true
    //     });        
    //   }
    //   this.routePage2()
    // }

    window.addEventListener('wheel', function(e) {
      if (e.deltaY < 0) {
        pageUp();
      }
      if (e.deltaY > 0) {
        // pageDown();
      }
    });

    return (
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
                </div>   
    )
  }




  

    

    // <React.Fragment>
    //   <Transition
    //     native
    //     items = { this.state.page1up }
    //     from={{ opacity: 1, marginTop: 0 }}
    //     enter={{ opacity: 1 }}
    //     leave={{ opacity: 0, marginTop: -300 }}
    //   >
    //     {show => show && (props => (
    //       <animated.div style={props}>
                
    //       </animated.div>
    //     ))}
    //   </Transition>
    // </React.Fragment>








    

    // <Spring
    //   from={{ color: 'black', opacity: 0 }}
    //   to={{ color: 'red', opacity: 1 }}
    //   config={{ duration: 1000 }}
    // >
    // { props => (
    //   <div style={props}>
    //       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus itaque, ipsum tenetur temporibus ut. Magnam fugit dolorem aperiam sit eum odio esse consectetur nostrum? Quam optio ipsa voluptates distinctio!</p>
    //   </div>
    // )}
    // </Spring>
  
}

const Page2WithRouter = withRouter(Page2);
export default Page2WithRouter