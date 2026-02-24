import React from 'react';
import './LeftSideBar.css';

interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
}

const LeftSideBar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📦', label: 'Ordenes', active: false },
    { icon: '📋', label: 'Inventario', active: false },
    { icon: '👥', label: 'Clientes', active: false },
    { icon: '📈', label: 'Analíticas', active: false },
  ];

  return (
    <aside className="left-sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <div className="logo-icon">💎</div>
        <div className="logo-text">
          <span className="logo-title">Bello Amuleto</span>
          <span className="logo-subtitle">ADMIN</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Settings at bottom */}
      <div className="sidebar-footer">
        <a href="#" className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default LeftSideBar;
