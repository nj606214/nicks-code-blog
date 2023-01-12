import React from 'react';
import About from './components/About'
import './index.css'
import SignInPage from './components/SignInPage'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import Profile from './components/Profile'


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<SignInPage />} /> 
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
