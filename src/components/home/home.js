import React, { Redirect, Component } from 'react';
import { withRouter } from 'react-router';
import { Transition, animated } from 'react-spring/renderprops';
import WelcomeText from './welcomeText';
import Block1 from './Block1'
import Page2 from './Page2'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      page1up: true,
      page2up: true
    }
  }

  routePage2 = (user) => {
    setTimeout(() => {this.props.history.push('/page2')}, 600)
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
    }
    const pageDown = () => {
      if(this.state.page < 2) {
        this.setState({
          page: this.state.page + 1,
          page1up: false,
          page2up: true
        });        
      }
      this.routePage2()
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
          items = { this.state.page1up }
          from={{ opacity: 1, marginTop: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, marginTop: -300 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <div className="first-page-container">
                <WelcomeText />
                <div style={Block1ContainerStyle}>
                  <Block1 />
                </div>
              </div>          
            </animated.div>
          ))}
        </Transition>
        {/* <Transition
          native
          items = { this.state.page2up }
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          config={{ delay: 2000 }}
          leave={{ opacity: 1 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <Page2 />        
            </animated.div>
          ))}
        </Transition> */}

      </React.Fragment>

      






    );
  }
}

const Block1ContainerStyle = {
  width: 20,
  height: 60,
  position: 'absolute',
  top: 200,
  left: 200
}

const HomeWithRouter = withRouter(Home);

export default HomeWithRouter;





// timer: null,
// changeTextControl1: 1,
// changeTextControl2: 1,
// firstLineA: "Hi I'm ",
// firstLineB: "",
// secondLine: "'m a web developer"

// this.changeTextLine1 = this.changeTextLine1.bind(this);
// this.changeTextLine2 = this.changeTextLine2.bind(this);



// componentDidMount() {
//   setInterval(this.changeTextLine1, 4000);
//   setTimeout(this.changeTextLine2, 6000);
//   setTimeout(this.changeTextLine2, 9000);
//   setTimeout(this.changeTextLine2, 12000);
// }

// changeTextLine1() {
//   if (this.state.changeTextControl1 === 1) {
//     this.setState({
//       firstLineA: "",
//       firstLineB: " is creative"
//     });
//   }
//   if (this.state.changeTextControl1 === 2) {
//     this.setState({
//       firstLineA: "",
//       firstLineB: " is intelligent"
//     });
//   }
//   if (this.state.changeTextControl1 === 3) {
//     this.setState({
//       firstLineA: "",
//       firstLineB: " is not pretentious"
//     });
//   }
//   if (this.state.changeTextControl1 < 3) {
//     this.setState({
//       changeTextControl1: this.state.changeTextControl1 + 1
//     });
//   }
// }

// changeTextLine2() {
//   if (this.state.changeTextControl2 === 1) {
//     this.setState({
//       secondLine: "can help your company"
//     });
//   }
//   if (this.state.changeTextControl2 === 2) {
//     this.setState({
//       secondLine: "know CSS, JS .."
//     });
//   }
//   if (this.state.changeTextControl2 === 3) {
//     this.setState({
//       secondLine: "can ..."
//     });
//   }
//   if (this.state.changeTextControl2 < 3) {
//     this.setState({
//       changeTextControl2: this.state.changeTextControl2 + 1
//     });
//   }
// }