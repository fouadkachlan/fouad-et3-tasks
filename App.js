import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './MainScreen'
import SecondScreen from './SecondScreen';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/second" element={<SecondScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
