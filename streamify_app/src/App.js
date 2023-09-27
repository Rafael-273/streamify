import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note que estamos usando Routes em vez de Switch
import Home from './components/home.js';
import Menu from './components/menu.js';
import AddVideo from './components/crud/create_video.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Menu/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addVideo" element={<AddVideo />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
