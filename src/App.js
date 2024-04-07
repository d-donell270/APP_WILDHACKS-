import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/linked_pages/Search';
import UploadPage from './components/linked_pages/Upload';
import Home from './components/linked_pages/Home';
import AboutUs from './components/linked_pages/AboutUs';
import Services from './components/linked_pages/Services';
import Help from './components/linked_pages/Help';


function App() {
  return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Search' element={<SearchPage/>} />
          <Route path='/Upload' element={<UploadPage/>} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
