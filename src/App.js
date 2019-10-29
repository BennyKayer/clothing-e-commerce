import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component';

import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component = {ShopPage}/>
        <Route exact path='/signin' component={SignInSignOut}/>
      </Switch>
      
    </div>
  );
}

export default App;
