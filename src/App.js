import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'

import News from './components/News';
import DetailNews from './components/DetailNews';

function App() {


  return (

    <Router>
      <Switch>
        <Route path="/" exact>
          <News />
        </Route>
        <Route path="/details/:id">
          <DetailNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
