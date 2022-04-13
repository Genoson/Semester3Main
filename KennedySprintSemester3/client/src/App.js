import React from "react";
import './App.css';
import Home from "./components/Home";
import BinaryTree from './components/BinaryTree';
import Header from './components/Header';
import Footer from './components/Footer';
import DataEntry from './components/DataEntry';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  // need to define the binary tree here
  const [binaryTree, setBinaryTree] = useState([]);
  const [value, setValue] = useState("");
  
  // need to connect to the mongo database to get the data
  const getData = () => {
        
  }


  return (
    <div>
      <Header />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataEntry" element={<DataEntry value={value} setValue={setValue} />} />
        <Route path="/binaryTree" element={<BinaryTree binaryTree={binaryTree} setBinaryTree={setBinaryTree} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
