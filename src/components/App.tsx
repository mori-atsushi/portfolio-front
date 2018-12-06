import * as React from 'react';
import { Route, Router } from 'react-router-dom'

import history from './history';
import ComingSoon from './pages/ComingSoon';
import Top from './pages/Top';

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <>
          <Route path='/' component={Top} exact={true} />
          <Route path='/works' component={ComingSoon} />
          <Route path='/photos' component={ComingSoon} />
          <Route path='/blog' component={ComingSoon} />
          <Route path='/contact' component={ComingSoon} />
        </>
      </Router>
    );
  }
}

export default App;
