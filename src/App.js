import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component'

const PucksPage = () => (
  <div>
    <h1>Pucks page </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/pucks' component={PucksPage} />
      </Switch>
    </div>
  );
}

export default App;
