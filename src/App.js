import React, { Fragment, useState} from 'react';
import { CSSTransition } from 'react-transition-group'
import './App.scss'

import Intro from './components/intro/intro.component';
import Header from './components/header/header.component';


const App = () => {
  const [isIntroVisibile, setIntroVisibility] = useState(true)
  const [isAppVisible, setAppVisibility] = useState(false)
  
  return (
    <Fragment>
      <CSSTransition 
      in={isIntroVisibile}
      timeout={300}
      classNames='intro-item'
      unmountOnExit
      onExited={() => setAppVisibility(true)}>
          <Intro clicked={() => setIntroVisibility(false)}/>
      </CSSTransition>
      <CSSTransition
      in={isAppVisible}
      timeout={300}
      classNames='main-app'>
        <div className='app-layout'>
          <Header/>
          <div className='app-content'>
            navigation
            pages
          </div>
        </div>
        </CSSTransition>
    </Fragment>
  )
}

export default App;