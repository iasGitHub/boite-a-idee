import React from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Idea from './pages/idees';
import Add from './pages/Add';

function App() {
  return (
    <Router>
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Boite a idées</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className='nav-link'>Liste des idées</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/add-idea" className='nav-link'>Ajouter une idée</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
      </div>
        <Switch>
            <Route exact path="/" component={Idea}/>
            <Route path="/add-idea" component={Add}/>
        </Switch>
    </Router>
  );
}

export default App;
