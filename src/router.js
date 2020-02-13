import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import benefits from './routes/benefits';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={benefits} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;