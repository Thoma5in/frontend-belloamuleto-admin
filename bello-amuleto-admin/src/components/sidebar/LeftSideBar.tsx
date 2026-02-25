import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LeftSideBar.css';

interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

const LeftSideBar: React.FC = () => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: '📊', label: 'Dashboard', path: '/' },
    { icon: '📦', label: 'Ordenes', path: '/ordenes' },
    { icon: '📋', label: 'Inventario', path: '/inventario' },
    { icon: '👥', label: 'Clientes', path: '/clientes' },
    { icon: '📈', label: 'Analíticas', path: '/analiticas' },
    { icon: '👤', label: 'Personal', path: '/staff' },
  ];

  return (
    <aside className="left-sidebar">
      {/* Logo Section */}
      <Link to="/" className="sidebar-logo">
        <div className="logo-icon">💎</div>
        <div className="logo-text">
          <span className="logo-title">Bello Amuleto</span>
          <span className="logo-subtitle">ADMIN</span>
        </div>
      </Link>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Settings at bottom */}
      <div className="sidebar-footer">
        <Link to="/settings" className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default LeftSideBar;
