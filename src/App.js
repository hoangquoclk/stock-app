import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
