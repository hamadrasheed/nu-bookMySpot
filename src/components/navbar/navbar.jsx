import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { AuthContext } from '../../context/context'; // Adjust the path if necessary

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext); // Use context for auth state
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    logout(); // Call logout from AuthContext to clear token
    navigate('/'); // Redirect to the homepage
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand logo-text" to="/">
          BookMySpot
        </Link>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links and Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/find-parking">
                Find parking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/how-it-works">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/rent-space">
                Rent out your space
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/ev">
                EV
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/company">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/help">
                Help
              </Link>
            </li>
          </ul>

          {/* Authentication Buttons */}
          <div className="d-flex">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="btn login-button">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="btn signup-button">Sign Up</button>
                </Link>
              </>
            ) : (
              <button
                className="btn btn-danger logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
