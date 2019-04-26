import React, { useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';

export default function SecondLineA() {

  const someStringArray = 'I make websites..'.split('').map((character, index) => ({
    text: character,
    key: index,
  }))

  const [items, set] = useState([]);
  const transitions = useTransition(items, item => item.key, {
    from: { transform: 'translate3d(0, 15px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
  });

  const reset = useCallback(() => {
    someStringArray.forEach((item, itemIndex) => {
      setTimeout(() => set(someStringArray.slice(0, itemIndex + 1)), 300 + itemIndex * 60)
    });
  }, []);

  useEffect(() => void reset(), []);

  return transitions.map(({ item, props, key }) => (
    <animated.span key={key} style={props} className="welcome-text__second-line__letter">
      {item.text}
    </animated.span>
  ));
}