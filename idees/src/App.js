import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Idea from './pages/idees';
import add from './pages/Add';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Idea}/>
            <Route path="/add-idea" component={add}/>
        </Switch>
    </Router>
  );
}

export default App;
