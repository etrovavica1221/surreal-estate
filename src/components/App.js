import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  return (
    <BrowserRouter>
      <div test-id="app" className="App">
        <NavBar />
        <Switch>
          <Route exact path="/add-property" component={AddProperty} />
          <Route path="/" component={Properties} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
