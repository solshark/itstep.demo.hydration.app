import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from './views/Login';
import { Dashboard } from './views/Dashboard';
import { History } from './views/History'
import { Add } from './views/Add';

function App() {
  return (
    <div className="container mx-auto px-4">

      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
