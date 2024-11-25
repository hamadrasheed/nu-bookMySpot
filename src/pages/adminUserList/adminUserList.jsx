import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminUserList.css'; // Optional custom styling
import apiService from '../../shared/http';

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    role: '',
  });
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const fetchUsers = async () => {
    try {
      const response = await apiService.get('/admin/all-users', {
        ...{ ...filters, sortBy },
      });
      setUsers(response.data);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filters, sortBy, currentPage]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  if (loading) {
    return <div className="text-center py-5">Loading users...</div>;
  }

  if (users.length === 0) {
    return <div className="text-center py-5">No users found.</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">All Users</h2>

      {/* Filters */}
      <div className="row mb-4">
        {/* Search Filter */}
        <div className="col-md-4 mb-2">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            className="form-control"
            placeholder="Search by name or email"
          />
        </div>

        {/* Role Filter */}
        <div className="col-md-4 mb-2">
          <select
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
            className="form-control"
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="owner">Owner</option>
            <option value="driver">Driver</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="col-md-4 mb-2">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="form-control"
          >
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="role">Sort by Role</option>
          </select>
        </div>
      </div>

      {/* User List */}
      <table className="table table-hover">
        <thead className="table-dark">
          <tr >
            <th className='heading-font-size'>#</th>
            <th className='heading-font-size'>Name</th>
            <th className='heading-font-size'>Email</th>
            <th className='heading-font-size'>Role</th>
            <th className='heading-font-size'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id} className='listing-font-size'>
              <td>{(currentPage - 1) * usersPerPage + index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from(
            { length: Math.ceil(users.length / usersPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? 'active' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default AdminUserList;
