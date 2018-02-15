import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import App from './containers/App';

export default () => (
  <App>
    <Router>
      {/* <Route path="/settings" component={Settings} /> */}
      <Route path="/" component={App} />
    </Router>
  </App>
);
