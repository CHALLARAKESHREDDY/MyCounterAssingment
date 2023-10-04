import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginOrSingup from './components/WhoareyouPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginOrSingup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
       
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

