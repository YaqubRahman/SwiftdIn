import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import { LoginSignup } from './pages/LoginSignup';
import  CountryChoose  from './pages/CountryChoose';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/loginsignup" element={<LoginSignup/>} />
        <Route path="/countrychoose" element={<CountryChoose/>}/>
        <Route path="/" element={<LandingPage/>}/>

      </Routes>
    </Router></>
)}
