import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import upload from './icons/upload.svg'
import Wizard from './components/Wizard/Wizard';
import './index.scss';
import classes from './Button.module.scss'

function App() {
  const [show, setShow] = useState(false);

  return(
    <>
      <button onClick={() => setShow(true)} className={classes.button} type="button">
        <img src={upload} alt="title"></img>
        Upload transactions
      </button>
      <Wizard show={show}/>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));