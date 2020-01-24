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

const App = () => {
  return (
    <Router history={browserHistory}>
      <Template>
        <Switch>
          <Route component={Projects} exact path={UrlPaths.projects} />
          <Route component={Settings} exact path={UrlPaths.settings} />
        </Switch>
      </Template>
    </Router>
  );
};

export default App;
