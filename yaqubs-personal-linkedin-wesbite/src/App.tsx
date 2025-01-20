import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>

    </Routes>
    </Router>
  )
}

