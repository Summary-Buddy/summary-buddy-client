import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Header from './components/Header';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path = "/" element = { <Login />} />
        <Route path = "/Register" element = {<Register />} />
      </Routes>
    </>
  );
}

export default App;
