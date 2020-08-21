import React from 'react';
import '../styles/App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/add-property" component={AddProperty} />
        <Route exact path="/" component={Properties} />
      </Switch>
      <h1>
        Surreal Estate!
      </h1>
    </div>
  );
}

export default App;
