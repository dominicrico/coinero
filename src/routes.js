import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import App from './containers/App';
import Welcome from './containers/pages/Welcome';
import Dashboard from './containers/pages/Dashboard';

export default () => (
  <HashRouter>
    <App>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/welcome" component={Welcome} />
      {/* <Route component={NoMatch} /> */}
    </App>
  </HashRouter>
);
