import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import App from './containers/App';
import Dashboard from './containers/pages/Dashboard';

export default () => (
  <App>
    <HashRouter>
      {/* <Route path="/settings" component={Settings} /> */}
      <Route path="/" component={Dashboard} />
    </HashRouter>
  </App>
);
