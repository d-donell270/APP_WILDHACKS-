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
          <Route path='/' element={<Home/>} />
          <Route path='/Search' element={<SearchPage/>} />
          <Route path='/Upload' element={<UploadPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
