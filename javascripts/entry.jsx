import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import history from 'history/lib/createBrowserHistory'

import Main from 'Main'
import Result from 'Result'
import Login from 'Login'

render(
  <Router history={history()}>
    <Route path="/" component={Login} />
    <Route path="/main" component={Main} />
  </Router>
, document.getElementById('app'));
