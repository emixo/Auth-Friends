import React from 'react';
import { Route,Switch } from "react-router-dom"
import './App.css';
import LoginForm from "./components/LoginForm"
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from "./components/FriendsList"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Friends</h1>
      </header>
      <section>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
