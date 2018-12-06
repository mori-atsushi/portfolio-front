import createBrowserHistory from 'history/createBrowserHistory';
import * as ReactGa from 'react-ga';

const history = createBrowserHistory();

ReactGa.initialize('UA-130561733-1');
ReactGa.pageview(window.location.pathname + window.location.search);

history.listen((location) => {
  ReactGa.pageview(location.pathname + location.search);
});

export default history;
