import * as React from 'react';
import { Route, Router } from 'react-router-dom'

import Footer from 'src/components/molecules/footers/Footer';
import Blog from './pages/Blog';
import ComingSoon from './pages/ComingSoon';
import Top from './pages/Top';

import history from './history';

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <>
          <Route path='/' component={Top} exact={true} />
          <Route path='/works' component={ComingSoon} />
          <Route path='/photos' component={ComingSoon} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={ComingSoon} />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
