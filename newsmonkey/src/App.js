import React, { Component } from 'react';
import {
  Route, BrowserRouter as Router, Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <News pageSize={9} country="us" category="sports"/>
        <Routes>
          <Route exact path ="/" pageSize={9} country="us" category="general"/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App

