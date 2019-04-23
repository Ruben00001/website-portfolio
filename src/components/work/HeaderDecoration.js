import React from 'react';
import Logo from '../pageLinks/Logo';

export default function HeaderDecoration() {
  return (
    <div className="header-decoration">
      <Logo />
      <p>Ruben Seveelaventhan</p>
      <div className="header-decoration__line"></div>
      <p>Web developer + creative problem solver</p>
    </div>
  )
}
