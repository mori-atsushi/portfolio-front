import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import ComingSoon from './pages/ComingSoon';
import Top from './pages/Top';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <>
          <Route path='/' component={Top} exact={true} />
          <Route path='/works' component={ComingSoon} />
          <Route path='/photos' component={ComingSoon} />
          <Route path='/blog' component={ComingSoon} />
          <Route path='/contact' component={ComingSoon} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
