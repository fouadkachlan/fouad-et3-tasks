import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './MainScreen'
import SecondScreen from './SecondScreen';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen divStyle={{backgroundColor:"aqua", padding:"20px"}} />} />
        <Route path="/second" element={<SecondScreen divStyle={{backgroundColor:"red" , padding:"20px"}} />} />
      </Routes>
    </Router>
  );
};
 
export default App;
