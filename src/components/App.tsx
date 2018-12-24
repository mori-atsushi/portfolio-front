import * as React from 'react';
import { Route, Router } from 'react-router-dom'

import Footer from 'src/components/molecules/footers/Footer';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
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
          <Route path='/blog' component={Blog} exact={true} />
          <Route path='/blog/:id' component={BlogArticle} />
          <Route path='/contact' component={Contact} />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
