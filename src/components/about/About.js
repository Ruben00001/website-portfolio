import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Transition, animated } from 'react-spring/renderprops'
import Logo from '../pageLinks/Logo';
import ProjectsLink from '../pageLinks/ProjectsLink';
import AboutLink from '../pageLinks/AboutLink';
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
      controlLeaveAnimation: true,
      sideDecorationOffset: 0
    }

    this.routePage2 = this.routePage2.bind(this);
    this.pageUp = this.pageUp.bind(this);
    this.onWheelA = this.onWheelA.bind(this);
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

  onWheelA = e => {
    if (e.deltaY < 0) {
      this.pageUp();        
    }
  }

  componentDidMount() {
    setTimeout(() => {
      // window.addEventListener('wheel', this.onWheelA);
      // console.log('wheel event added');
    }, 500);
    console.log('about page mounted ...');
  }

  componentWillUnmount() {
    // window.addEventListener('wheel', this.onWheelA);
    // console.log('About wheel event removed');
  }

  routeHome = () => {
    this.setState({ 
      controlLeaveAnimation: false
    });  
    setTimeout(() => {this.props.history.push('/')}, 600)
  }

  routeProjects = () => {
    this.setState({ 
      controlLeaveAnimation: false
    });  
    setTimeout(() => {this.props.history.push('/work')}, 600)
  }

  render() {
    return (
      <div className="about__container">
        <Logo route={this.routeHome} />
        <ProjectsLink route={this.routeProjects} />
        <AboutLink />
        <Transition
          native
          items = { this.state.controlLeaveAnimation }
          from={{ opacity: 0, marginTop: 20 }}
          enter={{ opacity: 1, marginTop: 0 }}
          leave={{ opacity: 0, marginTop: -300 }}
          config={{ mass: 5, tension: 150, friction: 14 }}
        >
          {show => show && (props => (
            <animated.div className="about__container--top" style={props}>
              <div className="about__spiel">
                <p className="about__spiel__content">Hi, I’m Ruben Seveelaventhan, a London based web developer with a passion for design and creative problem solving. I started coding in 2018 following diverse careers in the education and construction sectors.</p>
                <p className="about__spiel__content"><br/>And what about Ruben the person? I enjoy chilling out, getting into novels, mo
                <span className="about__spiel__content__span--1">v</span>
                <span className="about__spiel__content__span--2">i</span>
                <span className="about__spiel__content__span--3">e</span>
                <span className="about__spiel__content__span--4">s</span> <span className="about__spiel__content__span--5">a</span>
                <span className="about__spiel__content__span--6">n</span>
                <span className="about__spiel__content__span--7">d</span> <span className="about__spiel__content__span--8">w</span>
                <span className="about__spiel__content__span--9">h</span>
                <span className="about__spiel__content__span--10">o</span> <span className="about__spiel__content__span--11">c</span>
                <span className="about__spiel__content__span--12">a</span>
                <span className="about__spiel__content__span--13">r</span>
                <span className="about__spiel__content__span--14">e</span>
                <span className="about__spiel__content__span--15">s</span> <span className="about__spiel__content__span--16">r</span>
                <span className="about__spiel__content__span--17">e</span>
                <span className="about__spiel__content__span--18">a</span>
                <span className="about__spiel__content__span--19">l</span>
                <span className="about__spiel__content__span--20">l</span>
                <span className="about__spiel__content__span--21">y</span> <span className="about__spiel__content__span--22">z</span>
                <span className="about__spiel__content__span--23">z</span>
                <span className="about__spiel__content__span--24">z</span>
                <span className="about__spiel__content__span--25">.</span>
                <span className="about__spiel__content__span--26">.</span>
                </p>
                <div className="about__spiel__link about__spiel__link--linkedin">
                  <a href="https://www.linkedin.com/in/ruben-seveelaventhan-0768b5167/" target="__blank"><p>LinkedIn</p></a>   
                </div>
                <div className="about__spiel__link">
                  <a href="https://github.com/ruben00001" target="__blank"><p>GitHub</p></a>
                </div>
                <div className="about__spiel__link about__spiel__link--email">
                  <p>Get in touch:</p>
                  <a><p>a.ruben00001@gmail.com</p></a>
                </div>
              </div>   
            </animated.div>
          ))}
        </Transition>
      </div>
    )
  }  
}


const Page2WithRouter = withRouter(Page2);
export default Page2WithRouter




{/* <AboutSpielTitle />
<AboutSpielContent />
<AboutSpielInfo />
<AboutSpielIcons /> */}
{/* <AboutLanguages /> */}

