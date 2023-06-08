import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={9} country="us" category="sports"/>
      </div>
    )
  }
}

export default App

