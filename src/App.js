import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Accounts from './Components/Accounts'
import Trainees from './Components/trainees'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/accounts">Accounts</Link>
          <Link to="/trainees">Trainees</Link>

          <hr />

          <Route path="/accounts" component={Accounts} />
          <Route path="/trainees" component={Trainees} />

        </div>
      </Router>
    );
  }
}

export default App;
