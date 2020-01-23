import React from 'react';

import { Route } from 'react-router-dom';
import { Router, Switch } from 'react-router';

import Template from './components/template';
import Settings from './pages/settings';
import Projects from './pages/projects';
import createBrowserHistory from 'history/createBrowserHistory';

import UrlPaths from './constants/UrlPaths';

import './App.css';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Template>
        <Switch>
          <Route components={Projects} path={UrlPaths.projects} />
          <Route components={Settings} path={UrlPaths.settings} />
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
