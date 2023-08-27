
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom"; 

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:10
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
 

  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/> 
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        
        <Route exact path="/" element={<News apiKey={this.apiKey}setProgress={this.setProgress}  category="sports" key="sports"/>} />
        <Route exact path="/business" element={<News apiKey={this.apiKey}setProgress={this.setProgress}  category="business" key="business"/>}/>
        <Route exact path="/entertainment" element={<News apiKey={this.apiKey}setProgress={this.setProgress}  category="Entertainment" key="Entertainment"/>}/>
        <Route exact path="/health" element={<News apiKey={this.apiKey}setProgress={this.setProgress}  category="health" key="health"/>}/>
        <Route exact path="/science" element={<News apiKey={this.apiKey}setProgress={this.setProgress}  category="science" key="science"/>}/>
        <Route exact path="/sports" element={<News apiKey={this.apiKey}setProgress={this.setProgress}  category="sports" key="sports"/>}/>
        <Route exact path="/technology" element={<News apiKey={this.apiKey}setProgress={this.setProgress}  category="technology" okey="technology"/>}/>
      </Routes>
    </BrowserRouter>
       
      </div>
    )
  }
}




