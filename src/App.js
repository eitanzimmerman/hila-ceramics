import React, { Fragment, useState} from 'react';
import { CSSTransition } from 'react-transition-group'
import './App.scss'

import { Switch, Route } from 'react-router-dom'

import Intro from './components/intro/intro.component';
import Header from './components/header/header.component';
import Nav from './components/navigation/nav.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Category from './pages/category/category.component';


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
          <main className='app-content'>
            <Nav />
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/shop/:category' component={Category} />
            </Switch>
          </main>
        </div>
        </CSSTransition>
    </Fragment>
  )
}

export default App;