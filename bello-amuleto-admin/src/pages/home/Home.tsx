import React from 'react';
import './Home.css';
import LeftSideBar from '../../components/sidebar/LeftSideBar';



const Home: React.FC = () => {
  // Datos de ejemplo
  const stats = [
    {
      title: 'Ingresos Totales',
      value: '$142,850.00',
      subtitle: '+6.2% desde el mes pasado',
      icon: '💰',
      trend: 'up'
    },
    {
      title: 'Órdenes Activas',
      value: '28',
      subtitle: '4 esperando autenticación',
      icon: '📋',
      status: 'warning'
    },
    {
      title: 'Productos Totales',
      value: '1,142',
      subtitle: 'En 12 colecciones',
      icon: '📦',
    },
    {
      title: 'Nuevos Clientes',
      value: '84',
      subtitle: '+22% crecimiento',
      icon: '👥',
      trend: 'up'
    }
  ];

  const recentOrders = [
    {
      id: '#ORD-9281',
      customer: 'Eleanor Vance',
      date: 'Oct 24, 2023',
      status: 'ENVIADO',
      amount: '$2,450.00',
      statusClass: 'shipped'
    },
    {
      id: '#ORD-9275',
      customer: 'Julian Thorne',
      date: 'Oct 23, 2023',
      status: 'PENDIENTE',
      amount: '$12,800.00',
      statusClass: 'pending'
    },
    {
      id: '#ORD-9260',
      customer: 'Sophia Loren',
      date: 'Oct 22, 2023',
      status: 'ENVIADO',
      amount: '$890.00',
      statusClass: 'shipped'
    },
    {
      id: '#ORD-9258',
      customer: 'Marcus Aurelius',
      date: 'Oct 22, 2023',
      status: 'PROCESANDO',
      amount: '$4,200.00',
      statusClass: 'processing'
    }
  ];

  const topSellingItems = [
    {
      name: 'Anillo de Diamante Solitario',
      stock: 'Stock: 12 unidades',
      price: '$4,500',
      image: '💍'
    },
    {
      name: 'Collar de Perlas Etéreo',
      stock: 'Stock: 4 unidades',
      price: '$1,850',
      image: '📿'
    },
    {
      name: 'Brazalete Aurelia Gold',
      stock: 'Stock: 42 unidades',
      price: '$850',
      image: '✨'
    },
    {
      name: 'Aretes Petal Drop',
      stock: 'Stock: 18 unidades',
      price: '$1,200',
      image: '💎'
    }
  ];

  return (
    <div className="home-container">
      <LeftSideBar />
      <div className="main-content">
        {/* Header */}
        <div className="home-header">
        <div className="header-content">
          <div className="header-left">
            <input 
              type="text" 
              placeholder="Buscar boutique inventario, órdenes..." 
              className="search-input"
            />
          </div>
          <div className="header-right">
            <button className="notification-btn">🔔</button>
            <div className="user-info">
              <div className="user-details">
                <span className="user-name">Isabella Rossi</span>
                <span className="user-role">Gerente de Tienda</span>
              </div>
              <div className="user-avatar">IR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Title Section */}
        <div className="title-section">
          <h1>Vista General de la Boutique</h1>
          <p className="subtitle">Refinando el arte de la gestión de alta gama para hoy.</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-header">
                <span className="stat-title">{stat.title}</span>
                <span className="stat-icon">{stat.icon}</span>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-subtitle ${stat.trend || stat.status || ''}`}>
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders and Top Selling Items */}
        <div className="content-grid">
          {/* Recent Orders */}
          <div className="section-card orders-section">
            <div className="section-header">
              <h2>Órdenes Recientes</h2>
              <a href="#" className="view-all-link">Ver Todo</a>
            </div>
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>ID DE ORDEN</th>
                    <th>CLIENTE</th>
                    <th>FECHA</th>
                    <th>ESTADO</th>
                    <th>MONTO</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td className="order-id">{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.date}</td>
                      <td>
                        <span className={`status-badge ${order.statusClass}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="order-amount">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Selling Items */}
          <div className="section-card top-selling-section">
            <div className="section-header">
              <h2>Artículos Más Vendidos</h2>
            </div>
            <div className="top-selling-list">
              {topSellingItems.map((item, index) => (
                <div key={index} className="product-item">
                  <div className="product-image">{item.image}</div>
                  <div className="product-details">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-stock">{item.stock}</p>
                  </div>
                  <div className="product-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="home-footer">
          <p>© 2024 Bello Amuleto Management System. All rights reserved</p>
          <div className="footer-links">
            <a href="#">Estado del Sistema</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Soporte</a>
          </div>
        </footer>
      </div>
      </div>
    </div>
  );
};

export default Home;