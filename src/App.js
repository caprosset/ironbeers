import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home'
import BeersList from './pages/BeersList';
import BeerDetails from './pages/BeerDetails';
import AddNewBeer from './pages/AddNewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersList} />
        <Route exact path="/beers/random" component={BeerDetails} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/new-beer" component={AddNewBeer} />
      </Switch>
    </div>
  );
}

export default App;
