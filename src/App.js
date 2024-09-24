import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import RecordPage from './pages/RecordPage';
import "./App.css";
import './background.scss';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
      // 
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mypage" element={<MyPage />} />
          <Route path="/Record" element={<RecordPage />} />
          <Route path = "/Login" element = { <Login />} />
          <Route path = "/Register" element = {<Register />} />
        </Routes>
      </div>
  );
}

export default App;

