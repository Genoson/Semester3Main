import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import {Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';


function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    
    <main>
      <Header user={user} setUser={setUser} />
    
    
    <Routes>
      <Route path="" element={<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/search" element={<Search user={user} isLoggedIn={isLoggedIn}/>} /> // this wont be a link but a result of a login
    </Routes>
    <Footer />
    </main>
    
  );
}

export default App;
