/* eslint-disable no-console */
import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import Favorite from './Favorite';
import '../styles/App.css';

const App = () => {
  const [userID, setUserID] = useState('');

  const handleLogin = (res) => {
    setUserID(res.id);
  };

  const handleLogout = () => {
    window.FB.logout((res) => {
      console.log(res);
      setUserID('');
    });
  };

  return (
    <BrowserRouter>
      <div test-id="app" className="App">
        <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
        <Switch>
          <Route exact path="/add-property" component={AddProperty} />
          <Route
            exact
            path="/favorite"
            render={(props) => (
              <Favorite {...props} userID={userID} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Properties {...props} userID={userID} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
