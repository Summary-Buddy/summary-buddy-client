import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path = "/" element = { <Login />} />
      </Routes>
    </>
  );
}

export default App;
