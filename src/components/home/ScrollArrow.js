import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons"

export default function ScrollArrow() {
  return (
    <div className="arrow">
      <p className><FontAwesomeIcon className="arrow__arrow" icon={faLongArrowAltDown} />scroll</p>
    </div>
  )
}
