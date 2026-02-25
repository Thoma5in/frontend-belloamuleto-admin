import {  Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Staff from './pages/staff/Staff';
import LeftSideBar from './components/sidebar/LeftSideBar';
import CreateUserForm from './components/create-user/CreateUserForm';


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="app-container">
      {!isLoginPage && <LeftSideBar />}
      <main className = "main-content">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/staff/nuevo' element={<CreateUserForm />} />
          <Route path = "*" element = {<div className="not-found">Página no encontrada</div>} />
        </Routes>
        </main>
    </div>
  )
}

export default App
