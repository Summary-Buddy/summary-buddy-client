import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import RecordPage from './pages/RecordPage';
import "./App.css";

function App() {
  return (
    <Router>  {/* Router 추가 */}
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mypage" element={<MyPage />} />
          <Route path="/Record" element={<RecordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

