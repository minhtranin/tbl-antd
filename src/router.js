import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import benefits from './routes/benefits';
import Page1 from './routes/page1';
import Page2 from './routes/page2';
import Page3 from './routes/page3';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={benefits} />
        <Route path="/1" exact component={Page1} />
        <Route path="/2" exact component={Page2} />
        <Route path="/3" exact component={Page3} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
