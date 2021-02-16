import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faEye, faGem, faSnowflake } from "@fortawesome/free-solid-svg-icons";

export default function Logo(props) {
  return (
    <div onClick={props.route} className="logo">
      <div>
        <FontAwesomeIcon className="logo__icon logo__icon-1" icon={faBolt}></FontAwesomeIcon>
        <FontAwesomeIcon className="logo__icon logo__icon-2" icon={faEye}></FontAwesomeIcon>
      </div>
      <div>
        <FontAwesomeIcon className="logo__icon" icon={faGem}></FontAwesomeIcon>
        <FontAwesomeIcon className="logo__icon logo__icon-4" icon={faSnowflake}></FontAwesomeIcon>
      </div>
    </div>
  )
}
