import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />

          <Routes>            
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>        

        <Footer />
      </ Router>
    </div>
  );
}

export default App;
