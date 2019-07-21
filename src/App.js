import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import HomePage from '../src/pages/homepage/homepage.compenent';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signIn-signUp-page/signIn-signUp.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubascribeFromAuth = null;

  componentDidMount() {
    // returns a firebse unsubscribe , so that we can unsubscribe to auth listener
    this.unsubascribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubascribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
