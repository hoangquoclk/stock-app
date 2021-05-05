import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Canslim from './Pages/Canslim';
import FourM from './Pages/FourM';

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route exact path="/">
          <Header/>
            <FourM/>
          </Route>
          <Route exact path="/canslim">
          <Header/>
            <Canslim/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
