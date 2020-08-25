import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/add-property" component={AddProperty} />
        <Route path="/" component={Properties} />
      </Switch>
    </div>
  );
}

export default App;
