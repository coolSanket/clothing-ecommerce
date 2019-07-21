import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import HomePage from '../src/pages/homepage/homepage.compenent';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signIn-signUp-page/signIn-signUp.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
