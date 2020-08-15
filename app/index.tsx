import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { routes } from '@/config';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const _App = () => {
  return (
    <Router>
      <div>
        <Switch>{routes} </Switch>
      </div>
    </Router>
  );
};

const App = hot(_App);

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
);
