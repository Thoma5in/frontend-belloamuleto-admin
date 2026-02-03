import {  Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  

  return (
    <div className="app-container">
      <main className = "main-content">
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
        </Routes>
        </main>
    </div>
  )
}

export default App
