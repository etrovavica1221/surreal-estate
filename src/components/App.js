/* eslint-disable no-console */
import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
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
          <Route path="/" component={Properties} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
