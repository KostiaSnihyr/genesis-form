import React from 'react';
import Transitions from './Transitions/Transitions'

const Wizard = ({show}) => {
  return (
    <>
      <div style={{display: show ? "block" : "block"}}>
        <Transitions />
      </div>
    </>
  )
}

export default Wizard;