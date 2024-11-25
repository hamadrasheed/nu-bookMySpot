import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { AuthContext } from '../../context/context'; // Adjust the path if necessary

const Navbar = () => {
  const { isAuthenticated, logout, loggedInUserRole: userRole, loggedInUserInfo } = useContext(AuthContext); // Use context for auth state
  const [userRoleCurrent, setUserRoleCurrent] = useState(userRole);

  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    logout(); 
    navigate('/'); // Redirect to the homepage
  };

  useEffect(() => {
    setUserRoleCurrent(localStorage.getItem('role'));
  }, [userRoleCurrent])

  console.log('userRoleCurrent',userRoleCurrent);

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

            {
              userRoleCurrent !== 'admin' ?
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/find-parking">
                Find parking
              </Link>
            </li>
            : null

            }

            {
              userRoleCurrent === 'admin' ?
            (<li className="nav-item">
              <Link className="nav-link nav-text" to="/users">
                All Users
              </Link>
            </li>) : null
            }

{
              userRoleCurrent === 'admin' ?
            (<li className="nav-item">
              <Link className="nav-link nav-text" to="/all-parking-spots">
                All Parking spots
              </Link>
            </li>) : null
            }


            {
              userRoleCurrent === 'owner' ? (
                // If the user is an owner
                <li className="nav-item">
                  <Link className="nav-link nav-text" to="/owner-listing">
                    Your Parking spots
                  </Link>
                </li>
              ) : null
            }

            {
              userRoleCurrent === 'driver' ? (
                // If the user is an owner
                <li className="nav-item">
                  <Link className="nav-link nav-text" to="/driver-listing">
                    Your Booked spots
                  </Link>
                </li>
              ) : null
            }

            {userRoleCurrent ? (
              userRoleCurrent === 'owner' ? (
                // If the user is an owner
                <li className="nav-item">
                  <Link className="nav-link nav-text" to="/rent-space">
                    Rent out your space
                  </Link>
                </li>
              ) : userRoleCurrent === 'admin' ? (
                // If the user is an admin (example additional role)
                <li className="nav-item">
                  <Link className="nav-link nav-text" to="/all-bookings">
                    All Bookings
                  </Link>
                </li>
              ) : (
               null
              )
            ) : (

              <li className="nav-item">
                  <Link className="nav-link nav-text" to="/rent-space">
                    Rent out your space
                  </Link>
                </li>
              // If the user is not logged in or has no role
            )}

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
