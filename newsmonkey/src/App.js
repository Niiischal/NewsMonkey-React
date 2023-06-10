import React, { Component } from 'react';
import {
  Route, BrowserRouter as Router, Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import News from './components/News';


export class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress= {this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
          <Route exact path ="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={9} country="us" category="general"/>}/>
          <Route exact path ="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={9} country="us" category="business"/>}/>
          <Route exact path ="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={9} country="us" category="entertainment"/>}/>
          <Route exact path ="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={9} country="us" category="health"/>}/>
          <Route exact path ="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={9} country="us" category="science"/>}/>
          <Route exact path ="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={9} country="us" category="sports"/>}/>
          <Route exact path ="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={9} country="us" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App

