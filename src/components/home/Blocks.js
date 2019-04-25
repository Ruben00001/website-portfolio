import React from 'react'
import Block1 from './blocks/Block1'
import Block2a from './blocks/Block2a'
import Block2b from './blocks/Block2b'
import Block2c from './blocks/Block2c'
import Block3 from './blocks/Block3'
import Block4 from './blocks/Block4'
import Block5 from './blocks/Block5'

export default function Blocks() {
  return (
    <React.Fragment>
      <Block1 />
      <Block2a />
      <Block2b />
      <Block2c />
      <Block3 />
      <Block4 />
      <Block5 />
    </React.Fragment>
  )
}
