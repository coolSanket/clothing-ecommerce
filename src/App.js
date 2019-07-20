import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.compenent';
import { Route, Switch } from 'react-router-dom';

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
