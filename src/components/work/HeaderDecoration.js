import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faEye, faGem, faSnowflake } from "@fortawesome/free-solid-svg-icons"

export default function HeaderDecoration() {
  return (
    <div className="header-decoration">
      <div className="header-decoration__icons-container">
        <div>
          <FontAwesomeIcon className="header-decoration__icon header-decoration__icon-1" icon={faBolt}></FontAwesomeIcon>
          <FontAwesomeIcon className="header-decoration__icon header-decoration__icon-2" icon={faEye}></FontAwesomeIcon>
        </div>
        <div>
          <FontAwesomeIcon className="header-decoration__icon" icon={faGem}></FontAwesomeIcon>
          <FontAwesomeIcon className="header-decoration__icon header-decoration__icon-4" icon={faSnowflake}></FontAwesomeIcon>
        </div>
      </div>
      <p>Ruben Seveelaventhan</p>
      <div className="header-decoration__line"></div>
      <p>Web developer + creative problem solver</p>
    </div>
  )
}
