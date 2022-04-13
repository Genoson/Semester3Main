import React from 'react';
import './App.css';
import {Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import BinaryTree from './pages/BinaryTree';

function App() {
  return (
    
    <main>
      <Header />
    <h1>oh Hai</h1>
    
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/binarytree" element={<BinaryTree />} />
      <Route path="/search" element={<Search />} /> // this wont be a link but a result of a login
    </Routes>
    <Footer />
    </main>
    
  );
}

export default App;
