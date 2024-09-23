import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from './pages/MyPage';
import RecordPage from "./pages/RecordPage";
import Header from './pages/Header';

function App() {
  return (
    <div className="app">
      <Header></Header>      
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Mypage" element={<MyPage/>} />
        <Route path="/Record" element={<RecordPage/>} />    
      </Routes>
    </div>
  );
}

export default App;
