import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        
        <>
          <NavBar />
          <Routes>
            
            <Route exact path="/"              element={<News pageSize={5} country='us' category='general' />} ></Route>
            <Route exact path="/entertainment" element={<News pageSize={5} country="us" category='entertainment' />} ></Route>
            <Route exact path="/general" element={<News pageSize={5} country="us" category='general' />} ></Route>
            <Route exact path="/health" element={<News pageSize={5} country="us" category='health' />} ></Route>
            <Route exact path="/science" element={<News pageSize={5} country="us" category='science' />} ></Route>
            <Route exact path="/sports" element={<News pageSize={5} country="us" category="sports" />} ></Route>
            <Route exact path="/technology" element={<News pageSize={5} country="us" category="technology" />} ></Route>
            <Route exact path="/business" element={<News pageSize={5} country="us" category="business" />} ></Route>



          </Routes>
          </>
      </div>

    )
  }
}


