

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

