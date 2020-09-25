import React, { Fragment, useState} from 'react';
import { CSSTransition } from 'react-transition-group'
import './App.scss'

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectCartHidden } from './redux/cart/cart.selectors'

import Intro from './components/intro/intro.component';
import Header from './components/header/header.component';
import Nav from './components/navigation/nav.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Category from './pages/category/category.component';
import CartIcon from './components/cart-icon/cart-icon.component';
import CartMenu from './components/cart-menu/cart-menu.component';


const App = ({ cartHidden }) => {
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
            <CartIcon />
            <CSSTransition in={!cartHidden} unmountOnExit timeout={300} classNames='cart-items'><CartMenu/></CSSTransition>
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

const mapStateToProps = state => ({
  cartHidden: selectCartHidden(state)
})


export default connect(mapStateToProps)(App);