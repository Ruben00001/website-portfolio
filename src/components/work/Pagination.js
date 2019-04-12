import React from 'react'

export default function Pagination(props) {
  return (
    <div className="pagination">
      <span style={props.color1} className="pagination__dot pagination__dot--1"></span>
      <span style={props.color2} className="pagination__dot pagination__dot--2"></span>
      <span style={props.color3} className="pagination__dot pagination__dot--3"></span>
      <span style={props.color4} className="pagination__dot pagination__dot--4"></span>
      <span style={props.color5} className="pagination__dot pagination__dot--5"></span>
      <span style={props.color6} className="pagination__dot pagination__dot--6"></span>
    </div>
  )
}
