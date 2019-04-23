import React from 'react'

export default function AboutLink(props) {
  return (
    <p onClick={props.route} className="page-link page-link--about">about</p>
  )
}
