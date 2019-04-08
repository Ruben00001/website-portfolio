import React from 'react'
import { withRouter } from 'react-router';
import { Spring } from 'react-spring/renderprops';

function Page2(props) {

  const routeHome = () => {
    setTimeout(() => {props.history.push('/')}, 1000) 
  }

  window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
      routeHome()
    }
  });

  return (
    <Spring
      from={{ color: 'black', opacity: 0 }}
      to={{ color: 'red', opacity: 1 }}
      config={{ duration: 1000 }}
    >
    { props => (
      <div style={props}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus itaque, ipsum tenetur temporibus ut. Magnam fugit dolorem aperiam sit eum odio esse consectetur nostrum? Quam optio ipsa voluptates distinctio!</p>
      </div>
    )}
    </Spring>
  )
}

const Page2WithRouter = withRouter(Page2);
export default Page2WithRouter