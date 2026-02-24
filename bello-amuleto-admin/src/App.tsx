import {  Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/login/Login';
import Home from './pages/home/Home';


function App() {
  

  return (
    <div className="app-container">
      <main className = "main-content">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
        </Routes>
        </main>
    </div>
  )
}

export default App
