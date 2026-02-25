import React, { useState } from 'react';
import './Staff.css';

interface Employee {
  id: number;
  name: string;
  email: string;
  avatar: string;
  position: string;
  department: string;
  status: 'Activo' | 'En Licencia';
}

const Staff: React.FC = () => {
  const [employees] = useState<Employee[]>([
    {
      id: 1,
      name: 'Sofia Rossi',
      email: 'sofia@belioamuleto.com',
      avatar: '👩‍🦰',
      position: 'Boutique Manager',
      department: 'Ventas',
      status: 'Activo',
    },
    {
      id: 2,
      name: 'Marco Vieri',
      email: 'marco@belioamuleto.com',
      avatar: '👨‍💼',
      position: 'Sales Associate',
      department: 'Ventas',
      status: 'Activo',
    },
    {
      id: 3,
      name: 'Elena Giallo',
      email: 'elena@belioamuleto.com',
      avatar: '👱‍♀️',
      position: 'Goldsmith',
      department: 'Taller',
      status: 'Activo',
    },
    {
      id: 4,
      name: 'Luca Brun',
      email: 'luca@belioamuleto.com',
      avatar: '👨‍🦱',
      position: 'Sales Associate',
      department: 'Ventas',
      status: 'En Licencia',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalItems = 42;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="staff-main">
        {/* Header */}
        <div className="staff-header">
          <div className="header-content">
            <h1 className="staff-title">Gestión de Personal</h1>
            <p className="staff-subtitle">Administre el equipo de artesanos y ventas de la boutique</p>
          </div>
          <button className="new-employee-btn">💼 Nuevo Empleado</button>
        </div>

        {/* Statistics Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">TOTAL PERSONAL</span>
              <span className="stat-icon">👥</span>
            </div>
            <div className="stat-value">42</div>
            <div className="stat-change negative">-2%</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">ACTIVOS HOY</span>
              <span className="stat-icon">✓</span>
            </div>
            <div className="stat-value">18</div>
            <div className="stat-change neutral">0%</div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-label">TURNOS PENDIENTES</span>
              <span className="stat-icon">📋</span>
            </div>
            <div className="stat-value">5</div>
            <div className="stat-change negative">-1%</div>
          </div>
        </div>

        {/* Employees Table */}
        <div className="table-section">
          <table className="employees-table">
            <thead>
              <tr>
                <th>NOMBRE</th>
                <th>CARGO</th>
                <th>DEPARTAMENTO</th>
                <th>ESTADO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="name-cell">
                    <div className="employee-info">
                      <div className="employee-avatar">{employee.avatar}</div>
                      <div className="employee-details">
                        <div className="employee-name">{employee.name}</div>
                        <div className="employee-email">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{employee.position}</td>
                  <td className="department-cell">{employee.department}</td>
                  <td>
                    <span className={`status-badge ${employee.status === 'Activo' ? 'active' : 'on-leave'}`}>
                      {employee.status === 'Activo' ? '🟢' : '🟡'} {employee.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <button className="edit-btn">EDITAR</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <span className="pagination-info">Mostrando 1-4 de 42 empleados</span>
            <div className="pagination-controls">
              <button className="pagination-btn" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(0, 5)
                .map((page) => (
                  <button
                    key={page}
                    className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              <button className="pagination-btn" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Staff;
 