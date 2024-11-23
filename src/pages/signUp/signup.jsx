///

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'; // Import the CSS file
import { toast } from "react-toastify";
import apiService from '../../shared/http';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleSlug: '', // Added to store the selected role
    optOut: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const onCancelClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.roleSlug) {
      toast.error("Please select a role!", {
        position: 'top-center',
        autoClose: true,
      });
      return;
    }

    try {
      const requestBody = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        roleSlug: formData.roleSlug, // Dynamically include the selected role
      };

      const response = await apiService.post('/user/register', requestBody);

      toast.success(response.message, {
        position: 'top-center',
        autoClose: true,
      });

      navigate("/login");
    } catch (error) {
      const data = error?.response?.data;
      toast.error(data.message, {
        position: 'top-center',
        autoClose: true,
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="card signup-card">
        <h1 className="signup-heading">Create an account to continue</h1>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label signup-label">
              First name
            </label>
            <input
              type="text"
              className="form-control signup-input"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Surname */}
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label signup-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control signup-input"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label signup-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control signup-input"
              id="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label signup-label">
              Password
            </label>
            <input
              type="password"
              className="form-control signup-input"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <small className="signup-small">
              Please choose a secure password (at least 8 characters).
            </small>
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            <label className="form-label signup-label">I am:</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="roleSlug"
                id="rentSpot"
                value="owner"
                onChange={handleChange}
              />
              <label className="form-check-label signup-label" htmlFor="rentSpot">
                owner of spot, want to rent it.
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="roleSlug"
                id="findSpot"
                value="driver"
                onChange={handleChange}
              />
              <label className="form-check-label signup-label" htmlFor="findSpot">
                driver, finding a spot to park my car.
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <button
              type="button"
              className="btn btn-outline-secondary signup-button rounded-pill w-50 me-2"
              onClick={onCancelClick}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-outline-secondary signup-button rounded-pill w-50"
            >
              Create account
            </button>
          </div>

          {/* Terms and Privacy */}
          <p className="text-center signup-small">
            By proceeding, you agree to the BookMySpot{' '}
            <a href="#" className="signup-link">
              Terms & Conditions
            </a>
            . Read our{' '}
            <a href="#" className="signup-link">
              Privacy Policy
            </a>{' '}
            for details on how we collect and handle your data.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
