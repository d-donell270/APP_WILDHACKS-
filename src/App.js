import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/linked_pages/Search';
import UploadPage from './components/linked_pages/Upload';
import Home from './components/linked_pages/Home'

function App() {
  return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/Search' component={<SearchPage/>} />
          <Route path='/Upload' component={<UploadPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
