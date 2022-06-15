import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
