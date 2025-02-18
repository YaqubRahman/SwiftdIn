import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import { LoginSignup } from './pages/LoginSignup';
import  CountryChoose  from './pages/CountryChoose';

export default function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginSignup/>} />
        <Route path="/countrychoose" element={<CountryChoose/>}/>

      </Routes>
    </Router></>
  )
}

